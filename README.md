📞 Outbound Voice Assistant

🚀 Overview

This project is an Outbound Voice Assistant that enables automated voice calls using Twilio. It features a Next.js frontend for user interaction and an Express.js backend to handle call logic and Twilio integration.

🎯 Features

Make outbound calls using a Twilio number.

Dynamic call scripting for personalized voice messages.

Twilio integration for handling call requests and responses.

Next.js frontend for a user-friendly interface.

Express.js backend for handling API requests.

🛠️ Technologies Used

Frontend: Next.js (React)

Backend: Express.js (Node.js)

Voice API: Twilio

Hosting: Vercel (Frontend), Render/Heroku (Backend)

🔧 Setup Instructions

1️⃣ Clone the Repository

git clone https://github.com/yourusername/outbound-voice-assistant.git
cd outbound-voice-assistant

2️⃣ Install Dependencies

Backend (Express.js)

cd backend
npm install

Frontend (Next.js)

cd frontend
npm install

3️⃣ Configure Twilio

Get your Twilio Account SID, Auth Token, and Twilio Phone Number from Twilio Console.

Create a .env file in the backend directory:

TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_PHONE_NUMBER=your_twilio_number

4️⃣ Run the Application

Start the Backend

cd backend
node server.js

Start the Frontend

cd frontend
npm run dev

📡 API Endpoints (Backend)

Method

Endpoint

Description

POST

/call

Initiates an outbound call

Example API request to make a call:

curl -X POST http://localhost:5000/call \
     -H "Content-Type: application/json" \
     -d '{"to": "+1234567890", "message": "Hello from Twilio!"}'

🎯 Next Steps

Add AI-powered speech recognition.

Improve UI/UX in Next.js frontend.

Deploy on production servers.

📜 License

This project is licensed under the MIT License.

Developed by Jahid 🚀

