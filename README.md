# French Fluency — Real-Time Language Practice Platform

A platform that helps people learning French find conversation partners at a similar proficiency level and practice speaking through real-time voice conversations.

**Project status:** In development 🚧

## Overview

Learning a language requires more than studying grammar and vocabulary. Regular conversations help learners build confidence, improve pronunciation, and become more fluent.

French Fluency aims to make speaking practice easier by connecting learners based on their French proficiency level and who is online right now.

The platform is being designed around real-time matchmaking and peer-to-peer voice communication.

## The Problem

Many people learning French know vocabulary and grammar from apps, but rarely get to speak. Tutors are expensive, native speakers often switch to English, and learners feel nervous about being judged. French Fluency gives them a free, low-pressure way to practice with other learners at their own level.

## Current Status

- ✅ Express server with a REST API
- ✅ React frontend (Vite) connected to the backend
- 🚧 User registration (in progress)

## Key Features

The following features are planned:

- **User authentication:** Create an account and manage a profile.
- **Proficiency levels:** Select a French level to find suitable conversation partners.
- **Smart matchmaking:** Match online learners based on proficiency.
- **Real-time voice conversations:** Practice speaking with another learner.
- **Conversation topics:** Use suggested topics to make conversations easier.
- **Reconnection handling:** Handle temporary network interruptions.
- **User safety:** Report inappropriate behavior and manage unwanted interactions.

## Tech Stack

| Technology | Purpose | Status |
|---|---|---|
| React | Frontend | In use |
| JavaScript | Application development | In use |
| Node.js | Backend runtime | In use |
| Express.js | REST API | In use |
| PostgreSQL | Persistent data storage | Planned |
| Redis | Matchmaking and temporary state | Planned |
| Socket.IO | Real-time communication and signaling | Planned |
| WebRTC | Peer-to-peer voice communication | Planned |
| Docker | Containerization | Planned |
| TypeScript | Type safety | Planned |
| GitHub Actions | CI/CD | Planned |

## Architecture

The planned architecture separates the application into a frontend, a backend, data stores, and a peer-to-peer voice connection.

```text
  Browser A (React)                      Browser B (React)
        │                                      │
        │  HTTP (REST) + Socket.IO (signaling) │
        ▼                                      ▼
  ┌───────────────────────────────────────────────┐
  │           Node.js + Express server            │
  │      REST API · Socket.IO · Matchmaking       │
  └──────────┬─────────────────────┬──────────────┘
             ▼                     ▼
        PostgreSQL               Redis
   (users, calls, reports)  (queue, online users)

  Browser A ◄════ WebRTC voice (peer-to-peer) ════► Browser B
```

The server handles accounts, matchmaking, and call setup (signaling). Once two learners are matched, their audio travels directly between their browsers with WebRTC, not through the server.

## Engineering Challenges

This project focuses on practical software engineering challenges:

### 1. Real-Time Matchmaking
- Match users with similar French proficiency levels.
- Manage users waiting for a conversation partner.
- Handle users leaving the matchmaking queue.
- Prevent users from being matched multiple times.

### 2. Real-Time Communication
- Implement WebRTC signaling.
- Handle connection failures and reconnections.
- Manage call lifecycle events.
- Handle users disconnecting unexpectedly.

### 3. Backend and Database Design
- Design a maintainable relational database.
- Build APIs for user profiles and matchmaking.
- Validate requests and handle errors.
- Manage concurrent matchmaking requests.

### 4. Testing and Reliability
- Write unit tests for application logic.
- Add integration tests for API endpoints.
- Test matchmaking edge cases.
- Test unexpected disconnections and reconnections.

### 5. Security
- Implement authentication and authorization.
- Validate user input.
- Add API rate limiting.
- Provide reporting and blocking functionality.

### 6. Monitoring and Observability
- Add structured application logging.
- Track API response times and errors.
- Monitor matchmaking performance.
- Investigate real-time connection failures.

## Development Roadmap

- [x] Initial project setup
- [x] Frontend connected to backend
- [ ] User registration and authentication
- [ ] User proficiency selection
- [ ] Matchmaking queue with Redis
- [ ] Real-time signaling with Socket.IO
- [ ] Peer-to-peer voice calls with WebRTC
- [ ] Disconnect and reconnection handling
- [ ] Conversation topics
- [ ] Reporting and blocking
- [ ] Unit and integration tests
- [ ] End-to-end testing
- [ ] Docker deployment
- [ ] CI/CD pipeline
- [ ] Monitoring and observability
- [ ] Public deployment and user feedback

## Project Structure

```text
french-fluency-app/
├── client/     # React frontend (Vite)
├── server/     # Node.js + Express backend
├── phase0/     # JavaScript practice exercises
└── README.md
```

## Running Locally

You need [Node.js](https://nodejs.org) installed. Use two terminals.

**Terminal 1: start the server**

```bash
cd server
npm install
node index.js
```

The server runs on http://localhost:3000. Test it at http://localhost:3000/api/hello

**Terminal 2: start the website**

```bash
cd client
npm install
npm run dev
```

Open http://localhost:5173. The page shows a message loaded from the server.

## Project Goals

The goal is to build a reliable real-time application while learning and applying:

- Backend system design
- Real-time networking
- Distributed state management
- Database design
- Concurrency and race-condition handling
- Automated testing
- Application security
- Production monitoring

## Future Improvements

- Group voice conversations
- Advanced matchmaking preferences
- Conversation history and learning statistics
- AI-powered conversation suggestions
- More language support

---

**Built as a personal software engineering project focused on real-time systems, backend development, and language learning.**
