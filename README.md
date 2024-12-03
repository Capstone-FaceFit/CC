# FaceFit-CC  
**Team C242-PS497**  

This repository contains the backend services for the **FaceFit Application**, developed as part of the Bangkit 2024 Capstone Project by the Cloud Computing team **C242-PS497**.

---

## **Team Members**

|       Member       |  Student ID  |      University      |
| :-----------------: | :----------: | :-------------------: |
| Muhamad Ibnu Fadhil | C200B4KY2617 | Diponegoro University |
|  Yosia Aser Camme  | C200B4KY4548 | Diponegoro University |

---

## **Project Overview**  
The FaceFit application leverages machine learning and cloud computing to recommend eyeglasses suited to a user's face shape. The system includes:  
- A backend API for user management and authentication.  
- A backend ML service for running machine learning inference to predict face shape and recommend glasses.  

---

## **Tech Stack**

### **Backend-API**  
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white) ![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white) ![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white) ![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=javascript&logoColor=white)  

### **Backend-ML**  
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white) ![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white) ![TensorFlow](https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white) ![OpenCV](https://img.shields.io/badge/OpenCV-5C3B6D?style=for-the-badge&logo=opencv&logoColor=white) ![NumPy](https://img.shields.io/badge/NumPy-013243?style=for-the-badge&logo=numpy&logoColor=white)  

---

## **API Documentation**  

### **Backend-ML Endpoints**
- **`POST /predict`**: Accepts an image file and returns the recommended eyeglass frames based on the face shape.
- **`GET /health-check`**: Provides a health check to ensure the backend ML service is running.

### **Backend-API Endpoints**
#### **User Management**
- **`POST /register`**: Register a new user.
- **`POST /login`**: Authenticate a user and issue a JWT token.  
- **`GET /user`**: Retrieve user details (requires authentication).
- **`PATCH /user`**: Update user details (requires authentication).
- **`DELETE /user`**: Delete user account (requires authentication).

#### **Eyeglass Management**
- **`GET /eyeglass`**: Retrieve all eyeglass products (requires authentication).
- **`POST /eyeglass`**: Create a new eyeglass product (requires authentication).
- **`PATCH /eyeglass/:id`**: Update an existing eyeglass product by ID (requires authentication).
- **`GET /eyeglass/:id`**: Retrieve a specific eyeglass product by ID (requires authentication).

---

## **Deployment**  

### **Backend-API**  
- **Platform**: Google Cloud Compute Engine.  
- **Key Features**: Scalable API deployment with Docker and Load Balancing.  

### **Backend-ML**  
- **Platform**: Google Cloud AI Platform or Compute Engine.  
- **Key Features**:  
  - TensorFlow runtime for efficient inference.  
  - Optimized image preprocessing with OpenCV.  
  - Secure endpoint for prediction requests.  

---

For further details, the documentation will be updated as the project progresses. Feel free to explore the source code or contribute to the repository!
