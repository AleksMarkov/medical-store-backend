
# Medical Store Admin Dashboard

Medical Store Admin Dashboard is a web application developed to manage income, expenses, and other statistical data of a medical store. It includes components for user authentication, order management, product management, customer management, and supplier management.

## Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Pages and Features](#pages-and-features)
- [Technical Specifications](#technical-specifications)
- [Setup Instructions](#setup-instructions)
- [Contributions](#contributions)
- [License](#license)

## Project Overview

The Medical Store Admin Dashboard is a responsive web application that provides administrators of a medical store with the ability to manage data through a user-friendly interface. The application includes the following main pages:

- **Login**: Users can log in by entering their email and password.
- **Dashboard**: Displays overall statistics, recent customer orders, and income/expense data.
- **Orders**: Allows managing orders, filtering, and sorting them.
- **Products**: Management of products, their categories, and stock levels.
- **Suppliers**: Management of suppliers, including adding and editing information.
- **Customers**: Display and management of customer lists.

## Technologies Used

- **Frontend**: React, React Router, styled-components, Material-UI (MUI), Blueprint
- **State Management**: Redux, redux-thunk
- **Form Handling and Validation**: react-hook-form, yup
- **Authentication**: JWT (JSON Web Token) using Axios
- **Backend**: Node.js, Express, MongoDB
- **Design**: Support for responsive design for desktop and tablet

## Pages and Features

### Login Page

- **Functionality**: Users can log in by entering their email and password. Form validation using yup and react-hook-form.
- **Redirection**: Upon successful login, users are redirected to the main Dashboard page.

### Dashboard Page

- **Functionality**: Displays overall statistics, including the number of products, suppliers, and customers. Includes tables for recent customers and income/expense data.

### Orders Page

- **Functionality**: Allows filtering and sorting of orders. Contains a table with details about each order.

### Products Page

- **Functionality**: Displays a list of products with options to add, edit, and delete products. Supports filtering by product name.

### Suppliers Page

- **Functionality**: Manage supplier information, add new suppliers, edit, and delete existing ones.

### Customers Page

- **Functionality**: Display a list of customers with the ability to filter by customer name and edit customer information.

## Technical Specifications

1. **Responsive Design**:

   - Support for responsiveness for tablets and desktops:
     - Mobile: flexible layout from 320px, becomes responsive from 375px
     - Tablet: from 768px
     - Desktop: from 1440px
   - Optimized image loading and retina display support.

2. **Authentication**:

   - User authentication using JWT.
   - Route protection with access token verification.

3. **State Management**:

   - Global state management using Redux for data consistency.
   - Storage of product, order, customer, and supplier data.

4. **Form Validation**:

   - Validation of all forms using react-hook-form and yup to ensure data integrity.

5. **Modal Management**:
   - Using modals for adding and editing product and supplier data.

## Setup Instructions

1. **Clone the repository**:

   ```bash
   git clone https://github.com/AleksMarkov/medical-store-frontend.git
   cd medical-store-frontend
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the application**:

   ```bash
   npm start
   ```

4. **Visit the application**:
   - The application will be running on `http://localhost:3000`.

## Contributions

Contributions are welcome! Please feel free to submit a pull request or open an issue.

## License

This project is licensed under the MIT License.
