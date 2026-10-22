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
| Frontend | JavaScript (React later) |
| Backend | Python, FastAPI |
| Database | PostgreSQL (SQLAlchemy, Alembic) |
| Matchmaking queue | Redis |
| Real-time | WebSockets (FastAPI) |
| Voice calls | WebRTC (browser) |
| Tests | pytest |
| Infrastructure | Docker, Docker Compose, GitHub Actions |

The backend is written in Python. The frontend stays in JavaScript, because voice calls (WebRTC) run in the browser.

## Roadmap

| Phase | Goal | What I learn | Status |
| --- | --- | --- | --- |
| 0 | JavaScript basics | Variables, functions, arrays, objects, async/await | In progress |
| 1 | Project setup | FastAPI basics, Docker Compose, first pytest test, GitHub Actions CI | Not started |
| 2 | Sign up and login | PostgreSQL, password hashing, sessions or JWT, `fetch` in the browser | Not started |
| 3 | Find a partner | Redis queue, WebSockets, avoiding race conditions | Not started |
| 4 | Voice calls | WebRTC, signaling through WebSockets | Not started |
| 5 | Launch | Cloud deployment, HTTPS, rate limiting, logs | Not started |

## Security checklist

- [ ] Hash passwords (argon2 or bcrypt)
- [ ] Rate limit login and sign-up
- [ ] Only logged-in users can open a WebSocket or join a call
- [ ] Validate all input (Pydantic) and use parameterized SQL
- [ ] No secrets in the code (use environment variables)
- [ ] Dependency and secret scanning in CI

## How I build this

I write the code myself to learn. I use AI only to explain concepts and review my code, never to write features for me.

## Project structure

```
french-fluency-app/
├── phase0/     # JavaScript practice exercises
└── README.md
```

The `client` (JavaScript) and `server` (Python, FastAPI) folders will be added in Phase 1.

## Author

Built by a student at 42 Paris.