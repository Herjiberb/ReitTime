/* =====================================================================
   ReitTime legal system: Terms of Service, Privacy Policy, EULA.
   HOW TO PUBLISH A NEW VERSION (this is the whole process):
     1. Edit the text of the document(s) below.
     2. Change that document's `v` and `date`, and add a line at the TOP of its `log`.
     3. Deploy. Every user whose accepted versions differ is locked out of the app on
        their next visit/return, shown what changed, and must read + accept again.
   FILL IN LGCFG BEFORE LAUNCH (operator name, contact email, governing law) and have
   a licensed attorney review everything. These documents are a strong template, not
   legal advice.
   ===================================================================== */
(()=>{
const LGCFG={
 app:'ReitTime',
 operator:'the operator of ReitTime',      /* e.g. 'Jane Doe LLC' */
 email:'',                                 /* legal/privacy contact email */
 law:'the laws of the jurisdiction in which the operator is established, without regard to conflict-of-law rules',
 forum:'the competent courts of that jurisdiction',
 minAge:13
};
const N=LGCFG.app,OP=LGCFG.operator,CT=LGCFG.email?LGCFG.email:'the in-app Report feature (flag button on any post, comment or profile)';
const KEYS=['terms','privacy','eula'];

/* paragraph syntax: plain text | '- ' bullet | '> ' highlighted note | **bold** inline */
const DOCS={
terms:{title:'Terms of Service',v:'1.0',date:'2026-11-13',sum:'The rules for using '+N+': who can join, what you may post, what we may do, and the limits of our liability.',
log:[['1.0','2026-11-13','First published version.']],
sections:[
['Agreement',[
`These Terms of Service ("Terms") are a binding contract between you and ${OP} ("we", "us", "our") about your use of ${N}, including the website, the installable web app, and every feature in them (together, the "Service").`,
`> By creating an account, clicking "I agree", or using the Service, you accept these Terms, the Privacy Policy and the End User License Agreement (EULA). If you do not agree, do not use the Service.`,
`The Privacy Policy and the EULA are part of this agreement. If they conflict with these Terms, the EULA controls for software-license questions and the Privacy Policy controls for personal-data questions; otherwise these Terms control.`]],
['Who can use '+N,[
`- You must be at least **${LGCFG.minAge} years old**. If the law where you live sets a higher minimum age to use a service like this without a parent's consent, you must meet that higher age.`,
`- If you are under 18 (or under the age of legal majority where you live), you may use the Service only with the permission of a parent or legal guardian, who agrees to these Terms and is responsible for your use.`,
`- You may not use the Service if you were previously banned, if the law forbids you from using it, or if you are barred from receiving services from us.`,
`- We may ask you to confirm your age. If we reasonably believe you are under the minimum age, we may suspend or delete your account without notice.`,
`You confirm that everything you give us (email, username, age) is true and that you will keep it accurate.`]],
['Your account and security',[
`You are responsible for your login details, your password, your two-factor device, and everything that happens under your account. Keep them private. Do not share, sell, rent, or transfer your account.`,
`- Use a strong, unique password. We cannot see your password and cannot recover it. Resets happen only through the email link.`,
`- Tell us right away if you think someone else has accessed your account.`,
`- Usernames may not impersonate another person, a brand, or the operator, and may not be offensive or misleading. We may change or remove a username at our discretion.`,
`We are not liable for losses caused by someone using your account, with or without your permission.`]],
['Your content and the license you give us',[
`"Content" means anything you submit or create in the Service: posts, comments, polls, drafts, characters and scenes, music and theme songs, branching endings, bios, names, links, tags, votes, stars, and settings.`,
`**You keep ownership** of your Content. But to run the Service you give us a worldwide, non-exclusive, royalty-free, transferable, sublicensable license to host, store, copy, compress, back up, reformat, display, play, distribute, and otherwise use your Content in connection with operating, securing, moderating, improving and promoting the Service. This includes showing it to other users, ranking it in feeds, and keeping copies as described in these Terms.`,
`When you delete Content, we stop showing it, but copies may remain in backups, logs, moderation and legal records for as long as needed (see Section 8 and the Privacy Policy). The license continues for those copies.`,
`You promise that you own your Content or have every right needed to post it, that it does not break the law or anyone's rights, and that posting it does not require us to pay anyone.`,
`Anything you post is visible to other users of the Service. Do not post anything you need to keep secret.`]],
['Rules: what you may not do',[
`You may not use the Service to, or allow anyone else to:`,
`- Post or link to anything illegal, or that helps others break the law.`,
`- Sexualize minors in any way, or post any sexual or exploitative content involving a minor. This is reported to authorities.`,
`- Post pornographic or sexually explicit content, or intimate images of anyone without their consent.`,
`- Threaten, stalk, harass, bully, or incite violence against any person or group, or post someone's private information (doxxing).`,
`- Promote or encourage suicide, self-harm, or eating disorders.`,
`- Post graphic gore, or content built to shock rather than inform, without using the content-warning field.`,
`- Spam, advertise without permission, run scams, phish, or spread malware or malicious links.`,
`- Impersonate others or falsely claim an affiliation.`,
`- Infringe copyrights, trademarks, or other rights. This includes recreating copyrighted music note-for-note as post music or a profile theme song.`,
`- Manipulate votes, stars, super stars, poll results, follower counts, or rankings, including with bots, scripts, fake or multiple accounts, or trading engagement.`,
`- Scrape, crawl, copy at scale, or harvest data, or use the Service or its content to train machine-learning models without our written permission.`,
`- Probe, scan, overload, attack, reverse engineer, or bypass any security, rate limit, ban, or technical measure, or access data that is not yours.`,
`- Evade a suspension or ban, including by creating a new account.`,
`- Use the Service in a way that could damage, disable, or burden it or other users.`,
`We apply these rules to conduct and content type, not to which side of a debate you are on. We decide what breaks the rules, and our decision is final to the extent the law allows.`]],
['Content warnings and sensitive material',[
`Use the content-warning field for spoilers and material some people would not want to see by surprise. A content warning does not make prohibited content allowed. We may add, change, or require a warning on your post.`]],
['Features with their own terms',[
`- **Scheduled posts.** The future-time blur or "hidden" setting is a display feature of the app. It is not a security or privacy tool. The underlying data is stored in the database and may be reachable by the operator or by technically skilled users. Never schedule anything you could not tolerate being seen early.`,
`- **Reals, stars, super stars, votes.** These drive ranking and personalization (explained in the Privacy Policy). Counts may be delayed, inaccurate, adjusted, or reset. They have no cash or other value.`,
`- **Communities.** Community creators may only use tools we give them. We can edit, feature, restrict, merge, or delete any community.`,
`- **Music, characters, branching posts.** These are Content. You are responsible for what they contain. Branching endings are text you write and are subject to every rule above.`,
`- **Links.** We do not control outside sites and are not responsible for them. Click at your own risk.`,
`- **Polls.** Poll results are informal and not a reliable measure of anything.`]],
['Moderation, enforcement, and our right to change or delete records',[
`> Everything on the Service, including posts, comments, profiles, votes, stars, follows, reports, and settings, is stored as records in a database. We and our administrators can read, alter, redact, hide, restrict, re-label, backdate or re-date, move, merge, reduce the reach of, or permanently delete any record, and can suspend or ban any account, at any time, with or without notice, for moderation, safety, security, technical, or legal reasons, or for any reason we think is appropriate. You agree to this.`,
`- We have no duty to monitor, but we may review anything. We have no duty to host, keep, or show any Content.`,
`- We may keep copies of altered or deleted records (including report snapshots and the original text) for moderation, abuse prevention, dispute handling, backups, and legal compliance.`,
`- We may preserve and disclose records and account information to courts, law enforcement, regulators, and other parties where we believe in good faith the law requires it, or to protect rights, safety, and the Service.`,
`- Actions may include warnings, removal, limiting visibility or reach, removing engagement, locking features, suspension, and permanent bans. We have no obligation to explain or to allow appeals, though we may choose to review a request sent via ${CT}.`,
`- If we get it wrong, our only duty is whatever correction we choose, subject to Section 16.`]],
['Feeds, ranking, and no promise of reach',[
`The Service decides what to show you and in what order using the ranking methods summarized in the Privacy Policy. We can change those methods at any time. We do not promise that any Content will be shown to anyone, shown in any order, reach any audience, or earn any engagement. Moderation may reduce the reach of content that is not removed.`]],
['Intellectual property and copyright complaints',[
`The Service, its design, code, text, logos, character engine, and look and feel belong to us or our licensors. Except for your own Content, these Terms give you no ownership of anything.`,
`**Copyright notices.** If you believe Content infringes your copyright, send a notice through ${CT} with: your name and contact details; what work was copied; where the infringing Content is; a statement that you believe in good faith the use is not authorized; a statement, under penalty of perjury, that your notice is accurate and that you own or act for the owner; and your signature. If your Content is removed and you believe that was a mistake, you can send a counter-notice with the same level of detail and consent to the legal forum below.`,
`We may terminate accounts of repeat infringers.`,
`If you send us ideas or feedback, we may use them freely without paying or crediting you.`]],
['Third-party services',[
`The Service runs on third-party infrastructure (for example, database, authentication, hosting and content-delivery providers). Their systems can fail, change, or be attacked, and we are not liable for what they do. Using the Service may also involve their terms and privacy practices.`]],
['Privacy and data',[
`Our Privacy Policy explains what data we collect, how it is stored, how passwords and sign-in work, how the feed and your engagement are used, and what we do with records. By using the Service you consent to that handling.`]],
['Availability, changes, and your own backups',[
`The Service is provided as-is and may be changed, paused, rate-limited, or shut down, wholly or in part, at any time. Features may be added, changed, or removed. We do not guarantee uptime, speed, backups, or that data will be kept or recoverable. Keep your own copy of anything you care about.`]],
['Ending your use',[
`- **You** can stop using the Service at any time. Logging out does not delete your data. To request deletion, delete content in the app where available and contact us through ${CT}.`,
`- **We** can suspend, restrict or end your access, or delete your account and Content, at any time, with or without notice or reason, including for breaking these Terms or for legal, security or operational reasons.`,
`Sections that by their nature should survive (including content license for retained copies, disclaimers, limits of liability, indemnity, disputes, and general terms) survive termination.`]],
['Disclaimer of warranties',[
`> THE SERVICE AND ALL CONTENT ARE PROVIDED "AS IS" AND "AS AVAILABLE", WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, ACCURACY, RELIABILITY, SECURITY, AVAILABILITY, AND UNINTERRUPTED OR ERROR-FREE OPERATION, TO THE FULLEST EXTENT THE LAW ALLOWS.`,
`We do not warrant that Content is accurate, safe, lawful or appropriate; that other users are who they say they are; that the Service will be free of bugs, viruses or harmful components; that data will not be lost, altered, delayed, or exposed; or that any feature (including privacy, blur, hide, schedule, delete, or block features) will work as expected. You use the Service at your own risk.`,
`**Health and safety.** The Service can play sound and music (sometimes loud or sustained) and show animated, flashing, or moving effects (such as lightning text and particles). These can affect people who are sensitive to flashing light, motion or sound. Use the Service in a way that is safe for you, and stop if you feel unwell.`]],
['Limitation of liability',[
`> TO THE FULLEST EXTENT THE LAW ALLOWS, WE, OUR OWNERS, OFFICERS, EMPLOYEES, CONTRACTORS, ADMINISTRATORS, MODERATORS, LICENSORS AND SERVICE PROVIDERS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF PROFITS, REVENUE, DATA, GOODWILL, REPUTATION, OPPORTUNITY, OR DEVICE OR SOFTWARE DAMAGE, ARISING FROM OR RELATED TO THE SERVICE, EVEN IF ADVISED THAT SUCH LOSS IS POSSIBLE.`,
`This covers, without limit: content posted by you or others; conduct of other users, online or offline; moderation actions or the lack of them; edits, hiding, removal or loss of records; account suspension or deletion; unauthorized access, hacking, data breaches or leaks (to the extent the law allows); outages and bugs; third-party services and links; ranking, reach, or engagement outcomes; harm from audio or visual effects; and anything you do or fail to do based on the Service.`,
`**Cap.** Where liability cannot be excluded, our total liability for all claims is limited to the greater of (a) the amount you paid us for the Service in the 12 months before the claim, or (b) USD 50. Some places do not allow some of these limits, so they apply only as far as the law permits. Nothing here limits liability that cannot be limited by law (for example, for fraud or for death or personal injury caused by negligence where the law forbids excluding it).`,
`You agree these limits are a fair basis of the deal and that the Service would not be offered without them.`]],
['Indemnity',[
`You will defend, indemnify and hold harmless us and our owners, officers, employees, contractors, administrators and providers from all claims, damages, losses, liabilities, costs and expenses (including reasonable legal fees) arising from your Content, your use of the Service, your breach of these Terms or the law, or your violation of anyone's rights. We may take over the defense of any matter, and you will cooperate.`]],
['Disputes, arbitration, and governing law',[
`- **Talk first.** Send a written description of the problem via ${CT} and give us 30 days to try to resolve it before filing anything.`,
`- **Binding individual arbitration.** Except as stated below, any dispute with us will be resolved only by final, binding arbitration on an individual basis, not in court and not by a jury, under the rules of a recognized arbitration provider chosen by us, in a way that gives you a fair hearing. The arbitrator applies these Terms.`,
`- **No class actions.** You and we may bring claims only individually, not as a plaintiff or class member in any class, collective, consolidated, or representative action.`,
`- **Exceptions.** Either side may go to small-claims court for qualifying claims, and either side may ask a court for urgent relief to protect intellectual property or the security of the Service.`,
`- **Opt out.** You may opt out of arbitration and the class waiver within 30 days of first accepting these Terms by writing to us at ${CT} with the subject "Arbitration opt-out".`,
`- **Law and courts.** These Terms are governed by ${LGCFG.law}. Anything not sent to arbitration will be heard exclusively in ${LGCFG.forum}, and you consent to it.`,
`- **Time limit.** Any claim must be started within one year after it arose, or it is barred, to the extent the law allows.`,
`If any part of this section is found unenforceable, the rest stays in effect, except that if the class waiver is unenforceable, the arbitration clause does not apply to that claim.`]],
['Legal compliance',[
`You will follow all laws that apply to your use of the Service, including export, sanctions and tax rules. You may not use the Service where it is prohibited. We may take any action we think necessary to comply with the law or legal process.`]],
['Changes to these Terms and re-acceptance',[
`We may change these Terms. Each version has a version number and a date, and a change log is available in the app at Settings > Legal. When a document changes, existing users must review and accept the new version. Until you do, access to content is locked. Continued use after a change, or clicking "I agree", means you accept the new version.`]],
['General terms',[
`- **Entire agreement.** The Terms, Privacy Policy and EULA are the whole agreement between you and us about the Service.`,
`- **Electronic signature.** Clicking "I agree" is your legal signature. We keep a record of what version you accepted, when, and your age bracket.`,
`- **Severability and waiver.** If a part is unenforceable, the rest stays in effect. Not enforcing a right is not a waiver of it.`,
`- **Assignment.** You may not transfer your rights. We may transfer ours, including in a merger, sale or reorganization.`,
`- **Force majeure.** We are not liable for failure caused by events beyond our reasonable control.`,
`- **Notices.** We may give notice by posting in the app, by email to your account address, or by a lock screen. Notices to us go to ${CT}.`,
`- **Headings and language.** Headings are for convenience. The English version controls.`]],
['Contact',[`Questions, notices, copyright complaints, or opt-outs: ${CT}.`]]
]},

privacy:{title:'Privacy Policy',v:'1.0',date:'2026-11-13',sum:'What data we collect, where and how it is stored, how passwords work, exactly how the feed ranks things, and what we can do with your records.',
log:[['1.0','2026-11-13','First published version.']],
sections:[
['Short version',[
`> We collect what you give us (account, profile, posts, comments, votes, stars, follows) plus basic technical data. It is stored in a cloud database. Your password is stored only as a hash by our sign-in provider. Other signed-in users can see your public content. Our administrators and database operators can see and change records. We use your activity to rank your feed. We do not sell your personal information, and as of this version we show no third-party ads.`,
`This policy covers ${N}. By using it, you agree to it. Defined terms match the Terms of Service.`]],
['Who is responsible for your data',[
`${OP} decides why and how your data is used (the "controller" or "business"). Contact: ${CT}.`]],
['What we collect',[
`**Account data.** Email address, username, and your sign-in credentials (see Section 5). Your acceptance record: which legal versions you accepted, when, and your age bracket.`,
`**Profile data.** Display name, bio, status, mood, location text, website link, accent colors, badge, sex field if you set it, your character and scene settings, and your profile theme song.`,
`**Content.** Posts (text, tags, mood tags, content warnings, links, polls, characters, music, branching endings), comments, drafts, communities you create or post in, and scheduled times for posts (publish time and display mode).`,
`**Engagement.** Hypes and disparages (votes), stars and super stars (with level and the time you gave super stars), poll votes, bookmarks, follows and followers, community memberships, and reports you file.`,
`**Search.** When you submit a search, the search text is sent to our database to build aggregate suggestions and trending terms (term and count). As built, the app sends the term and not your identity with it.`,
`**Technical data.** Like any website, our hosting and database providers process your IP address, device and browser type, request times and error data. We do not control all of their logs.`,
`**Things you send us.** Messages, reports, legal requests, and anything you write in them.`,
`We do not intentionally collect precise location, contacts, microphone or camera data. Location text on your profile is whatever you type.`]],
['Where and how your data is stored',[
`> Your posts, comments, profile, engagement and other records live in a hosted PostgreSQL database run through a third-party backend provider. They are rows in tables that the operator and the database administrators can read, edit and delete. They are not end-to-end encrypted.`,
`- **Transit and rest.** Connections use HTTPS. Our provider encrypts stored data at rest on its infrastructure. That does not stop authorized administrators from reading it.`,
`- **Compression.** To save space, the app may compress post text, bios and scene data in your browser (DEFLATE) before storing it. Compression is not encryption.`,
`- **Images and links.** Posts may reference external image or website addresses. Those hosts have their own privacy practices.`,
`- **Backups and logs.** Providers may keep backups and logs. Deleted or altered data may remain in them for a period we do not fully control.`,
`- **On your device.** The app stores some data in your browser (Section 13).`]],
['Passwords and sign-in',[
`- Sign-in is handled by our authentication provider. Your password is sent over HTTPS and stored only as a salted, one-way hash. We cannot see it, read it, or tell it to you. We cannot recover it. You reset it by email link.`,
`- Your session is kept in your browser's local storage as an access token, using a secure code-exchange (PKCE) flow. Anyone with access to your unlocked device or browser data may use your session. Log out on shared devices.`,
`- Two-factor sign-in (authenticator app) is optional. The authentication provider stores the factor on your behalf.`,
`- Use a unique password. No system is perfectly secure, and we cannot promise your account will never be breached.`,
`- Administrators can ban or lock accounts. They cannot see your password.`]],
['How we use data',[
`- Run the Service: show your content, deliver features, keep you signed in.`,
`- Personalize: rank feeds, Reals, suggested people, suggested communities and search suggestions (Section 7).`,
`- Keep the Service safe: spot spam, fake engagement and abuse, enforce the Terms, handle reports, protect users and the operator.`,
`- Operate and improve: fix bugs, measure use in aggregate, plan capacity.`,
`- Comply with law and respond to legal process, and defend or enforce legal rights.`,
`- Communicate with you about your account, reports and legal updates.`,
`We do not sell your personal information. We do not share it for cross-context advertising. As of this version the Service shows no third-party ads and uses no third-party analytics.`]],
['How the algorithm and your engagement work (full disclosure)',[
`> Everything you do in the app (what you hype, disparage, star, save, follow, comment on, open, linger on, and search) can affect what you see. Below are the actual current rules. Numbers may change in later versions and when they do, this section is updated.`,
`**"For you" feed.** Each post gets a score, then posts are picked highest-first:`,
`- Base score = (hypes − 1.2 × disparages + 1 + 1.5 × comments + 2 if it has a poll) divided by (hours old + 2) raised to the power 1.4. Newer and more-engaged posts rank higher; old posts fade.`,
`- Multipliers: author you follow × 1.6; community you joined × 1.3; post with a character × 1.15.`,
`- Your own reactions: you gave a star × 1.6, a super star × 2.4; you hyped × 1.45; you disparaged × 0.35. Starred and hyped posts also age more slowly for you.`,
`- Affinity: authors whose posts you starred or hyped get up to about +60% for future posts.`,
`- Repeat views: posts you have already seen (lingered on for about 1.2 seconds) are scored lower, by roughly 45% per view up to two views. This fades after about 3 days and ends after 7. Posts that are new since your last visit get × 1.5.`,
`- Variety: each extra post from the same author already placed in your feed multiplies the next one by 0.6, so one person cannot fill the feed.`,
`- Posts you already bookmarked, starred, or voted on are placed after fresh ones.`,
`**"Following" tab.** Posts from people you follow and yourself, newest first.`,
`**Reals.** Reals learns on your device (not on our servers). It tracks, per author, tag, mood and community, a preference value based on how long you watch each post compared with how long it takes to read, plus your hypes, disparages, stars, saves, follows and comment opens. Quick skips push values down. Values decay 8% per day and are capped. Scoring also weighs recency, popularity, being from someone you follow or a community you joined, and whether you already saw the post. About 8% of the time it picks randomly from your top 15 to show variety. It avoids repeating the same author back to back. It keeps a "seen today" list to avoid repeats. This learned profile is stored in your browser only, and you reset it by clearing site data.`,
`**Suggested people.** Ranked from who is followed by people you follow, whose posts match tags you engaged with, who is active in your communities, and general popularity. You can dismiss suggestions.`,
`**Communities page.** Ranked from people you follow in them, recent activity, topics you engage with, whether it is featured, and size.`,
`**Search.** Suggestions and "popular right now" come from aggregate search terms: a term needs at least 2 searches to be suggested and at least 3 within 30 days to trend.`,
`**What other people can see.** Public: your profile, posts, comments, character, theme song, follower and following lists and counts, hype/disparage totals, star totals, the star score (stars count 1 point, super stars 3), and poll results. Not shown to other users in the app: who hyped, disparaged, starred, saved or voted in a poll, your private star list, and your drafts. **However, administrators and database operators can see all records**, including those, and we may use them for ranking, safety, abuse detection, aggregate statistics and legal needs.`,
`**Control and moderation.** We may boost, limit, hide or remove any content or account, change scores, remove fake engagement, or change any of the above rules without notice. No guarantee of reach is made.`]],
['Who we share data with',[
`- **Service providers** that host, store, secure, deliver and operate the Service (database, authentication, hosting, content delivery). They may use data only to provide services to us.`,
`- **Other users**, as described above.`,
`- **Authorities and legal parties** when we believe in good faith that disclosure is required or permitted by law, subpoena, court order or legal process, or needed to protect safety, rights, property, or to investigate abuse or illegal activity (including child safety reports).`,
`- **Successors**, if the Service or operator is merged, sold or reorganized.`,
`- **Others** with your consent or at your direction.`,
`The app loads its client library from a public content-delivery network, which can see your IP address as part of normal web requests.`]],
['Moderation, alteration, retention and deletion',[
`> Your data is records in a database. We and our administrators can alter, redact, hide, restrict, re-date, move or permanently delete any record, and suspend or ban accounts, at any time and for moderation, safety, technical or legal reasons, as the Terms of Service state.`,
`- **Retention.** We keep data while your account is active and afterwards for as long as reasonably needed for the purposes above, including security, abuse prevention, dispute handling, backups and legal obligations. We do not promise a fixed schedule.`,
`- **Deletion.** When you delete a post or comment it is removed from the live app. Copies can remain in backups, logs, report records and legal holds. Accounts that were banned may be kept so the ban can be enforced.`,
`- **Legal holds.** We may preserve data, even if you delete it, when we believe it is relevant to a legal matter, investigation or request.`,
`- **Edits.** If you edit a post, we may keep earlier versions.`]],
['Your choices and rights',[
`- Edit or delete your own posts, comments, drafts, profile fields, theme song and many settings in the app.`,
`- Turn on two-factor sign-in, and change your password.`,
`- Clear local data by clearing your browser's site data. This also resets Reals learning.`,
`Depending on where you live (for example, the EEA, the UK, or certain US states), you may have rights to access, correct, delete, receive a copy of, restrict, or object to processing of your personal data, and to withdraw consent. To use them, contact us via ${CT}. We may need to verify who you are. We will respond as the law requires. Some data cannot be deleted where we must keep it for law, security or legitimate purposes. We do not discriminate against you for using these rights. You may lodge a complaint with your local data-protection authority.`]],
['Legal bases (where required)',[
`Where law requires a legal basis: performing our contract with you (running your account), our legitimate interests (security, fraud and abuse prevention, ranking, improving the Service), complying with legal obligations, and your consent (for example, accepting these documents).`]],
['Children',[
`The Service is not for anyone under ${LGCFG.minAge}, and we do not knowingly collect their data. If you are ${LGCFG.minAge} to 17, use the Service only with a parent or guardian's permission. If we learn that we hold data from a child under ${LGCFG.minAge}, we will delete the account and data. Parents who believe this has happened should contact us via ${CT}.`]],
['Local storage, cookies and the service worker',[
`We use browser storage rather than ad cookies. Items include: your sign-in session; theme choice; posts you have seen and when (to avoid repeats); your Reals preference profile and daily watched list; recent searches; dismissed suggestions; music mute setting; a copy of your legal acceptance record; and an offline cache of the app files. They stay on your device until you clear them. Blocking or clearing them may log you out or reset personalization.`]],
['Security',[
`We use reasonable measures including HTTPS, hashed passwords, access controls at the database level, and optional two-factor sign-in. No method is 100% secure. We cannot guarantee security and are not liable for breaches beyond what the law requires. If a breach affecting you occurs, we will notify you and authorities where the law requires.`]],
['International use',[
`Our providers may store and process data in countries other than yours, including countries whose data laws differ. By using the Service you understand your data may be transferred there.`]],
['Do-not-track and advertising',[
`The Service does not track you across other sites and does not currently serve advertising. Browser "Do Not Track" signals do not change this behavior.`]],
['Changes to this policy',[
`When we change this policy we publish a new version number and date, add a change-log entry, and ask existing users to review and accept before they can continue. See Settings > Legal.`]],
['Contact',[`${CT}.`]]
]},

eula:{title:'End User License Agreement',v:'1.0',date:'2026-11-13',sum:'Your license to use the '+N+' app itself: what you can do with the software and what you may not.',
log:[['1.0','2026-11-13','First published version.']],
sections:[
['Scope',[
`This End User License Agreement ("EULA") is between you and ${OP}. It covers the ${N} software: the web app, installable web app (PWA), its code, scripts, styles, icons, character and scene generator, music engine and related files (the "Software"). Use of the Service is also governed by the Terms of Service and the Privacy Policy.`]],
['License grant',[
`We grant you a limited, personal, non-exclusive, non-transferable, non-sublicensable, revocable license to run and use the Software, in the form we provide it, on devices you own or control, for your own lawful personal use of the Service. The Software is licensed, not sold.`]],
['Restrictions',[
`You may not, and may not let anyone else:`,
`- Copy, modify, adapt, translate, or create derivative works of the Software, except the copies your browser makes to run it.`,
`- Reverse engineer, decompile, or try to extract source code, algorithms, keys or non-public interfaces, except where the law gives you that right and cannot be waived.`,
`- Rent, lease, sell, sublicense, host, mirror, frame, distribute or make the Software or the Service available to others as your own, or build a competing or copycat service from it.`,
`- Remove or hide notices, attributions or version information.`,
`- Use scripts, bots or automated tools to access the Software or Service, or bypass limits, bans, access controls or the legal-acceptance lock screen.`,
`- Use the Software to break the law, infringe rights, or harm the Service or other users.`,
`- Use public-facing access credentials that appear in the app for any purpose other than normal use of the app.`]],
['Ownership',[
`We and our licensors own all rights in the Software, including design, code, graphics, the character generator, music engine and trademarks. No rights are given except those stated here. You keep ownership of your own Content (see the Terms of Service).`]],
['Updates and offline use',[
`The Software updates automatically. A background service worker caches files and fetches fresh versions, and may reload the app to apply an update. We may change, add, or remove features at any time and have no duty to provide support, maintenance or any particular version. Some updates (including new legal versions) are required to keep using the Service.`]],
['Device features',[
`The Software may use your device's audio output, local storage, clipboard (for copy buttons), vibration, and service worker. You are responsible for your device, connection and any fees from your carrier.`]],
['Third-party and open-source components',[
`The Software includes components from others, including the Supabase JavaScript client library loaded from a content-delivery network. These are provided under their own licenses, which apply to those components. Nothing here restricts rights those licenses give you.`]],
['Audio and visual safety',[
`The Software can play loud, sustained or looping sound and show animated and flashing effects. Set a safe volume, take breaks, and do not use it where it could distract you from safety-critical tasks such as driving. If you are sensitive to flashing light or motion, avoid posts that use such effects.`]],
['Feedback',[
`Suggestions you give about the Software may be used by us without restriction or payment.`]],
['Termination',[
`This license lasts until ended. It ends automatically if you break it, if you lose access to the Service, or if we end it. When it ends, stop using the Software and delete locally stored copies and data. Restrictions, ownership, disclaimers, limits of liability and the dispute terms continue after termination.`]],
['Warranty disclaimer and limits',[
`> THE SOFTWARE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTY OF ANY KIND. WE DISCLAIM ALL WARRANTIES, EXPRESS, IMPLIED OR STATUTORY, TO THE FULLEST EXTENT THE LAW ALLOWS. THE LIMITATIONS OF LIABILITY, INDEMNITY, ARBITRATION AND GOVERNING LAW IN THE TERMS OF SERVICE APPLY TO THIS EULA AS IF FULLY WRITTEN HERE.`]],
['Government and export',[
`The Software is commercial software. You may not use or export it in violation of applicable export, sanctions or trade laws.`]],
['General',[
`If this EULA conflicts with the Terms of Service about the Software license, this EULA controls. If any part is unenforceable, the rest remains in effect. We may assign this EULA. Questions: ${CT}.`]]
]}};
const LV=()=>KEYS.map(k=>k+DOCS[k].v).join('|');

/* ---------- renderers ---------- */
const inl=t=>esc(t).replace(/\*\*([^*]+)\*\*/g,'<strong>$1</strong>');
function body(sec,id){let h='',ul=false;for(const p of sec[1]){if(p.startsWith('- ')){if(!ul){h+='<ul>';ul=true}h+='<li>'+inl(p.slice(2))+'</li>';continue}if(ul){h+='</ul>';ul=false}h+=p.startsWith('> ')?'<div class="lgn">'+inl(p.slice(2))+'</div>':'<p>'+inl(p)+'</p>'}return h+(ul?'</ul>':'')}
function docHTML(k,standalone){const d=DOCS[k],ids=i=>'lg-'+k+'-'+(i+1);
 return `<div class="lgd"><h1>${esc(d.title)}</h1><div class="lgm">Version <b>${d.v}</b> · Effective ${d.date} · ${esc(N)}</div><div class="lgtoc">${d.sections.map((s,i)=>`<a ${standalone?`href="#${ids(i)}"`:`href="#" data-lgs="${ids(i)}"`}><i>${i+1}</i>${esc(s[0])}</a>`).join('')}</div>`+
 d.sections.map((s,i)=>`<h2 id="${ids(i)}"><i>${i+1}</i>${esc(s[0])}</h2>${body(s)}`).join('')+
 `<h2><i>↺</i>Version history</h2><ul>${d.log.map(l=>`<li><b>${l[0]}</b> (${l[1]}): ${esc(l[2])}</li>`).join('')}</ul><p class="lgm">End of ${esc(d.title)}.</p></div>`}
const wrap=(t,w,f,r)=>{const o=[];let l=f;t.split(/\s+/).forEach(x=>{if((l+x).length>w&&l.trim().length>f.trim().length){o.push(l.trimEnd());l=r+x+' '}else l+=x+' '});o.push(l.trimEnd());return o.join('\n')};
function docText(k){const d=DOCS[k],pl=s=>s.replace(/\*\*/g,''),L=[d.title.toUpperCase(),N+' · Version '+d.v+' · Effective '+d.date,'='.repeat(60),''];
 d.sections.forEach((s,i)=>{L.push((i+1)+'. '+s[0].toUpperCase(),'');s[1].forEach(p=>{L.push(p.startsWith('- ')?wrap(pl(p.slice(2)),80,'  - ','    '):p.startsWith('> ')?wrap('NOTE: '+pl(p.slice(2)),80,'  ','  '):wrap(pl(p),80,'',''),'')})});
 L.push('VERSION HISTORY');d.log.forEach(l=>L.push('  '+l[0]+' ('+l[1]+'): '+l[2]));L.push('','End of '+d.title+'.');return L.join('\n')}
const allText=()=>KEYS.map(docText).join('\n\n\n'+'#'.repeat(60)+'\n\n\n');
const VARS=':root{--bg:#f7faf7;--cd:#fff;--tx:#14201a;--mu:#6b7a72;--bd:#e3ebe6;--o:#ff8a1f;--g:linear-gradient(135deg,#ff8a1f,#2fd07a)}@media(prefers-color-scheme:dark){:root{--bg:#0b120f;--cd:#111a16;--tx:#e8f0ea;--mu:#93a39a;--bd:#24332b}}';
const DOCCSS=`.lgd{line-height:1.65;font-size:15.5px;color:var(--tx)}.lgd h1{font-size:28px;margin:4px 0 4px;line-height:1.15}.lgd .lgm{color:var(--mu);font-size:13.5px}.lgd h2{display:flex;gap:10px;align-items:baseline;font-size:19px;margin:30px 0 10px;scroll-margin-top:10px;line-height:1.3}.lgd h2 i,.lgd .lgtoc i{font-style:normal;flex:none;min-width:30px;height:26px;display:inline-grid;place-items:center;border-radius:9px;background:var(--g);color:#fff;font-size:12.5px;font-weight:700;padding:0 6px}.lgd p{margin:0 0 12px}.lgd ul{padding-left:20px;margin:0 0 12px}.lgd li{margin:5px 0}.lgd .lgn{border-left:4px solid var(--o);background:rgba(255,138,31,.1);padding:11px 14px;border-radius:0 12px 12px 0;margin:0 0 14px;font-size:14.5px}.lgd .lgtoc{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:6px;margin:16px 0 4px}.lgd .lgtoc a{display:flex;gap:8px;align-items:center;padding:7px 10px;border:1px solid var(--bd);border-radius:11px;color:var(--tx);text-decoration:none;font-size:13.5px}.lgd .lgtoc a:hover{border-color:var(--o)}.lgd strong{font-weight:700}`;
const htmlDoc=k=>`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(DOCS[k].title)} v${DOCS[k].v} · ${esc(N)}</title><style>${VARS}html{background:var(--bg)}body{margin:0;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;background:var(--bg)}main{max-width:780px;margin:0 auto;padding:28px 20px 60px;background:var(--cd);min-height:100vh}${DOCCSS}@media print{main{padding:0}}</style></head><body><main>${docHTML(k,true)}</main></body></html>`;

/* ---------- download / new-tab helpers ---------- */
const save=(name,txt,type)=>{const u=URL.createObjectURL(new Blob([txt],{type}));const a=document.createElement('a');a.href=u;a.download=name;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(u),6e4)};
const tab=txt=>{const u=URL.createObjectURL(new Blob([txt],{type:'text/plain;charset=utf-8'}));if(!window.open(u,'_blank'))toast('Allow pop-ups to open the text version');setTimeout(()=>URL.revokeObjectURL(u),6e4)};
const fname=(k,ext)=>(N+'-'+k+'-v'+DOCS[k].v).toLowerCase()+'.'+ext;

/* ---------- acceptance record ---------- */
function rec(){const p=mp&&mp.scene&&mp.scene.p,lg=p&&p.lg;let r=lg&&lg.v?lg:null;if(!r||r.v!==LV()){try{const l=JSON.parse(localStorage['rtlg_'+me.id]||'null');if(l&&l.v===LV())r=l}catch{}}return r}
const ok=()=>{const r=rec();return !!r&&r.v===LV()&&r.age!='u'};
async function persist(r){try{localStorage['rtlg_'+me.id]=JSON.stringify(r)}catch{}
 try{const p={...((mp.scene&&mp.scene.p)||{}),lg:r},{data,error}=await sb.from('profiles').update(await zprof({scene:{...(mp.scene||{}),p}})).eq('id',me.id).select().single();if(!error&&data){await zfix(data);mp=data}else if(error)console.warn(error.message)}catch(e){console.warn(e)}
 sb.from('legal_acceptances').insert({user_id:me.id,terms:DOCS.terms.v,privacy:DOCS.privacy.v,eula:DOCS.eula.v,age:r.age,agent:navigator.userAgent.slice(0,200)}).then(()=>{},()=>{})}

/* ---------- overlay viewer ---------- */
const closeV=()=>{document.querySelectorAll('.lgv').forEach(x=>x.remove())};
function view(k,o){o=o||{};closeV();const d=DOCS[k],el=document.createElement('div');el.className='lgv';
 el.innerHTML=`<div class="lgp"><div class="lgh"><div><b>${esc(d.title)}</b><small>Version ${d.v} · Effective ${d.date}</small></div><button type="button" class="lgx" aria-label="Close">${ic('x',22)}</button></div><div class="lgtb"><button type="button" class="chip sm" data-lgt="${k}">${ic('link',15)} New tab (text)</button><button type="button" class="chip sm" data-lgd="${k}">Download .txt</button><button type="button" class="chip sm" data-lgh="${k}">Download .html</button></div><div class="lgb">${docHTML(k)}</div>${o.read?`<div class="lgf"><i></i><span>Scroll to the end to mark as read</span></div>`:''}</div>`;
 document.body.append(el);const b=el.querySelector('.lgb'),bar=el.querySelector('.lgf i'),lb=el.querySelector('.lgf span');let done=false;
 const chk=()=>{const r=b.scrollTop/Math.max(1,b.scrollHeight-b.clientHeight);if(bar)bar.style.width=Math.min(100,r*100)+'%';if(o.read&&!done&&b.scrollTop+b.clientHeight>=b.scrollHeight-30){done=true;lb.textContent='Marked as read ✓';el.querySelector('.lgf').classList.add('ok');o.read()}};
 b.addEventListener('scroll',chk,{passive:true});setTimeout(chk,60);
 el.querySelector('.lgx').onclick=closeV;el.addEventListener('click',e=>{const a=e.target.closest('[data-lgs]');if(a){e.preventDefault();const t=el.querySelector('#'+a.dataset.lgs);t&&t.scrollIntoView({behavior:'smooth',block:'start'})}});
 const esc2=e=>{if(!document.body.contains(el))return removeEventListener('keydown',esc2);if(e.key=='Escape')closeV()};addEventListener('keydown',esc2)}

/* ---------- mandatory gate ---------- */
function gate(){return new Promise(res=>{if(ok())return res();hideSplash();document.documentElement.classList.add('lglock');
 const cur=rec(),first=!cur,changed=KEYS.filter(k=>first||!cur.d||cur.d[k]!==DOCS[k].v),rd={};KEYS.forEach(k=>rd[k]=!changed.includes(k));
 let age='',yes=false;const el=document.createElement('div');el.id='lgg';el.className='lgg';
 const logs=first?'':changed.map(k=>{const d=DOCS[k],old=cur.d&&cur.d[k],i=d.log.findIndex(l=>l[0]==old),L=i<0?d.log:d.log.slice(0,i);return `<div class="lgcl"><b>${esc(d.title)} → v${d.v}</b>${L.map(l=>`<div>${esc(l[1])}: ${esc(l[2])}</div>`).join('')}</div>`}).join('');
 const draw=()=>{const all=KEYS.every(k=>rd[k]),can=all&&yes&&(age=='18'||age=='13');
  el.innerHTML=`<div class="lgc"><div class="lglogo">${LOGO}</div><h2>${first?'Review and accept to continue':'We updated our legal documents'}</h2><p class="mu">${first?'Before you use '+esc(N)+', read the three documents below and confirm your age.':'Your access is locked until you read and accept the updated documents.'} Open each one and scroll to the end.</p>${first?'':logs}
  <div class="lgrs">${KEYS.map(k=>`<div class="lgr ${rd[k]?'ok':''}"><div><b>${esc(DOCS[k].title)}</b><small>v${DOCS[k].v} · ${rd[k]?(changed.includes(k)?'Read ✓':'Already accepted ✓'):'Not read yet'}</small></div><button type="button" class="chip sm" data-lgg="${k}">${rd[k]&&changed.includes(k)?'Review':'Read'}</button><button type="button" class="chip sm" data-lgt="${k}">Text tab</button></div>`).join('')}</div>
  <h4 class="sg">Your age</h4><div class="seg" id="lga"><button type="button" data-a="18" class="${age=='18'?'sel':''}">18 or older</button><button type="button" data-a="13" class="${age=='13'?'sel':''}">${LGCFG.minAge}–17</button><button type="button" data-a="u" class="${age=='u'?'sel':''}">Under ${LGCFG.minAge}</button></div>
  ${age=='13'?`<p class="mu">You need a parent or legal guardian's permission, and they must agree to these documents for you.</p>`:''}${age=='u'?`<p class="lgbad">You must be at least ${LGCFG.minAge} to use ${esc(N)}. You can't continue.</p>`:''}
  <label class="chk lgck"><input type="checkbox" id="lgy" ${yes?'checked':''}> <span>I have read and agree to the Terms of Service, Privacy Policy and EULA, including the arbitration and class-action waiver, the limits of liability, and that my posts and data are stored in a database that can be altered, hidden or deleted for moderation or legal reasons.${age=='13'?' A parent or guardian has permitted me and agrees on my behalf.':''}</span></label>
  <button type="button" class="btn" id="lgok" ${can?'':'disabled'}>${ic('check',18)} I agree, continue</button><button type="button" class="btn ghost" id="lgno">${ic('out',18)} Log out instead</button><p class="mu lgsm">Version ${esc(LV().replace(/\|/g,' · '))}. Your acceptance (versions, time and age bracket) is recorded.</p></div>`};
 draw();document.body.append(el);
 el.addEventListener('click',async e=>{const g=e.target.closest('[data-lgg]');if(g){const k=g.dataset.lgg;view(k,{read:()=>{if(!rd[k]){rd[k]=true;const y=el.scrollTop;draw();el.scrollTop=y}}});return}
  const a=e.target.closest('#lga button');if(a){age=a.dataset.a;const y=el.scrollTop;draw();el.scrollTop=y;return}
  if(e.target.closest('#lgno')){await sb.auth.signOut();location.hash='';location.reload();return}
  const b=e.target.closest('#lgok');if(b&&!b.disabled){b.disabled=true;await persist({v:LV(),d:{terms:DOCS.terms.v,privacy:DOCS.privacy.v,eula:DOCS.eula.v},age:age=='18'?'18+':'13-17',at:new Date().toISOString()});closeV();el.remove();document.documentElement.classList.remove('lglock');toast('Thanks — agreement recorded');res()}});
 el.addEventListener('change',e=>{if(e.target.id=='lgy'){yes=e.target.checked;const y=el.scrollTop;draw();el.scrollTop=y}})})}

/* ---------- in-app hub page (#/legal) ---------- */
async function page(b){const r=rec();
 A.innerHTML=H('shield','Legal')+`<div class="card"><b>${r?ic('check',16)+' Your agreement on record':'Not on record'}</b><div class="mu">${r?`Accepted ${new Date(r.at).toLocaleString()} · age bracket ${esc(r.age)}<br>Terms v${esc(r.d.terms)} · Privacy v${esc(r.d.privacy)} · EULA v${esc(r.d.eula)}`:'Sign in again to review and accept.'}</div></div>`+
 KEYS.map(k=>{const d=DOCS[k];return `<div class="card col"><div class="row" style="flex-wrap:nowrap"><b style="flex:1;font-size:17px">${esc(d.title)}</b><span class="mood">v${d.v}</span></div><div class="mu">${esc(d.sum)}</div><div class="mu">Effective ${d.date}</div><div class="row wrap"><button type="button" class="btn" data-lgv="${k}">Read</button><button type="button" class="chip" data-lgt="${k}">${ic('link',16)} New tab (text)</button><button type="button" class="chip" data-lgd="${k}">.txt</button><button type="button" class="chip" data-lgh="${k}">.html</button></div><details class="lgdt"><summary>Version history</summary>${d.log.map(l=>`<div class="mu"><b>${l[0]}</b> · ${l[1]} — ${esc(l[2])}</div>`).join('')}</details></div>`}).join('')+
 `<div class="row wrap"><button type="button" class="chip" data-lgd="all">Download all (.txt)</button><button type="button" class="chip" data-lgt="all">All in new tab</button></div><p class="mu">Questions or requests: ${esc(CT)}.</p>`;
 if(b&&DOCS[b])view(b)}
const links=()=>`<p class="mu lgl">By logging in or creating an account you agree to the <a href="#" data-lgv="terms">Terms of Service</a>, <a href="#" data-lgv="privacy">Privacy Policy</a> and <a href="#" data-lgv="eula">EULA</a>. You will be asked to read and accept them.</p>`;

document.addEventListener('click',e=>{const t=e.target,q=s=>t.closest&&t.closest(s);let a;
 if(a=q('[data-lgv]')){e.preventDefault();view(a.dataset.lgv)}
 else if(a=q('[data-lgt]')){e.preventDefault();const k=a.dataset.lgt;tab(k=='all'?allText():docText(k))}
 else if(a=q('[data-lgd]')){e.preventDefault();const k=a.dataset.lgd;k=='all'?save((N+'-legal-all').toLowerCase()+'.txt',allText(),'text/plain;charset=utf-8'):save(fname(k,'txt'),docText(k),'text/plain;charset=utf-8')}
 else if(a=q('[data-lgh]')){e.preventDefault();const k=a.dataset.lgh;save(fname(k,'html'),htmlDoc(k),'text/html;charset=utf-8')}});
document.addEventListener('visibilitychange',()=>{try{if(!document.hidden&&me&&mp&&!ok()&&!document.getElementById('lgg'))gate()}catch{}});

const st=document.createElement('style');st.textContent=DOCCSS+`
html.lglock,html.lglock body{overflow:hidden}
.lgv,.lgg{position:fixed;inset:0}
.lgv{z-index:450;background:rgba(8,14,11,.62);backdrop-filter:blur(8px);display:flex}
.lgg{z-index:400;background:var(--bg);overflow-y:auto;-webkit-overflow-scrolling:touch}
.lgp{width:min(100%,820px);margin:auto;height:100%;display:flex;flex-direction:column;background:var(--cd);color:var(--tx);padding-top:env(safe-area-inset-top,0)}
@media(min-width:860px){.lgp{height:94vh;border-radius:22px;box-shadow:0 30px 80px rgba(0,0,0,.45);overflow:hidden}}
.lgh{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:14px 16px;border-bottom:1px solid var(--bd)}
.lgh b{display:block;font-size:17px}.lgh small{color:var(--mu)}
.lgx{border:0;background:none;cursor:pointer;padding:6px}
.lgtb{display:flex;gap:6px;overflow-x:auto;padding:8px 14px;border-bottom:1px solid var(--bd);scrollbar-width:none}
.lgb{flex:1;overflow-y:auto;padding:6px 18px 40px;-webkit-overflow-scrolling:touch}
.lgf{position:relative;padding:9px 16px calc(9px + env(safe-area-inset-bottom,0));font-size:13px;color:var(--mu);border-top:1px solid var(--bd);overflow:hidden}
.lgf i{position:absolute;left:0;top:0;height:3px;width:0;background:var(--g);transition:width .1s}
.lgf.ok{color:var(--gr,#1fb868);font-weight:600}
.lgc{max-width:640px;margin:0 auto;padding:calc(28px + env(safe-area-inset-top,0)) 18px 50px;display:flex;flex-direction:column;gap:12px}
.lglogo{width:68px;height:68px}.lglogo svg{width:100%;height:100%}
.lgc h2{margin:0;font-size:26px}
.lgrs{display:flex;flex-direction:column;gap:8px}
.lgr{display:flex;align-items:center;gap:8px;padding:12px;border:1px solid var(--bd);border-radius:14px;background:var(--cd)}
.lgr>div{flex:1}.lgr small{display:block;color:var(--mu)}
.lgr.ok{border-color:var(--gr,#1fb868)}
.lgcl{padding:10px 12px;border-left:4px solid var(--o);background:rgba(255,138,31,.1);border-radius:0 12px 12px 0;font-size:14px}
.lgbad{color:#e5484d;font-weight:600;margin:0}
.lgck{display:flex;gap:10px;align-items:flex-start;font-size:14px;line-height:1.5}
.lgck input{margin-top:4px;flex:none}
.lgc .btn[disabled]{opacity:.45;cursor:not-allowed}
.lgsm{font-size:12px}.lgl{font-size:12.5px;text-align:center;margin-top:14px}.lgl a{text-decoration:underline}
.lgdt summary{cursor:pointer;color:var(--mu);font-size:14px}
`;document.head.append(st);

window.legalGate=gate;window.legalView=view;window.legalPg=page;window.legalLinks=links;window.legalOk=ok;window.LEGAL={docs:DOCS,version:LV,keys:KEYS};
})();
