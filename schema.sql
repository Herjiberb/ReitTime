-- ReitTime schema: paste into Supabase > SQL Editor > Run
create table profiles(id uuid primary key references auth.users on delete cascade,username text unique not null,display_name text,bio text default '',scene jsonb default '{}',accent text default '#ff8a1f',is_admin bool default false,banned bool default false,created_at timestamptz default now());
create table communities(id uuid primary key default gen_random_uuid(),slug text unique not null,name text not null,description text default '',owner uuid references profiles on delete set null,featured bool default false,created_at timestamptz default now());
create table community_members(community_id uuid references communities on delete cascade,user_id uuid references profiles on delete cascade,primary key(community_id,user_id));
create table posts(id uuid primary key default gen_random_uuid(),user_id uuid not null default auth.uid() references profiles on delete cascade,community_id uuid references communities on delete set null,body text default '',images text[] default '{}',scene jsonb,poll jsonb,tags text[] default '{}',ups int default 0,downs int default 0,comments_count int default 0,hidden bool default false,created_at timestamptz default now());
create index on posts(created_at desc);create index on posts using gin(tags);
create table votes(post_id uuid references posts on delete cascade,user_id uuid default auth.uid() references profiles on delete cascade,v smallint check(v in(1,-1)),primary key(post_id,user_id));
create table poll_votes(post_id uuid references posts on delete cascade,user_id uuid default auth.uid() references profiles on delete cascade,opt int not null,primary key(post_id,user_id));
create table comments(id uuid primary key default gen_random_uuid(),post_id uuid references posts on delete cascade,user_id uuid not null default auth.uid() references profiles on delete cascade,body text not null,hidden bool default false,created_at timestamptz default now());
create table follows(follower uuid default auth.uid() references profiles on delete cascade,following uuid references profiles on delete cascade,created_at timestamptz default now(),primary key(follower,following));
create table bookmarks(user_id uuid default auth.uid() references profiles on delete cascade,post_id uuid references posts on delete cascade,created_at timestamptz default now(),primary key(user_id,post_id));
create table drafts(id uuid primary key default gen_random_uuid(),user_id uuid default auth.uid() references profiles on delete cascade,body text,created_at timestamptz default now());
create table reports(id uuid primary key default gen_random_uuid(),reporter uuid default auth.uid() references profiles on delete cascade,post_id uuid references posts on delete cascade,comment_id uuid references comments on delete cascade,target_user uuid references profiles on delete cascade,reason text,status text default 'open',created_at timestamptz default now());

create function is_admin() returns bool language sql security definer stable set search_path=public as $$ select coalesce(auth.jwt()->>'email','')='bryantreitzel@gmail.com' or exists(select 1 from profiles where id=auth.uid() and is_admin) $$;
create function new_user() returns trigger language plpgsql security definer set search_path=public as $$ begin insert into profiles(id,username,display_name,is_admin) values(new.id,coalesce(nullif(new.raw_user_meta_data->>'username',''),split_part(new.email,'@',1)||floor(random()*999)::int),coalesce(nullif(new.raw_user_meta_data->>'username',''),split_part(new.email,'@',1)),lower(new.email)='bryantreitzel@gmail.com'); return new; end $$;
create trigger on_auth_user after insert on auth.users for each row execute function new_user();
create function recount() returns trigger language plpgsql security definer as $$ declare p uuid:=coalesce(new.post_id,old.post_id); begin update posts set ups=(select count(*) from votes where post_id=p and v=1),downs=(select count(*) from votes where post_id=p and v=-1),comments_count=(select count(*) from comments where post_id=p and not hidden) where id=p; return null; end $$;
create trigger t1 after insert or update or delete on votes for each row execute function recount();
create trigger t2 after insert or update or delete on comments for each row execute function recount();
create function admin_ban(uid uuid,b bool) returns void language plpgsql security definer as $$ begin if not is_admin() then raise exception 'no'; end if; update profiles set banned=b where id=uid; update posts set hidden=b where user_id=uid; end $$;
create function not_banned() returns bool language sql security definer stable as $$ select not exists(select 1 from profiles where id=auth.uid() and banned) $$;

alter table profiles enable row level security;alter table communities enable row level security;alter table community_members enable row level security;alter table posts enable row level security;alter table votes enable row level security;alter table poll_votes enable row level security;alter table comments enable row level security;alter table follows enable row level security;alter table bookmarks enable row level security;alter table drafts enable row level security;alter table reports enable row level security;
revoke update on profiles from authenticated,anon;grant update(display_name,bio,scene,accent) on profiles to authenticated;
create policy p1 on profiles for select using(true);create policy p2 on profiles for update using(id=auth.uid());
create policy c1 on communities for select using(true);create policy c2 on communities for insert to authenticated with check(owner=auth.uid() and not_banned());create policy c3 on communities for update using(is_admin());create policy c4 on communities for delete using(is_admin() or owner=auth.uid());
create policy m1 on community_members for select using(true);create policy m2 on community_members for insert with check(user_id=auth.uid());create policy m3 on community_members for delete using(user_id=auth.uid());
create policy s1 on posts for select using(not hidden or user_id=auth.uid() or is_admin());create policy s2 on posts for insert to authenticated with check(user_id=auth.uid() and not_banned());create policy s3 on posts for update using(is_admin());create policy s4 on posts for delete using(user_id=auth.uid() or is_admin());
create policy v1 on votes for all using(user_id=auth.uid()) with check(user_id=auth.uid());
create policy pv1 on poll_votes for select using(true);create policy pv2 on poll_votes for insert with check(user_id=auth.uid());
create policy k1 on comments for select using(not hidden or is_admin());create policy k2 on comments for insert to authenticated with check(user_id=auth.uid() and not_banned());create policy k3 on comments for update using(is_admin());create policy k4 on comments for delete using(user_id=auth.uid() or is_admin());
create policy f1 on follows for select using(true);create policy f2 on follows for insert with check(follower=auth.uid());create policy f3 on follows for delete using(follower=auth.uid());
create policy b1 on bookmarks for all using(user_id=auth.uid()) with check(user_id=auth.uid());
create policy d1 on drafts for all using(user_id=auth.uid()) with check(user_id=auth.uid());
create policy r1 on reports for insert to authenticated with check(reporter=auth.uid());create policy r2 on reports for select using(is_admin());create policy r3 on reports for update using(is_admin());

insert into storage.buckets(id,name,public) values('media','media',true) on conflict do nothing;
create policy o1 on storage.objects for select using(bucket_id='media');
create policy o2 on storage.objects for insert to authenticated with check(bucket_id='media' and (storage.foldername(name))[1]=auth.uid()::text);
create policy o3 on storage.objects for delete using(bucket_id='media' and (storage.foldername(name))[1]=auth.uid()::text);
alter publication supabase_realtime add table posts;
