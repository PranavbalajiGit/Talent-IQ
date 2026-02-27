# Talent IQ 🧠

A collaborative coding interview platform where developers can practice coding problems together in real-time with video calls, code execution, and live chat features.

![License](https://img.shields.io/badge/License-ISC-blue)
![Node](https://img.shields.io/badge/Node.js-ES%20Modules-green)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Project](#running-the-project)
- [API Documentation](#api-documentation)
- [Project Components](#project-components)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 Overview

**Talent IQ** is a full-stack web application designed to facilitate collaborative coding interviews and practice sessions. The platform enables users to:

- Solve DSA (Data Structures & Algorithms) problems collaboratively
- Conduct video calls with other participants or Host
- Execute code in real-time with support for multiple programming languages
- Track coding sessions and problem history
- Communicate via chat during sessions

Perfect for interview preparation, mock interviews, and collaborative problem-solving.

---

## ✨ Features

### Core Features

- 🔐 **Authentication**: Secure authentication using Clerk
- 📹 **Video Calling**: Real-time video calls powered by Stream.io
- 💬 **Live Chat**: Messaging system for session participants
- 🖥️ **Code Editor**: Monaco Editor with multiple language support
- ⚡ **Code Execution**: Execute code using Piston API
- 📊 **Problem Sets**: Curated collection of DSA problems with multiple difficulty levels
- 📈 **Session Management**: Create, join, and track coding sessions
- 🎮 **Interactive Dashboard**: Real-time updates and session statistics

### User Features

- User authentication and profile management
- Browse coding problems by difficulty and category
- Create or join collaborative sessions
- Save session history
- View recent activity and statistics

---

## 🛠️ Tech Stack

### Frontend

| Technology | Purpose |
|------------|---------|
| **React 19** | UI library and component framework |
| **Vite 7** | Next-generation build tool and dev server |
| **React Router 7** | Client-side routing |
| **TailwindCSS 4** | Utility-first CSS framework |
| **DaisyUI 5** | Component library built on Tailwind |
| **Monaco Editor** | Code editor component |
| **Stream Chat SDK** | Real-time messaging |
| **Stream Video SDK** | Video calling functionality |
| **Axios** | HTTP client for API requests |
| **React Query** | Server state management |
| **React Resizable Panels** | Resizable UI components |
| **Clerk React** | Authentication |

### Backend

| Technology | Purpose |
|------------|---------|
| **Express 5** | Web framework |
| **Node.js** | Runtime environment |
| **MongoDB** | NoSQL database |
| **Mongoose** | MongoDB ODM |
| **Clerk Express** | Authentication middleware |
| **Stream SDK** | Chat and video services |
| **Inngest** | Background job processing |
| **Nodemon** | Development server with auto-reload |
| **CORS** | Cross-origin resource sharing |

### External APIs

- **Piston API**: Code execution across multiple languages
- **Stream.io**: Chat and video calling infrastructure
- **Clerk**: User authentication and management

---

## 📁 Project Structure

```
talent-iq/
├── frontend/                    # React Vite application
│   ├── public/                 # Static assets
│   │   ├── compiler.png        # Favicon
│   │   ├── hero.png            # Hero image
│   │   ├── java.png            # Language icon
│   │   ├── javascript.png       # Language icon
│   │   └── python.png           # Language icon
│   ├── src/
│   │   ├── api/                # API integration
│   │   │   └── sessions.js     # Session API calls
│   │   ├── components/         # Reusable React components
│   │   │   ├── ActiveSessions.jsx
│   │   │   ├── CodeEditorPanel.jsx
│   │   │   ├── CreateSessionModal.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── OutputPanel.jsx
│   │   │   ├── ProblemDescription.jsx
│   │   │   ├── RecentSessions.jsx
│   │   │   ├── StatsCards.jsx
│   │   │   ├── VideoCallUI.jsx
│   │   │   └── WelcomeSection.jsx
│   │   ├── data/               # Static data
│   │   │   └── problems.js     # Coding problems database
│   │   ├── hooks/              # Custom React hooks
│   │   │   ├── useSessions.js  # Session management hook
│   │   │   └── useStreamClient.js
│   │   ├── lib/                # Utilities and configurations
│   │   │   ├── axios.js        # Axios configuration
│   │   │   ├── piston.js       # Piston API integration
│   │   │   ├── stream.js       # Stream.io initialization
│   │   │   └── utils.js        # Helper functions
│   │   ├── pages/              # Page components
│   │   │   ├── DashboardPage.jsx
│   │   │   ├── HomePage.jsx
│   │   │   ├── ProblemPage.jsx
│   │   │   ├── ProblemsPage.jsx
│   │   │   └── SessionPage.jsx
│   │   ├── App.jsx             # Root component
│   │   ├── main.jsx            # Entry point
│   │   └── index.css           # Global styles
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
│
├── backend/                    # Express.js server
│   ├── src/
│   │   ├── controllers/        # Request handlers
│   │   │   ├── chatController.js
│   │   │   └── sessionController.js
│   │   ├── models/             # MongoDB schemas
│   │   │   ├── Session.js
│   │   │   └── User.js
│   │   ├── routes/             # API routes
│   │   │   ├── chatRoutes.js
│   │   │   └── sessionRoutes.js
│   │   ├── middleware/         # Express middleware
│   │   │   └── protectRoute.js
│   │   ├── lib/                # Utilities and configurations
│   │   │   ├── db.js           # MongoDB connection
│   │   │   ├── env.js          # Environment variables
│   │   │   ├── inngest.js      # Background jobs
│   │   │   └── stream.js       # Stream.io setup
│   │   └── server.js           # Entry point
│   └── package.json
│
├── package.json                # Root package.json
└── README.md                   # This file

```

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** or **yarn** package manager
- **MongoDB** (local or Atlas cloud instance)
- **Git** (for version control)

### Account Requirements

- **Clerk**: Account for authentication ([https://clerk.com](https://clerk.com))
- **Stream.io**: Account for chat and video ([https://getstream.io](https://getstream.io))
- **Environment Variables**: API keys from the above services

---

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/PranavbalajiGit/Talent-IQ.git
cd Talent-IQ
```

### 2. Install Dependencies

For the entire project (installs both frontend and backend):

```bash
npm run build
```

Or install separately:

```bash
# Backend dependencies
cd backend
npm install
cd ..

# Frontend dependencies
cd frontend
npm install
cd ..
```

---

## 🔧 Environment Variables

### Backend Environment Variables

Create a `.env` file in the `backend/` directory:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/talent-iq
# OR for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/talent-iq

# Clerk Authentication
CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

# Stream.io Configuration
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret

# Frontend URL (for CORS)
CLIENT_URL=http://localhost:5173

# Inngest Configuration
INNGEST_EVENT_KEY=your_inngest_event_key
```

### Frontend Environment Variables

Create a `.env.local` file in the `frontend/` directory:

```env
# Clerk Configuration
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

# Backend API URL
VITE_API_URL=http://localhost:5000

# Stream.io Configuration
VITE_STREAM_API_KEY=your_stream_api_key
```

---

## 💻 Running the Project

### Development Mode

#### Terminal 1: Backend Server

```bash
cd backend
npm run dev
```

The backend will run on `http://localhost:5000`

#### Terminal 2: Frontend Development Server

```bash
cd frontend
npm run dev
```

The frontend will run on `http://localhost:5173` (Vite default)

### Production Build

```bash
# Build both frontend and backend
npm run build

# Start production server
npm start
```

---

## 📚 API Documentation

### Chat Routes (`/api/chat`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/messages/:sessionId` | Get chat messages for a session |
| `POST` | `/messages` | Send a new message |

### Session Routes (`/api/sessions`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/` | Get all sessions |
| `GET` | `/:id` | Get specific session details |
| `POST` | `/` | Create a new session |
| `PUT` | `/:id` | Update session status |
| `DELETE` | `/:id` | Delete a session |
| `POST` | `/:id/join` | Join an existing session |

---

## 🎨 Project Components

### Frontend Components

#### **Navbar**
Displays user authentication info and navigation links

#### **CodeEditorPanel**
Monaco editor for writing code with language selection

#### **OutputPanel**
Displays code execution results and errors

#### **VideoCallUI**
Stream.io powered video calling interface with multiple participants

#### **CreateSessionModal**
Modal for creating new collaborative coding sessions

#### **ProblemDescription**
Displays problem statement, examples, and constraints

#### **ActiveSessions**
Shows currently active coding sessions

#### **RecentSessions**
Shows user's recent session history

#### **StatsCards**
Displays user statistics and progress

### Backend Controllers

#### **sessionController**
Handles session creation, retrieval, updates, and deletion

#### **chatController**
Manages chat messages and message retrieval

---

## 📖 Database Models

### User Schema

```javascript
{
  _id: ObjectId,
  clerkId: String (unique),
  username: String,
  email: String,
  profileImage: String,
  createdAt: Date,
  updatedAt: Date
}
```

### Session Schema

```javascript
{
  _id: ObjectId,
  problem: String,
  difficulty: String (easy | medium | hard),
  host: ObjectId (User),
  participant: ObjectId (User, optional),
  status: String (active | completed),
  callId: String,
  code: String,
  language: String,
  startTime: Date,
  endTime: Date,
  createdAt: Date,
  updatedAt: Date
}
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
   ```bash
   git clone https://github.com/PranavbalajiGit/Talent-IQ.git
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes** and commit them
   ```bash
   git add .
   git commit -m "Add your feature description"
   ```

4. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create a Pull Request** to the main repository

### Coding Standards

- Use ES6 modules for JavaScript
- Follow ESLint configuration for frontend code quality
- Write descriptive commit messages
- Add comments for complex logic
- Test your changes before submitting PR

---

## 📝 License

This project is licensed under the **ISC License** - see the LICENSE file for details.

---

## 🔗 Links

- **Repository**: [GitHub - Talent-IQ](https://github.com/PranavbalajiGit/Talent-IQ)
- **Clerk Docs**: [https://clerk.com/docs](https://clerk.com/docs)
- **Stream.io Docs**: [https://getstream.io/docs](https://getstream.io/docs)
- **MongoDB Docs**: [https://docs.mongodb.com](https://docs.mongodb.com)
- **React Docs**: [https://react.dev](https://react.dev)
- **Express Docs**: [https://expressjs.com](https://expressjs.com)

---

## 🐛 Troubleshooting

### Common Issues

#### MongoDB Connection Error
- Ensure MongoDB is running locally or your Atlas connection string is correct
- Check `MONGODB_URI` in `.env` file

#### Clerk Authentication Not Working
- Verify `CLERK_SECRET_KEY` and `CLERK_PUBLISHABLE_KEY` are correct
- Ensure your Clerk application is set up properly in the Clerk dashboard

#### Video Calls Not Working
- Check Stream.io API keys are correct
- Ensure `VITE_STREAM_API_KEY` matches backend `STREAM_API_KEY`
- Verify Stream.io account has proper permissions

#### CORS Errors
- Check `CLIENT_URL` in backend `.env` matches frontend URL
- Ensure frontend is running on the correct port

#### Port Already in Use
```bash
# Kill process using port 5000 (Windows)
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Kill process using port 5173 (Windows)
netstat -ano | findstr :5173
taskkill /PID <PID> /F
```

---

## 📞 Support

For issues, questions, or suggestions:

1. Check existing [GitHub Issues](https://github.com/PranavbalajiGit/Talent-IQ/issues)
2. Create a new issue with detailed description
3. Include steps to reproduce the problem
4. Attach relevant logs or screenshots

---

## 🎓 Learning Resources

- **DSA Problems**: [LeetCode](https://leetcode.com), [HackerRank](https://www.hackerrank.com)
- **Web Development**: [MDN Web Docs](https://developer.mozilla.org)
- **System Design**: [System Design Primer](https://github.com/donnemartin/system-design-primer)

---

**Happy Coding! 🚀**

---

*Last Updated: February 28, 2026*
