# Result Management Application

The Result Management Application is a web-based platform developed using HTML, CSS, JavaScript, and Node.js. This application allows two types of users, students and teachers, to interact with the system for result-related tasks.


## Features

### User Authentication

The application offers two distinct login buttons on the homepage for students and teachers. Each user type has their own set of functionalities and permissions within the system.
<img width="960" alt="Home" src="https://github.com/shahnwaza058/nodejsassignment_nagarro/assets/138658659/c4c0c9b5-c8ee-4912-aa73-3e66a1c5ee38">

### Student Portal

Students can log in to the application using their roll number and date of birth. They can view their results after successful authentication. If the provided roll number and date of birth do not match the records, an error message will be displayed.

<img width="960" alt="Screenshot 2023-08-29 144002" src="https://github.com/shahnwaza058/nodejsassignment_nagarro/assets/138658659/656faa6e-382f-4d9a-b8a5-cdd492b61da5">
<img width="960" alt="Screenshot 2023-08-29 143431" src="https://github.com/shahnwaza058/nodejsassignment_nagarro/assets/138658659/1a1b5045-8fbb-428f-b2a0-c889189e6828">

### Teacher Portal

Teachers have access to a wider range of functionalities:
<img width="960" alt="Screenshot 2023-08-29 143512" src="https://github.com/shahnwaza058/nodejsassignment_nagarro/assets/138658659/01452664-470f-41a2-a583-320ebdb46207">

- **View Records:** Teachers can view all student result records.
<img width="960" alt="Screenshot 2023-08-29 143535" src="https://github.com/shahnwaza058/nodejsassignment_nagarro/assets/138658659/96b13b7d-ad67-4614-ba1b-bc1a972ad172">
<img width="960" alt="Screenshot 2023-08-29 143554" src="https://github.com/shahnwaza058/nodejsassignment_nagarro/assets/138658659/3df0ff65-5f9f-4c87-a9ca-76072e73f269">

- **Add New Record:** Teachers can add new result records to the system. This includes entering the student's roll number, date of birth, and result information.
<img width="960" alt="Screenshot 2023-08-29 143609" src="https://github.com/shahnwaza058/nodejsassignment_nagarro/assets/138658659/76aa69eb-beab-4a58-b51a-4196e1a2219a">

- **Edit Records:** Teachers can edit existing result records. They can update result details such as marks, grades, etc.
<img width="960" alt="Screenshot 2023-08-29 143700" src="https://github.com/shahnwaza058/nodejsassignment_nagarro/assets/138658659/83f6b0c5-83eb-45c6-83fc-1efe7a7b8a06">

- **Delete Records:** Teachers can delete result records for students who are no longer relevant.
<img width="476" alt="Screenshot 2023-08-29 143826" src="https://github.com/shahnwaza058/nodejsassignment_nagarro/assets/138658659/239d1c8f-a5a6-4bb3-ae5a-ede194b9facc">
<img width="481" alt="Screenshot 2023-08-29 143814" src="https://github.com/shahnwaza058/nodejsassignment_nagarro/assets/138658659/c32b1f0b-a071-43f3-b234-06fc337d7815">

- **Chart Visualization:** The application utilizes Chart.js to display charts representing percentage ranges and the number of students who achieved those percentages.
<img width="960" alt="Screenshot 2023-08-29 143724" src="https://github.com/shahnwaza058/nodejsassignment_nagarro/assets/138658659/ec9bcd91-5fbb-49d8-a960-f0b5b5342718">

## Installation and Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/shahnwaza058/nodejsassignment_nagarro.git
   cd nodejsassignment_nagarro
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Environment Variables:**

   Create a `.env` file in the root directory and configure the following variables:

   ```plaintext
   PORT=3000
   MONGO_URI=your_database_connection_string
   JWT_SECRET=your_JWT_SECRET
   ```

4. **Start the Application:**

   ```bash
   npm start
   ```

   The application will be accessible at `http://localhost:3000`.

## Technologies Used

- **HTML:** Used for structuring the web pages and forms.
- **CSS:** Used for styling the user interface and making the application visually appealing.
- **MongoDB:** Used as the database to store student and result information.
- **EJS:** Used as the template engine for generating dynamic HTML content.
- **JavaScript:** Used for client-side interactivity and form validation.
- **Node.js:** Used for building the backend server that handles authentication and database operations.
- **Chart.js:** Used for creating interactive and visually appealing charts to represent data.
