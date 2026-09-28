📦 Order Tracking Screen

A modern and responsive Order Tracking UI built with React.js for an e-commerce application.

✨ Features
📍 Clear order delivery timeline
🚚 Processing → Shipped → Out for Delivery → Delivered
📅 Estimated delivery date & time
📦 Order and product summary
📞 Contact Support
⚠️ Report delivery issues
🔴 Delayed Order state
📦 Delivered but Not Received state
🔍 Tracking Not Available state
📱 Responsive design for 360–430px mobile screens
🎨 Clean and user-friendly UI
🧪 Mock/static data — no backend required
🛠️ Tech Stack
React.js
JavaScript
CSS
Lucide React Icons
Vite
🚀 Getting Started
1. Install dependencies
npm install
2. Install icons
npm install lucide-react
3. Run the project
npm run dev

Open the local URL shown in your terminal, usually:

http://localhost:5173
🧪 Order States

The UI supports four states:

State	Description
🟢 Normal	Order is progressing normally
🔴 Delayed	Delivery has been delayed
🟠 Not Received	Order shows delivered but customer didn't receive it
⚪ No Tracking	Tracking information is not available yet

Use the demo buttons to switch between states and preview the different experiences.

📁 Project Structure
src/
├── components/
│   ├── DelayedMessage.jsx
│   ├── DeliveryAddress.jsx
│   ├── DeliveryInfo.jsx
│   ├── Header.jsx
│   ├── NotReceivedMessage.jsx
│   ├── OrderItems.jsx
│   ├── OrderTracking.jsx
│   ├── Timeline.jsx
│   └── TrackingUnavailable.jsx
│
├── App.jsx
├── App.css
└── main.jsx

🌐 Deployment

The project can be deployed using Vercel, Netlify, or another hosting service.

Submission

Live URL:
https://your-project.vercel.app

GitHub:
https://github.com/Sangma83/VecoSoft_assesstment