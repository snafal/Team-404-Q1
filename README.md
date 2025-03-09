# Team-404-Q1

Login and Signup System

This project is a simple Login and Signup System built with HTML, CSS, and JavaScript. It includes basic user authentication with client-side validation.

 Features
Login Page
  - Username and password input
•	The user must have at least 8 characters for the username.
  - Form validation with error messages
  - Redirects to `landing.html` after successful login
  - Displays error messages for incorrect credentials

Signup Page
  - Username (charter-8), password(charter-6), and confirm password fields
•	Passwords are stored securely using bcrypt hashing.
  - Validates required fields and password matching
  - Redirects to the login page after successful signup

Technologies Used
- HTML5
- CSS3
- JavaScript 
- Fetch API for server communication


How to Run
1. Clone the repository:
   git clone https://github.com/snafal/Team 404-Q1.git

Navigate to the project folder:
cd Team 404-Q1
Start the backend server
node index.js
npm run dev
2.	Run the frontend
o	Open login.html in a browser.
o	Ensure the server is running before attempting login/signup.
________________________________________
🗄️ Database Setup & Configuration
1.	MongoDB Installation
o	Install MongoDB Community Edition from here.
o	Start the MongoDB server using: 
mongod --dbpath /data/db
2.	Database Connection
o	The project uses MongoDB Atlas (recommended) or a local MongoDB instance.
o	DB_PASS and DB_USER in the .env file with your MongoDB Connection String. And URI set in index.js
________________________________________
🔍 Assumptions Made During Development
•	The user must have at least 8 characters for the username.
•	Passwords are stored securely using bcrypt hashing.
•	The backend is hosted on http://localhost:5500/ for local development.
✨ Additional Features (Optional Enhancements)
•	Password Encryption: Uses bcrypt to hash passwords for security.
•	Real-Time Validation: Client-side validation to improve user experience.
•	Error Handling: Displays appropriate error messages for failed login/signup attempts.

📜 License
This project is licensed under the MIT License.




