# Form Project

## Description

Welcome to the Form project! This project provides user-friendly login and registration functionalities. Additionally, users can create and customize forms, and view a list display of user data or relevant information.

## Features

1. **User Registration:**
   - Users can effortlessly register by providing the necessary information. The registration process is designed to be straightforward, allowing users to quickly create their accounts.


2. **User Login:**
   - Registered users can log in using their credentials.

3. **Form Creation:**
   - Users can create and customize forms.Whether it's for personal use or specific business needs, the form creation functionality provides flexibility and adaptability to various requirements.

4. **List Display:**
   - Once logged in, users can view a list of user data or any relevant information.This feature enhances the usability of the application, providing users with a comprehensive overview of the stored data.

## Getting Started

To start using the Form project, follow the installation instructions for the client and server components. The provided commands make it easy for users to set up and run the application locally, experiencing the full range of features in a development environment.

## PostgreSQL Database Setup

Follow these steps to set up your PostgreSQL database for the Form project:

Log in to your PostgreSQL server:
   ```bash
   sudo su postgres
   psql
   CREATE USER form_user WITH PASSWORD '1';
   ALTER USER form_user CREATEDB;
   CREATE DATABASE form_nest_db;
   GRANT ALL PRIVILEGES ON DATABASE form_nest_db TO form_user;
   \c form_nest_db
   ```


## Client Installation:
To install and run the client:
```bash
cd client/
npm install
npm start
```

## Server Installation:
To install and run the server:
```bash
cd server/
npm install
npm run dev
```

