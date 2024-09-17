# **MERN Stack Chatbot for Port Resilience Optimization**

## **Project Description**

This project is a chatbot application built using the MERN stack (MongoDB, Express, React, Node.js) with Material UI for a sleek and responsive design. The chatbot is designed to provide real-time predictive insights and recommendations to port operators, logistics managers, and other stakeholders, aiming to optimize port operations and resilience against global disruptions.

The primary goal of this project was to explore the MERN stack and integrate chatbot capabilities, simulating an AI-driven assistant similar to ChatGPT.

### **Motivation**

- **Learning the MERN Stack**: The project serves as a learning journey into the MERN stack, providing practical experience in full-stack development.
- **Exploring Chatbot Capabilities**: To understand how chatbots can be integrated into real-world applications, especially in logistics and operations.

### **Technologies Used**

- **Frontend**: React, Material UI
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Validation**: express-validator for input validation
- **Environment Management**: dotenv for handling environment variables

## **Table of Contents**

1. [Project's Title](#projects-title)
2. [Project Description](#project-description)
3. [How to Install and Run the Project](#how-to-install-and-run-the-project)
4. [How to Use the Project](#how-to-use-the-project)
5. [Credits](#credits)

## **How to Install and Run the Project**

### Prerequisites

- Node.js and npm installed on your machine.
- Basic knowledge of JavaScript, React, Node.js, and Material UI.

### Installation Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/alvintjw/AlvinChatBot.git
   cd mern-chatbot
   ```
2. **Setup the Backend**

   ## Navigate to the backend folder and install dependencies:

   ```bash
   cd backend
   npm install
   ```

   ## Create a .env file and configure your environment variables:

   ```bash
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

   ## Start the backend server:

   ```bash
   npm run dev
   ```

3. **Setup the Frontend**

   ## Navigate to the frontend folder and install dependencies:

   ```bash
   cd ../frontend
   npm install
   ```

   ## Start the frontend server:

   ```bash
   npm start
   ```

## **Running the Application**

    •	The backend server will run on http://localhost:5000 and the frontend on http://localhost:3000.
    •	Access the chatbot interface and start interacting with it by entering your queries.

# **How to Use the Project**

## **Using the Chatbot Interface**

    1.	Access the Chatbot: Go to http://localhost:3000 in your browser.
    2.	Interact with the Chatbot:
    •	Input questions or commands related to port operations, such as shipment schedules, equipment status, or potential delays.
    •	Example Input: “What is the expected delay for incoming vessels in Block A?”
    •	Example Output: “Based on current data, Block A is expected to experience a 30-minute delay due to crane availability. Consider shifting some shipments to Block B to minimize impact.”

## **Authentication**

    •	Users are required to log in before accessing chatbot functionalities. JWTs manage user sessions securely, ensuring authenticated access.

## **Material UI Integration**

    •	The user interface is designed using Material UI components for a modern, responsive, and visually appealing design.

Credits

## **References**

    •	The project is inspired by various MERN stack tutorials and resources available on GitHub, YouTube, and other learning platforms. Full credits to this tutorial by freeCodeCamp https://www.youtube.com/watch?v=wrHTcjSZQ1Y&list=PLN51iglPTQxCDWcOCcoYN5vF4KkNm-l0n&index=6&ab_channel=freeCodeCamp.org
