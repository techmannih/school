# Node.js School Management API Assignment

## Objective

The goal of this assignment is to develop a set of APIs using **Node.js**, **Express.js**, and **MySQL** to manage school data. The system will allow users to:

1. Add new schools to the database.
2. Retrieve a list of schools sorted by proximity to a user-specified location.

## Features

- **Add School API**: Allows users to add a new school to the system.
- **List Schools API**: Fetches and sorts the schools by their proximity to the user's location.

## Requirements

### 1. Database Setup

You need to set up a `schools` table in MySQL with the following fields:

| Field Name  | Data Type | Description                          |
| ----------- | --------- | ------------------------------------ |
| `id`        | INT       | Primary Key, Auto Increment          |
| `name`      | VARCHAR   | Name of the school                   |
| `address`   | VARCHAR   | Address of the school                |
| `latitude`  | FLOAT     | Geographical latitude of the school  |
| `longitude` | FLOAT     | Geographical longitude of the school |

### 2. API Endpoints

#### 2.1 Add School API

- **Endpoint**: `/addSchool`
- **Method**: `POST`
- **Payload**:
  - `name`: The name of the school (string)
  - `address`: The address of the school (string)
  - `latitude`: The geographical latitude of the school (float)
  - `longitude`: The geographical longitude of the school (float)
- **Functionality**:
  - Validates the input data.
  - Inserts the new school into the `schools` table in MySQL.
- **Validation**:
  - All fields must be non-empty.
  - Ensure the `latitude` and `longitude` are valid coordinates.

#### 2.2 List Schools API

- **Endpoint**: `/listSchools`
- **Method**: `GET`
- **Parameters**:
  - `latitude`: The user's current latitude (query parameter)
  - `longitude`: The user's current longitude (query parameter)
- **Functionality**:
  - Fetches all schools from the `schools` table.
  - Sorts the list of schools based on proximity to the user's location using the geographical distance formula.
  - Returns the sorted list of schools.

### 3. Sorting Mechanism

The proximity sorting is based on the **Haversine formula** to calculate the distance between two geographical points (latitude and longitude). The API will calculate the distance between the user's location and each school's location, then sort the schools in ascending order of distance.

## Setup and Installation

### 1. Clone the Repository

```bash
git clone https://github.com/techmannih/school.git
cd school
```

### 2. Install Dependencies

```bash
   npm install
```

### 3. Database Configuration

- Create a MySQL database and run the following SQL query to create the `schools` table:

```sql
CREATE TABLE schools (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL
);
```

- Update the MySQL connection details in the `db.js` file.

### 4. Environment variable configuration

- Create a `.env` file in the root directory and add the following environment variables:

```bash
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=school_management
```

### 5. Start the Server

```bash
npm run serve
```

The server will start on `http://localhost:3000`.

## Technologies Used

- **Node.js**: JavaScript runtime built on Chrome's V8 engine, used to build scalable server-side applications.
- **Express.js**: Web application framework for Node.js, used to create RESTful APIs and handle HTTP requests.
- **MySQL**: Relational database management system, used to store and manage school data.
- **Geolocation Libraries**: (`haversine-distance`) Used to calculate distances between two geographical points.
- **Postman**: API testing tools to test the developed endpoints.
- **dotenv**: For managing environment variables like database credentials.
- **Azure App Service**: Used to host and deploy the Node.js backend application.
- **Azure Database for MySQL**: Managed database service for MySQL, used to handle and store application data securely.


## Hosted API

The API is hosted on Heroku at the following base URL:

```
https://school-server-bvf2debtetckdchb.eastus-01.azurewebsites.net/
```



Thanks for reading! 🚀


