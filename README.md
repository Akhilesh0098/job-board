# Job Board API


## Setup Instructions

1. **Environment Setup**
   ```bash
   # Clone the repository
   git clone [repository-url]

   # Install dependencies
   npm install
   ```

2. **Environment Variables**
   Create a `.env` file with:
   ```
   DB_HOST=your_database_host
   DB_USER=your_database_user
   DB_PASSWORD=your_database_password
   DB_NAME=your_database_name
   PORT=3000
   ```

3. **Database Setup**
   - Ensure MySQL is installed and running
   - Create a database matching your job_board
   - Tables will be automatically created on application start if not then copy the code provided in   the Prerequisites section and run it in your MySQL terminal

4. **Running the Application**
   ```bash
   # Development mode
   npm run dev

   # Production mode
   npm start
   ```

5. **Docker Setup**
   ```bash
   # Build Docker image
   docker build -t job-board-api .

   # Run Docker container
   docker run -p 3000:3000 job-board-api
   ```

## API Documentation
- Swagger documentation available at `/api-docs` when running the application
- Includes detailed endpoint descriptions and request/response schemas

## Technologies Used
- Node.js
- TypeScript
- Express.js
- MySQL
- Swagger UI
- Docker

### Core Functionality
- **Complete CRUD Operations for Job Postings:**
  - Create new job postings
  - Retrieve all job listings
  - Get specific job details by ID
  - Update existing job postings
  - Delete job postings

### Technical Implementation
- **TypeScript & Node.js:** Built with type safety and modern JavaScript features
- **Express Framework:** Handles routing and middleware
- **MySQL Database:** Stores job posting data
- **Swagger Documentation:** Auto-generated API documentation
- **Docker Support:** Containerized application for easy deployment

## API Endpoints

### Jobs API
- `POST /jobs` - Create a new job posting
  - Required fields: title, company, location, salary, description
  - Returns: Created job object

- `GET /jobs` - Retrieve all job postings
  - Returns: Array of job objects

- `GET /jobs/:id` - Get a specific job by ID
  - Returns: Single job object
  - Error: 404 if job not found

- `PUT /jobs/:id` - Update a job posting
  - Requires job ID and updated fields
  - Returns: Updated job object
  - Error: 404 if job not found

- `DELETE /jobs/:id` - Delete a job posting
  - Requires job ID
  - Returns: Success message
  - Error: 404 if job not found

## Project Structure

##Dependencies

- Node.js
- TypeScript
- MySQL
- npm
- Docker
-npm install swagger-ui-express @types/swagger-ui-express swagger-jsdoc @types/swagger-jsdoc 
-npm install express @types/express mysql2 dotenv typescript ts-node @types/node cors @types/cors
-npm install -D nodemon @types/mysql
-In the .env file make sure to add your MySQL credentials and port

## Prerequisites

- Node.js (v10.9.0 or higher)
- MySQL
    Create the database and table using the following SQL:
    ```sql
    CREATE DATABASE job_board;
    USE job_board;
    CREATE TABLE jobs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    company VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    salary DECIMAL(10, 2) NOT NULL,
    description TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );
    ```
- npm
- Docker 

## Installation

### 1. Local Setup

1. **Clone the Repository**
   ```bash
   git clone [your-repository-url]
   cd job-board-api
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Database Setup**
   ```sql
   CREATE DATABASE job_board;
   USE job_board;
   
   CREATE TABLE jobs (
     id INT AUTO_INCREMENT PRIMARY KEY,
     title VARCHAR(255) NOT NULL,
     company VARCHAR(255) NOT NULL,
     location VARCHAR(255) NOT NULL,
     salary DECIMAL(10, 2) NOT NULL,
     description TEXT NOT NULL,
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
   );
   ```

4. **Environment Configuration**
   Create a `.env` file in the root directory:
   ```env
   # Server Configuration
   PORT=3000
   NODE_ENV=development

   # Database Configuration
   DB_HOST=localhost
   DB_USER=your_username
   DB_PASSWORD=your_password
   DB_NAME=job_board
   ```

5. **Start the Application**
   ```bash
   # Development mode with hot reload
   npm run dev

   # Production mode
   npm run build
   npm start
   ```

### 2. Docker Setup

1. **Build the Docker Image**
   ```bash
   docker build -t job-board-api .
   ```

2. **Run with Docker**
   ```bash
   # Run the container
   docker run -p 3000:3000 \
     -e DB_HOST=your_db_host \
     -e DB_USER=your_db_user \
     -e DB_PASSWORD=your_db_password \
     -e DB_NAME=job_board \
     job-board-api
   ```

3. **Docker Compose (Optional)**
   ```bash
   # Start both API and MySQL
   docker-compose up -d

   # Stop services
   docker-compose down
   ```

### 3. Verify Installation

1. **Check API Status**
   ```bash
   curl http://localhost:3000/health
   ```

2. **Access Swagger Documentation**
   - Open browser: `http://localhost:3000/api-docs`

### 4. Development Setup

1. **Install Development Dependencies**
   ```bash
   npm install -D nodemon @types/mysql @types/node @types/express typescript ts-node
   ```

2. **TypeScript Configuration**
   ```bash
   # Generate tsconfig.json if not present
   npx tsc --init
   ```

3. **Run Tests**
   ```bash
   npm test
   ```

### Troubleshooting

1. **Database Connection Issues**
   - Verify MySQL is running
   - Check credentials in .env file
   - Ensure database and tables are created

2. **Port Conflicts**
   - Change PORT in .env if 3000 is in use

3. **Common Issues**
   - Run `npm audit fix` for dependency issues
   - Clear `dist` folder and rebuild if TypeScript errors occur
   - Check logs using `docker logs` if running in container

### Additional Notes

- Default admin credentials are in `.env`

