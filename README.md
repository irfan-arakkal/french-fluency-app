# French Fluency App

A web app where French learners practice speaking with other learners at the same level, through live voice calls.

## The problem

Many people learning French know vocabulary and grammar from apps, but they rarely practice speaking. Tutors are expensive, native speakers often switch to English, and learners feel nervous being judged. French Fluency App gives them a free, low-pressure way to practice with people at their own level.

## How it works

1. Sign up and choose your French level.
2. Press **Find a partner**.
3. Get matched with an online learner at the same level.
4. Talk by voice, with a conversation topic shown on screen.

## MVP features

- [ ] Sign up and login
- [ ] French level selection
- [ ] "Find a partner" matchmaking by level
- [ ] One-to-one voice calls
- [ ] Random conversation topics
- [ ] Report button

## Planned updates

- AI chatbot: type in English, get natural French with pronunciation
- Text chat and voice messages
- Daily free minutes and a call timer
- Friends, ratings, and streaks

## Tech stack

| Part | Technology |
| --- | --- |
| Frontend | React |
| Backend | Node.js, Express |
| Database | PostgreSQL |
| Matchmaking queue | Redis |
| Real-time | WebSockets (Socket.IO) |
| Voice calls | WebRTC |
| Infrastructure | Docker |

## Roadmap

| Phase | Goal | Status |
| --- | --- | --- |
| 0 | JavaScript basics | In progress |
| 1 | Project setup (client and server) | Not started |
| 2 | Sign up and login | Not started |
| 3 | Find a partner | Not started |
| 4 | Voice calls | Not started |
| 5 | Launch | Not started |

## Project structure

```
french-fluency-app/
├── phase0/     # JavaScript practice exercises
└── README.md
```

The `client` (React) and `server` (Node.js) folders will be added in Phase 1.

## Author

Built by a student at 42 Paris.