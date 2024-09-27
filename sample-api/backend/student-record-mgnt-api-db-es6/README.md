# Node backend With DB - ES6

## Project Setup

### Node backend

Step 1: Create backend node project
````cmd
mkdir student-record-mgnt-api-db-es6
````

Step 2: init
````cmd
cd student-record-mgnt-api-db-es6
npm init -y

````
![step2](./docs/images/bk_project_step1.jpg)

*   Note:
1. package name: (student-record-mgnt-api)
2. version: (1.0.0)
3. description: Student record management api db es6
4. entry point: (index.js) app.js
5. test command: npm test
6. git repository: 
7. keywords:
8. author: arun
9. license: (ISC)
10. Is this OK? (yes) 

Step 3: Install Express and other dependencies
````cmd

npm install express mysql2 sequelize body-parser

````

Step 4: Create app.js file
````cmd
cd . > app.js
````

Step 5: Refer app.js file content  


Step 6: Run the api

````cmd
node app.js
````

Step 7: Open browser and hit http://localhost:3000/status 

Step 8: 
````
CREATE TABLE student (   id INT AUTO_INCREMENT PRIMARY KEY,   name VARCHAR(100) NOT NULL,   age INT NOT NULL,   email VARCHAR(100) NOT NULL UNIQUE,
enrollment_date DATETIME DEFAULT CURRENT_TIMESTAMP );

INSERT INTO student (name, age, email)  VALUES ('John', 22, 'john@example.com');

````
Step 9: curl

````
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"name":"arun","age":"33", "email":"test@gmail.com"}' \
  http://localhost:3000/api/student

  curl --header "Content-Type: application/json" \
  --request GET \
  http://localhost:3000/api/student
````    