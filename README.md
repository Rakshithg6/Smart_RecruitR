# AI-Powered Recruitment Platform

A smart recruitment platform that automates the hiring process using Generative AI for resume screening, interview scheduling, and candidate shortlisting. It includes a dashboard for HR professionals and a chatbot assistant for candidates.

## Key Features

- **Resume Analysis:** Extracts key skills from resumes and matches candidates to job descriptions.
- **Generative AI Interviews:** Creates custom interview questions based on job roles using OpenAI's GPT models.
- **HR Dashboard:** Provides real-time insights, applicant tracking, and analytics for HR professionals.
- **Chatbot Assistant:** A multi-lingual chatbot to answer candidate queries and schedule interviews.

## Tech Stack

- **Frontend:** ReactJS with Material UI for a responsive and professional interface.
- **Backend:** Node.js with Express for REST APIs.
- **AI Models:** OpenAI GPT for text generation and NLP tasks.
- **Database:** MongoDB for candidate and job data storage.
- **Deployment:** Dockerized microservices with Kubernetes, hosted on AWS or GCP.

## Project Phases

### Phase 1: Core Components and Foundation (Weeks 1–8)

- **Requirement Gathering & Planning**
  - Define project scope and features.
  - Create documentation for APIs, database schema, and AI model functionalities.
- **AI Model Development & Integration**
  - Build a resume parsing AI model using NLP techniques (e.g., BERT or spaCy).
  - Develop a generative AI module to generate interview questions.
- **Frontend Development**
  - Design a ReactJS-based UI for candidates and HR.
  - Implement a chatbot interface for candidate interactions.
- **Backend API Development & Database Setup**
  - Set up Node.js/Express backend to handle API requests.
  - Use MongoDB for storing resumes, job descriptions, and candidate profiles.
- **Cloud Infrastructure Setup**
  - Dockerize services and deploy them on AWS or GCP using Kubernetes.

### Phase 2: Advanced Features, Testing, and Deployment (Weeks 9–16)

- **Advanced Features Development**
  - Enhance the job matching algorithm and chatbot interactions.
  - Improve the HR dashboard with advanced analytics.
- **Testing and Quality Assurance**
  - Perform unit, integration, and performance testing.
  - Conduct User Acceptance Testing (UAT) with HR professionals and candidates.
- **Deployment and Final Integration**
  - Deploy the application using CI/CD pipelines.
  - Ensure smooth integration of AI models in the cloud environment.
- **Documentation and Final Review**
  - Prepare comprehensive technical and user documentation.
  - Conduct a final project review and code clean-up.

## Installation

### Prerequisites

- Node.js
- MongoDB
- Docker
- AWS or GCP account (for cloud deployment)

### Steps to Run Locally

```bash
# Clone the repository
git clone https://github.com/yourusername/ai-powered-recruitment-platform.git
cd ai-powered-recruitment-platform

# Install dependencies for both frontend and backend
cd frontend
npm install
cd ../backend
npm install

# Start the backend and frontend
cd backend
npm start
cd ../frontend
npm start

# Access the platform at http://localhost:3000
