# 🎓 Apna Role — Career Platform for Students & Freshers

> **Tagline:** *Find Your Role. Build Your Career.*  
> **Secondary Tagline:** *Your career, your role.*

Apna Role is a complete, full-stack career and placement platform designed specifically for college students, freshers, and early-career job seekers. It brings together job discovery, peer interview experiences with admin moderation, a categorized question bank, interactive career roadmaps, a comprehensive application tracking workflow, user/admin dashboards, and email notifications.

---

## 🌟 Key Features

1. **Job Discovery (`/jobs`)**
   - Live MongoDB search across Job Title, Company, Skills, and Location.
   - Multi-faceted filtering: Job Type (*Internship, Full Time, Part Time, Contract*), Work Mode (*Remote, Hybrid, On Site*), Experience (*Fresher, 0–1 years, 1–3 years, 3+ years*), Location, and Skills.
   - Job details view with external application links and bookmarking (*Save Job*).

2. **Peer Interview Experiences (`/interview-experiences`)**
   - Verified student interview walkthroughs from top recruiters (*TCS, Infosys, Accenture, Amazon, Wipro, etc.*).
   - Filter by Company, Role, Difficulty (*Easy, Medium, Hard*), and Result (*Selected, Rejected, Waitlisted*).
   - Interactive detail pages showcasing interview rounds, questions asked, prep tips, and advice.
   - Candidates can like, report, and submit new experiences.

3. **Interview Experience Submission & Moderation**
   - Students can submit their interview experience via `/share-experience`.
   - Experiences are stored with `status: 'pending'` and trigger an email notification to `apnarole10@gmail.com`.
   - Only admin-approved experiences appear publicly on `/interview-experiences`.

4. **Interview Question Bank (`/interview-questions`)**
   - 10 categories: *JavaScript, Python, Java, SQL, React, HTML/CSS, Data Structures, Cyber Security, HR, General*.
   - Filter by category and difficulty (*Beginner, Intermediate, Advanced*).
   - Interactive accordion cards revealing model answers, in-depth explanations, code snippets, and interview tips.

5. **Visual Career Roadmaps (`/career-roadmaps`)**
   - Step-by-step milestones for 6 core tech domains:
     - Software Developer
     - Web Developer
     - Data Analyst
     - Cyber Security Analyst
     - Cloud Engineer
     - UI/UX Designer
   - Includes recommended skills, learning order, target job profiles, and standout portfolio project ideas.

6. **Application Tracker (`/my-applications`)**
   - Full CRUD management for student job applications.
   - Status progression: `Saved` ➔ `Applied` ➔ `Shortlisted` ➔ `Interview` ➔ `Selected` / `Rejected`.
   - Clean status badges and interview scheduling integration.

7. **User & Admin Dashboards**
   - **Student Dashboard (`/dashboard`)**: Summary cards (*Applications, Shortlisted, Interviews, Selected*), recent application activity, upcoming scheduled interviews, and saved jobs.
   - **Admin Control Center (`/admin`)**: Restricted to `role: 'admin'`. Live platform statistics, job posting management (*Add, Edit, Publish/Unpublish, Delete*), student experience moderation (*Approve, Reject, Delete*), interview question bank manager, contact inquiries, and student feedback reviews.

8. **Contact & Notification System (`/contact`)**
   - Official contact details:
     - **Email:** `apnarole10@gmail.com`
     - **Phone:** `9455531636`
     - **Instagram:** [https://www.instagram.com/ashuuu_techyy/](https://www.instagram.com/ashuuu_techyy/) (*Follow apna role on Instagram*)
   - Contact and feedback forms save to MongoDB and dispatch HTML emails to `apnarole10@gmail.com`.
   - **Resilient Fallback:** If SMTP credentials are not configured, submissions are safely stored in MongoDB and formatted logs appear in the server console without crashing.

---

## 🛠️ Technology Stack

- **Frontend:** React 18, Vite, React Router v6, Tailwind CSS, Lucide React Icons, Axios
- **Backend:** Node.js, Express.js (ES Modules), Helmet, CORS
- **Database:** MongoDB & Mongoose (supports MongoDB Atlas, local MongoDB, or zero-config `mongodb-memory-server`)
- **Authentication:** JWT (JSON Web Tokens) with `bcryptjs` password hashing
- **Email:** Nodemailer with branded HTML templates and resilient fallback logging

---

## 📁 Project Structure

```
college project/
├── client/                     # Frontend Vite + React + Tailwind application
│   ├── public/
│   │   ├── logo.svg            # Custom Apna Role logo
│   │   ├── favicon.svg         # Browser favicon
│   │   └── index.html
│   ├── src/
│   │   ├── components/         # Navbar, Footer, StatusBadge, ProtectedRoute, UIHelpers
│   │   ├── context/            # AuthContext (JWT) & ToastContext (notifications)
│   │   ├── pages/              # Home, Jobs, Experiences, Questions, Roadmaps, Dashboard,
│   │   │                       # MyApplications, Profile, AdminDashboard, Contact, About, Legal
│   │   ├── services/           # Axios instance with JWT interceptors
│   │   ├── App.jsx             # React Router v6 routes
│   │   ├── main.jsx
│   │   └── index.css           # Tailwind CSS directives
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
├── server/                     # Backend Node.js + Express REST API
│   ├── config/
│   │   └── db.js               # Dual-mode database connector (URI or in-memory)
│   ├── models/                 # User, Job, InterviewExperience, InterviewQuestion,
│   │                           # Application, Interview, SavedJob, ContactMessage, Feedback
│   ├── controllers/            # REST API business logic
│   ├── routes/                 # Express route handlers
│   ├── middleware/             # JWT auth guard, admin guard, error handler, rate limiter
│   ├── services/               # emailService.js (Nodemailer), seedService.js (Demo data)
│   ├── index.js                # Server entry point
│   ├── package.json
│   └── .env                    # Environment variables
├── start-all.js                # Script to boot both server & client together
├── .env.example                # Sample environment template
└── README.md                   # Documentation
```

---

## 🚀 Getting Started & Installation

### Prerequisites
- Node.js (v18+ recommended, v20+ supported)
- npm (v9+)

### 1. Installation
In the project root directory:

```bash
# Install root, server, and client dependencies
cd server
npm install

cd ../client
npm install
```

---

## ⚙️ Environment Variables Configuration

Create a `.env` file inside the `server/` folder (or copy from `.env.example`):

```ini
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:5173

# Database Configuration:
# Leave empty to automatically use embedded in-memory MongoDB with pre-seeded demo data,
# or specify your MongoDB connection string (e.g. Atlas or local daemon):
# MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/apnarole
MONGODB_URI=

# JWT Secret
JWT_SECRET=apna_role_super_secret_jwt_key_2026_career_platform

# Email Notifications (Nodemailer / SMTP)
# Notifications are dispatched to ADMIN_EMAIL for contact forms and student experiences.
# If credentials are blank, submissions are saved to MongoDB and logged to the console without crashing.
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=apnarole10@gmail.com
EMAIL_PASSWORD=your_gmail_app_password_here
ADMIN_EMAIL=apnarole10@gmail.com
```

> **Note on Gmail App Passwords:** To send live emails with Gmail, generate a 16-character **App Password** from your Google Account security settings (2-Step Verification ➔ App Passwords) and place it in `EMAIL_PASSWORD`.

---

## 🏃 Running the Application

### Option A: Run Both Backend and Frontend Together
From the root directory:
```bash
node start-all.js
```

### Option B: Run Individually

**Terminal 1 — Backend:**
```bash
cd server
npm start
```
*Backend runs on `http://localhost:5000`*

**Terminal 2 — Frontend:**
```bash
cd client
npm run dev
```
*Frontend runs on `http://localhost:5173`*

---

## 🔑 Pre-Seeded Demo Accounts

The database automatically seeds realistic demo data on startup, including 10+ jobs (*TCS, Infosys, Accenture, Amazon, Microsoft, Wipro, etc.*), 6+ approved student interview experiences, 25+ categorized interview questions, and demo student applications.

You can log in immediately using the one-click buttons on the `/login` page or use these credentials:

| Account Type | Email | Password | Access Level |
| :--- | :--- | :--- | :--- |
| **Administrator** | `admin@apnarole.com` | `Admin@12345` | Full Admin Portal (`/admin`), Moderation, Job Postings, Q&A |
| **Student Candidate** | `student@apnarole.com` | `Student@12345` | Dashboard (`/dashboard`), Application Tracker, Bookmarks |

---

## 🧪 Testing Verification Checklist

1. **User Authentication:**
   - Register a new student account at `/register`.
   - Log in at `/login` (or test with the one-click demo buttons).
   - Verify JWT persists and redirects to `/dashboard`.
2. **Job Discovery & Bookmarking:**
   - Go to `/jobs`. Search for "Software" or "Python".
   - Filter by "Internship" or "Remote".
   - Click the Bookmark icon to save a job. Check your saved jobs on `/dashboard`.
3. **Application Tracker:**
   - Navigate to `/my-applications`.
   - Click **Add Application**, enter details, and change status from `Applied` to `Interview` or `Selected`.
   - Verify the stats update in real-time on `/dashboard`.
4. **Interview Experience Submission & Admin Moderation:**
   - Visit `/share-experience` and submit an interview walkthrough.
   - Notice the pending notice.
   - Log in as `admin@apnarole.com` and go to `/admin` ➔ **Interview Moderation**.
   - Click **Approve**. Now check `/interview-experiences` to see your experience live!
5. **Interview Questions:**
   - Go to `/interview-questions`. Click through category tabs (*JavaScript, SQL, DSA, etc.*) and expand any question to view code demonstrations and interview tips.
6. **Contact & Email System:**
   - Visit `/contact` and submit a contact message or 5-star feedback.
   - Check the backend console to view the logged notification details and confirm MongoDB storage.

---

## 📬 Official Contact & Socials

- **Brand:** Apna Role
- **Email:** [apnarole10@gmail.com](mailto:apnarole10@gmail.com)
- **Phone:** `9455531636`
- **Instagram:** [https://www.instagram.com/ashuuu_techyy/](https://www.instagram.com/ashuuu_techyy/) (*Follow apna role on Instagram*)

---

© 2026 Apna Role. All rights reserved.
