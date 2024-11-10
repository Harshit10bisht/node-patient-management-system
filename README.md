# Patient Management System
A comprehensive Patient Management System built with Node.js, Express, and MongoDB. This API allows users to manage patient information, appointments, and medical records with robust authentication and role-based access control.

## Table of Contents

- [Patient Management System](#patient-management-system)
- Features
- [Technologies Used](#technologies-used)
- Prerequisites
- Installation
- [Feature Description](#feature-description)
  - [User Authentication](#1-user-authentication)
  - [Patient Management](#2-patient-management)
  - [Appointment Management](#3-appointment-management)
  - [Authorization and Role-Based Access Control](#4-authorization-and-role-based-access-control)
  - [Database Design](#6-database-design)
  - [Error Handling and Response Management](#7-error-handling-and-response-management)
  - [Scalability and Extensibility](#8-scalability-and-extensibility)

## Features

- **User Authentication:** Secure JWT-based authentication with email validation and session management.
- **Patient Management:** Manage patient records, including personal and medical information.
- **Appointment Management:** Schedule, reschedule, and cancel appointments.
- **Role-Based Access Control:** Supports role-based access control for different functionalities.
- **Traceability and Logging:** Implements unique Trace IDs for request tracking and detailed logging with Winston.
- **Database Design:** Modular schema using MongoDB collections for `Users`, `Patients`, and `Appointments`.
- **Error Handling:** Comprehensive error responses with structured messages and appropriate HTTP status codes.
- **Scalability and Extensibility:** Modular codebase for easy feature extension and maintenance.

## Technologies Used

- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Authentication:** JWT (JSON Web Tokens), RBAC Middlewares
- **Encryption:** Bcrypt, Hashing, Salting & Pepper Technique
- **Logging:** Logger
- **CI/CD:** GitHub Actions

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js:** v14.x or later
- **npm:** Node Package Manager
- **MongoDB:** Local installation or access to a cloud-based MongoDB instance
- **Git:** Version control system

## Installation

1. **Clone the Repository and Navigate to the Project Directory**

     ```bash
     git clone https://github.com/Harshit10bisht/node-patient-management-system.git
     cd node-patient-management-system
     ```
2. **Install Dependencies**
     ```bash
     npm install
     ```
3. **Set Up Environment Variables**
   Create an .env file in the root directory and add the following:
   
    ```bash
    PORT=3000
    MONGO_URI=mongodb+srv://harshitbisht1210:kVWvymoBq2ZiBffp@todoapp.uwzwekw.mongodb.net/?retryWrites=true&w=majority&appName=ToDoApp
    JWT_SECRET=hey-patient
    ```
4. **Start MongoDB server**
   Ensure MongoDB is running. As we will be using transactions in future, we need a MongoDB replica set. You have two options:
   
   a. Run a local MongoDB replica set  
   b. Use a MongoDB cloud connection string (recommended for simplicity)

   Start your MongoDB server based on your chosen option.

6. **Run the Application**
     ```bash
     npm start
     ```
     The server should now be running at http://localhost:3000 or else if occupied then http://localhost:4000.
  
## Feature Description

This project implements a patient management system, covering essential functionality for user authentication, patient management, and appointment scheduling. Below are the key features developed as part of the project:

### 1. **User Authentication**
   - Implemented a user authentication mechanism using **JWT (JSON Web Tokens)**.
   - Users can log in using their email addresses, which generates a session token for further requests.
   - Email validation is enforced using the validator library to ensure the email format is correct before processing the login request.
   - The system supports both normal users and admin users, with certain functionalities restricted based on roles.

### 2. **Patient Management**
   - Manage patient records, including personal and medical information.
   - The `/patient` endpoint allows authenticated users to create, read, update, and delete patient records.
   - Role-based access control ensures that only authorized users can perform certain operations on patient records.

### 3. **Appointment Management**
   - Schedule, reschedule, and cancel appointments.
   - The `/appointment` endpoint allows authenticated users to manage appointments.
   - Each appointment is stored in the Appointment collection in MongoDB, ensuring a unique mapping between doctors and patients.

Postman Collections :

Just import the postman collection URL sent via email into the Postman app to get started.
(For external users, if needed please contact to harshitbisht1210@gmail.com for collections).

Simple Workflow Test :
a. Login as Admin :
- Use the following credentials to log in as an admin:

{
   "email": "hb10admin@gmail.com",
   "password": "Harshitadmin@123"
}
   
b. Generate Token :
- After logging in, you will receive a token. Use this token as a Bearer token for authentication in subsequent requests.

c. Test Operations :
- With the generated token, you can perform various operations in the application.
- You can test patient records and appointments by creating dummy doctors and patients.
- Verify Role-Based Access Control (RBAC) by performing different operations with different roles.

### 4. **Authorization and Role-Based Access Control**
   - The system supports role-based access control, with the authorizeRoles middleware restricting certain endpoints to users with specific roles.
   - Roles are defined in the ROLES constant and include admin, doctor, and patient.
   - All requests to protected endpoints are authenticated using the authMiddleware, which validates the JWT token.

![alt text](public/image-2.png)

=> Using RBAC as a middleware to grant access when required and restrict when invalid.
![alt text](public/image-3.png)

### 5. **Database Design**
   - Used **MongoDB** to manage user, patient, and appointment data.
   - Defined separate collections for `Users`, and `Appointments` to keep the schema modular and scalable.
   - Applied unique constraints on email addresses to prevent duplicate user registrations and ensured each user is uniquely identified.

=> Doctor Schema
![alt text](public/image.png)
=> Appointment Schema
![alt text](public/image-1.png)

### 6. **Error Handling and Response Management**
   - Implemented comprehensive error handling throughout the application.
   - Each endpoint returns structured error responses with appropriate HTTP status codes and descriptive messages.
   - Added middleware to handle invalid routes, ensuring that undefined endpoints return a `404 Not Found` response.

### 7. **Scalability and Extensibility**
   - The project follows a **modular architecture**, making it easy to extend and add new features.
   - Each component (controllers, services, repositories, and middleware) is separated to ensure high maintainability.
   - The code is written with scalability in mind, allowing easy integration of additional features, such as billing systems or reporting modules.