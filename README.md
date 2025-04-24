# 🚀 bugginator – Dev Issue Tracker for Teams & Projects

Bugginator is a full-stack, scalable issue tracking system built for modern dev teams. From managing bugs and tasks to visualizing progress on a slick Kanban board – it's like Jira and GitHub Issues had a smarter baby.

## 🧩 Features

- **User Auth**: JWT-based auth with Role-Based Access Control (Admin, Developer, Tester, Guest)
- **Project Management**: Create, manage, and filter multiple projects
- **Invite Team**: Add teammates via email with role assignment
- **Project Roles**: Owner, Contributor, Viewer roles per project
- **Issue Tracking**: Full CRUD for bugs, tasks, and features
- **Issue Fields**: Title, Description, Priority, Status, Tags, Assignee, Due Date
- **Status Options**: Open, In Progress, Blocked, Resolved, Closed
- **Activity Log**: See who did what and when (GitHub-style)
- **Comments & Mentions**: Markdown support with @mentions and notifications
- **Kanban Board**: Drag & drop interface with filters by user, tag, status, etc.
- **Responsive UI**: Mobile-first, PWA-ready with TailwindCSS theming
- **Password Reset**: Magic link/token-based reset flow
- **Dark Mode** (🌙): Tailwind-based theming
- **Email Notifications**: Issue updates & mentions via SendGrid/Nodemailer
- **Slack/Discord Webhooks**: Real-time alerts for issue changes
- **File Uploads**: Attach logs, screenshots, etc. via Cloudinary/Firebase
- **Export to PDF/CSV**: Generate project and issue summaries
- **Analytics Tab**: Charts for open issues, resolution times, active devs

### 🧠 Advanced Add-ons (I'll try for these but its not priority yet))

- **ElasticSearch**: Blazing fast issue search
- **Time Tracking**: Built-in timers for task durations
- **AI Summarizer**: TL;DR for long issue descriptions
- **ML-based Priority Predictor**: Suggests priority based on content

## ⚙️ Tech Stack

### Frontend
- React.js
- TailwindCSS
- Zustand / Redux
- Framer Motion

### Backend
- Node.js + Express
- MongoDB + Mongoose
- JWT Auth + Bcrypt
- Cloudinary / Firebase (for uploads)

### DevOps
- Vercel (Frontend)
- Render / Fly.io (Backend)
- MongoDB Atlas (Cloud DB)
- SendGrid / Nodemailer (Email)

-------------------------------------------------------------------------------------------------------------

