SELECT *
FROM Employee
    LEFT JOIN Job ON Job.job_id = Employee.job_id
    LEFT JOIN Department ON Department.department_id = Employee.department_id;



-- CREATE TABLE Department (
--   department_id INT NOT NULL AUTO_INCREMENT,
--   name VARCHAR(20),
--   description VARCHAR(50),
--   PRIMARY KEY ( department_id ) 
-- );
-- CREATE TABLE Job(
--   job_id INT NOT NULL AUTO_INCREMENT,
--   title VARCHAR(20),
--   description VARCHAR(50),
-- salary BIGINT,
--  PRIMARY KEY (job_id)
--  )

-- CREATE TABLE Employee(
--  employee_id INT NOT NULL AUTO_INCREMENT,
--  name VARCHAR(20),
--  job_id INT,
--  department_id INT,
--  PRIMARY KEY (employee_id),
--  FOREIGN KEY (job_id) REFERENCES Job(job_id),
--  FOREIGN KEY (department_id) REFERENCES Department(department_id)
--  )
-- INSERT INTO Job(title,salary,description)
-- VALUES ("Sales",1000000,"Getting students");
-- INSERT INTO Employee(name,job_id,department_id)
-- VALUES ("Hila",1,3);
-- DELETE FROM Employee
-- WHERE employee_id=5;

-- ALTER TABLE Employee CHANGE name e_name varchar(20);

-- INSERT INTO Employee( e_name , job_id, department_id)
-- VALUES('Bob', 3, NULL);

-- SELECT * FROM sql7260491.Employee LIMIT 1000;