# Ballot Trust 360 - All Nigerian Edition
### Hackaholics 7.0 - Secure Accreditation, Verification and Value Platform

## 1. Clear Description of Project

**Problem:** Every Nigerian's pain about election is trust. Accreditation fails, result sheets change between polling unit and collation center, vote buying is driven by poverty, and many youths feel their vote will not count. Existing solutions are either just voting apps that compete with INEC or are not built for Nigerian realities like low data and multiple languages.

**Solution:** Ballot Trust 360 is a complete civic trust suite built with all Nigerian fictional candidates. No foreigner, no white people, no real politicians. It combines four modules in one mature platform:

**Module 1 - Demo Election with Automatic Accreditation:** For President, Governor, Senator, House of Representatives, State Assembly. Five candidates per office from five fictional neutral parties. When anyone clicks to vote, the system automatically accredits the voter like BVAS, then counts the vote live. Prevents double voting per office. Shows live transparent tally.

**Module 2 - Eyes On The Ballot - Result Verification:** Users enter or upload EC8A result sheet from their polling unit. Backend simulates Gemini 1.5 Flash OCR to read the sheet and Hugging Face model to detect fake news. Verified sheets appear in live feed. Ready to connect to real Gemini API.

**Module 3 - Vote Value Calculator - Anti Vote Buying:** User enters amount offered for vote, for example 5000 Naira. Calculator shows cost of selling vote versus saving that amount in ALAT by Wema at 15.5 percent for 4 years. It teaches financial literacy and aligns with Wema Bank mission.

**Module 4 - Amandla Chatbot:** Floating assistant that speaks Pidgin, English, Yoruba, Igbo, Hausa. Answers where is my polling unit, what is BVAS, is this news fake, what is value of my vote. Powered by Gemini with Pidgin fine tune, endpoint ready.

**Why All Nigerian and Fictional:** All 25 candidate photos are AI generated fictional Nigerians, names are Emeka Okafor, Aisha Bello, Tolu Adebayo, Ibrahim Musa, Ngozi Eze. Parties are fictional: Future Unity Alliance FUA, Civic Progress Collective CPC, Horizon Green Movement HGM, Innovation and Equity Party IEP, Resolute Peoples Front RPF. This avoids tribal bias, avoids disqualification, and keeps focus on system not personalities.

## 2. Link to Live Deployed Frontend Application

Frontend deployed to Vercel as recommended in Technical Guide:

**Live Frontend URL:** https://ballot-trust-360.vercel.app
*(Replace with your actual Vercel deployment link after you deploy the frontend folder)*

Alternative if you deploy to Netlify:
**Live Frontend URL Netlify:** https://ballot-trust-360.netlify.app

How to deploy: Connect your GitHub Classroom repo to Vercel, select frontend folder as root, deploy. One click from GitHub as per guide.

## 3. Link to Live Backend API Endpoint

Backend deployed to Render as recommended in Technical Guide:

**Live Backend API URL:** https://ballot-trust-360-backend.onrender.com
**Health Check:** https://ballot-trust-360-backend.onrender.com/api/health
**Candidates API:** https://ballot-trust-360-backend.onrender.com/api/candidates?office=president
**Results API:** https://ballot-trust-360-backend.onrender.com/api/results
**Verify API:** POST https://ballot-trust-360-backend.onrender.com/api/verify-result
**Chat API:** POST https://ballot-trust-360-backend.onrender.com/api/chat

*(Replace with your actual Render deployment link after you deploy the backend folder)*

Database: JSON file for hackathon demo, architecture ready for migration to Supabase PostgreSQL with free tier or Neon as recommended. Tables: candidates, votes, accreditations, verifications, stats.

## 4. Recorded Demo Using Loom

**Loom Demo Video:** https://www.loom.com/share/5b01b76fb7d14fbb82bba3234f3332ec
*(Record using script provided and replace link)*

Video covers:
- 0 to 30 sec: Problem and all Nigerian fictional approach
- 30 to 90 sec: Demo Election auto accreditation and live count
- 90 to 120 sec: Eyes On Ballot verification with AI OCR
- 120 to 150 sec: Vote Value Calculator with ALAT savings
- 150 to 180 sec: Amandla Pidgin chatbot and tech stack

## Tech Stack - Following Technical Guide to the Letter

**Version Control:** GitHub Classroom - All code committed to team repository. This is the only mandatory tool per guide.

**Frontend Development and Deployment:**
- Framework: React 18 with Vite as recommended modern framework
- Deployment: Vercel with one click deploy from GitHub repo as recommended. Alternative Netlify also recommended.

**Backend Development and Deployment:**
- Language: Node.js Express as recommended major language
- Deployment: Render modern platform with free tier for web services as recommended. Alternative Vercel serverless functions also possible.
- Ready for ASP.NET and freeasphosting.net if team uses C# as mentioned in guide.

**Database:**
- Current: JSON file persistence for fast hackathon demo
- Production Ready: Supabase open source Firebase alternative with free PostgreSQL database, auth and storage as recommended, or Neon serverless PostgreSQL as recommended, or MongoDB Atlas NoSQL as recommended, or Azure SQL for C# teams as recommended.

**Artificial Intelligence and Machine Learning:**
- Using Pre-built Models as recommended for most teams: Google AI Gemini API powerful and easy with generous free tier for OCR and chat, Hugging Face Inference API for sentiment and fake news detection with thousands of pre trained models
- Running Own Model: Google Colab best choice for hackathon with free GPU access if custom training needed
- Note: OpenAI ChatGPT API only has limited free trial for new accounts as warned in guide, we use Gemini instead.

## How to Run Locally for Testing

Backend:
```
cd ballot-trust-360/backend
npm install
npm start
```
Runs on http://localhost:5000

Frontend:
```
cd ballot-trust-360/frontend
npm install
npm run dev
```
Runs on http://localhost:3000, proxies /api to backend

Build for production:
```
cd frontend
npm run build
```
Backend will serve frontend dist automatically if deployed together.

## API Endpoints

GET /api/health - check backend
GET /api/parties - list 5 fictional parties
GET /api/offices - list 5 offices
GET /api/candidates?office=president - list candidates for office
GET /api/results - live aggregated results and recent verifications
POST /api/accredit - body voterToken, office - auto accreditation
POST /api/vote - body candidateId, office, voterToken - vote counted and accredited
POST /api/verify-result - body pollingUnit, results, imageName - verify sheet with AI
POST /api/chat - body message, language - Amandla chatbot reply
POST /api/reset - reset database for testing

## Database Schema

candidates: id, name, office, officeLabel, partyCode, partyName, partyColor, slogan, manifesto, photo, votes
votes: id, candidateId, office, voterToken, timestamp
accreditations: id, voterToken, office, timestamp
verifications: id, pollingUnit, results, imageName, status, confidence, timestamp, aiModel
stats: totalAccredited, totalVotesCast, totalVerified

## Why This Stands Out

- All Nigerian candidates, no foreigner, no white people, fictional to avoid bias and disqualification
- Four in one platform, not just voting: vote plus verify plus value plus chatbot
- Automatic accreditation on every vote click like BVAS, live counting, prevents double voting
- Financial angle for Wema Bank: Vote Value Calculator links vote buying to ALAT savings
- AI wow factor: Gemini OCR for result sheets, Pidgin chatbot, Hugging Face ready
- Mature premium UI: deep navy #102542, warm paper #F8F6F1, muted gold #C5A572, not typical green white green
- Follows Builder's Choice philosophy: functional prototype with live URL, freedom to choose tools

## Submission Checklist as per Guide

- [ ] GitHub repository contains all code committed via GitHub Classroom
- [ ] README.md contains clear description, live frontend link, live backend link, Loom link
- [ ] Frontend accessible via live public URL on Vercel
- [ ] Backend API accessible via live public URL on Render
- [ ] Loom video recorded explaining how solution works
- [ ] No em dashes, spell checked, real and outstanding

## Team

Built for Hackaholics 7.0 by Team Ballot Trust 360
All Nigerian Edition - 2026

## License

MIT - For hackathon demonstration purposes. All candidate photos are AI generated fictional persons, not real individuals.
