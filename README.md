# 🏦 Corporate Banking Client & Credit Management System

## 📘 Project Overview

The **Corporate Banking Client & Credit Management System** is a full-stack enterprise web application designed to digitize and streamline **corporate client onboarding and credit request workflows** used in corporate and investment banks.

This system replaces traditional **manual and spreadsheet-based processes** with a **secure, role-based web application**, improving efficiency, transparency, auditability, and security.

---

## 🎯 Project Objective

- Digitally onboard corporate banking clients  
- Manage and track corporate credit and loan requests  
- Enforce role-based access control (RBAC)  
- Secure APIs and UI using JWT authentication  
- Demonstrate real-world enterprise banking architecture  
- Prepare the application for containerized deployment using Docker  

---

## 🚧 Problem Statement

Traditional corporate banking systems often suffer from:

- Manual client onboarding  
- Spreadsheet-based credit tracking  
- Poor approval workflow visibility  
- Weak access control  
- Limited auditing and traceability  

These challenges lead to:

- Delayed approvals  
- Operational inefficiencies  
- Increased error rates  
- Security and compliance risks  

---

## ✅ Solution Overview

This application provides a centralized corporate banking platform where:

- 👔 **Relationship Managers (RM)** onboard clients and submit credit requests  
- 📊 **Analysts** review, approve, or reject credit requests  
- 🔑 **Admins** manage users and control access  
- 🔐 JWT-based authentication secures all APIs  
- 🛡️ Role-based authorization ensures data isolation  

---

## 🛠️ Technology Stack

### Frontend
- Angular 18  
- TypeScript  
- HTML5, CSS3  

### Backend
- Spring Boot  
- Spring Security  
- JWT Authentication  
- RESTful APIs  

### Database
- MongoDB  

### DevOps & Tools
- Docker  
- Maven  
- Git & GitHub  
- Postman  

---

## 🏗️ Architecture Overview

- **Frontend:** Angular Single Page Application (SPA)  
- **Backend:** Spring Boot REST APIs  
- **Authentication:** JWT  
- **Authorization:** Role-Based Access Control (RBAC)  
- **Database:** MongoDB  
- **Deployment Readiness:** Dockerized services  

---

## 👥 User Roles & Responsibilities

### 🔑 Admin
- Create and manage users  
- Assign roles (Admin, RM, Analyst)  
- Activate or deactivate user accounts  

### 👔 Relationship Manager (RM)
- Onboard corporate clients  
- Manage assigned client profiles  
- Submit credit or loan requests  
- View only assigned clients and requests  

### 📊 Analyst
- View all credit requests  
- Review request details  
- Approve or reject requests  
- Add remarks for decisions  

---

## 🚀 Core Features

### 🔐 Authentication & Authorization
- Secure JWT-based login  
- Role-based access control  
- Protected Angular routes using guards  
- Spring Security-enforced backend protection  
- BCrypt password encryption  

### 🏢 Corporate Client Onboarding
- RM-specific client ownership  
- Create, update, and view corporate clients  
- Secure MongoDB persistence  

### 💳 Credit Request Management
- Credit request submission by RM  
- Review and approval by Analyst  
- Status lifecycle: **Pending / Approved / Rejected**  
- Approval and rejection remarks  

---

## 📁 Backend Project Structure

**Project Name:** `corporate-banking-backend`

```
corporate-banking-backend
├── src/main/java/com/example/corporatebanking
│   ├── config
│   ├── controller
│   ├── dto
│   ├── exception
│   ├── model
│   │   └── enums
│   ├── repository
│   ├── service
│   └── CorporateBankingBackendApplication.java
├── src/test/java
├── target
│   └── site/jacoco
├── Dockerfile
└── pom.xml
```

---

## 📁 Frontend Project Structure

**Project Name:** `corporate-banking-frontend`

```
corporate-banking-frontend
├── src/app
│   ├── auth
│   ├── admin
│   ├── rm
│   ├── analyst
│   ├── shared
│   ├── models
│   ├── services
│   ├── app.component.*
│   └── app.routes.ts
├── coverage
├── Dockerfile
├── nginx.conf
├── angular.json
└── package.json
```

---

## 🐳 Docker Support

- ✅ Backend Docker image available  
- ✅ Frontend Docker image available  
- ⚠️ MongoDB currently running outside Docker  
- 🔮 Docker Compose planned  

---

## 🧪 Testing & Code Coverage

### Backend
- JUnit & Mockito unit tests  
- JaCoCo code coverage  
- Reports: `target/site/jacoco`  

### Frontend
- Angular testing framework  
- Coverage reports: `coverage/`  

---

## ▶️ How to Run the Project (Without Docker)

### Backend
```bash
cd corporate-banking-backend
mvn spring-boot:run
```
Runs on: `http://localhost:8080`

### Frontend
```bash
cd corporate-banking-frontend
npm install
ng serve
```
Runs on: `http://localhost:4200`

---

## 🔐 Security Highlights
- JWT-based authentication  
- Role-based authorization  
- Encrypted password storage  
- Protected APIs and frontend routes  
- Centralized exception handling  

---

## 🚀 Future Enhancements
- Docker Compose orchestration  
- MongoDB containerization  
- Refresh token support  
- Pagination and filtering  
- Audit logging  
- Notification system  
- Cloud deployment  

---

## 🏁 Conclusion

This project demonstrates a **real-world corporate banking workflow** implemented using **modern full-stack technologies**. It highlights secure authentication, clean architecture, Docker readiness, and maintainable enterprise-grade design.

---

## 👨‍💻 Author

**Preetham V**  
Full Stack Java & Angular Developer
