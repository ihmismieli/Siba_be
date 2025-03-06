# Backend project learning walk tasks 

**The idea of this task:**

* Develop code reading skills
* Learn architectural aspects and modular code
* Read this particular code to be able to program the coming programming tasks

## Tasks for getting familiar with the architecture and project folder structure

**Case:** Spring 2025 case to be studied is Siba backend (e.g. admin, planner, Building, Equipment)

**Instructions how to set up the example**: 

**Case repo link:** https://github.com/haagahelia/Siba_be

(**Case client repo link: (possibly not needed yet)**) https://github.com/haagahelia/siba-fe

**General Note:** If in some of these tasks you would have to list files, and there would be more of 5 files of same kind, give 3 examples and say "etc. in that and that folder", possibly "excluding this or that special one". This helps identify certain unique files and groups of similar files. It's important to learn to notice the nature of files, even if not understanding all details.
 
1. Server startup

* List the names of our own files that are called (not just declared) during the server startup. List them in the order they are called. Only include files from the src folder (e.g. "\routes\Building.ts" ).

2. Middleware attachment

* List the middleware added to handle the GET request for the "one building by id" REST API endpoint, in the order they are attached at server startup.
* Note that Express accepts middleware as functions or arrays of functions (or arrays of arrays of middleware functions and so on).
* But finally the last values found must be a (middleware) function. That makes attaching single (function) or multiple (array) middleware functions easy.
* Which ones for that route are ready functions and which are arrays to be 'unpacked'?
* What are the parameters every Express middleware function receives?

3. Login of the user (basics)

How are users created? Where is/are the endpoint(s) needed for adding users? What information is sent to backend for user creation?

How does the client try to login? Where are the user accounts defined? Where is/are the endpoint(s) needed for login?

4. Encryption and decryption with encryption library. case 1 - password hashing and checking hash 2nd time

* How and where is password saved? Do you see clear text passwords in database? (user/email: admin, password: admin, user/email:planner, password: planner). 
* Where in the code (if anywhere) do you see password encryption/hashing? 
* Where in the code (if anywhere) do you see password decryption/'hashing reversed'?. 
* Why so? (Well don't spend too much time here, but fast searches in project code are fine and might reveal what happens)

5. Encryption and decryption with encryption library. case 2 - (authentication)/authorization token

* Where, when and how is the user information **encrypted**? Where is the encryption result saved and where is the result relayed to?

* Where, when and how is the user information **decrypted**? Where is the decryption result saved and where is the result relayed to?

5. Input data validation

* Find the endpoint for creating one new Equipment (=Equipment type). 
* What is the end point URL? What is the HTTP method? 
* How is the input data checked/validated? (Don't try to understand all details, but browse around to see hints of different kinds of data being checked)

6. Database connection creation and connection pool

* What are all the files in project related to database design, database creation, database connection, database operations?

7. Database operation when request comes in

* Are any database operations started when those .get() .post() .delete() functions are called?

8. Logger creation and usage

* Where is the logger object created? 
* What npmjs library is used to created the logger? 
* Where is it defined where the logger writes to?
* What logging levels (message/error/warning etc. severity levels) you can find?

9. Response handling and writing back to client

* Look at some endpoints in src\routes\Building.ts for model. 
* In which file is the final response written back to the caller/client? 
* What info does the programmer of a single REST API endpoint need to provide? 
* Does the programmer of the endpoint decide what is the HTTP status code?
* Should the new endpoint programmer write something using the logger?
* Should the new endpoint programmer use the res object to do some res.send, res.end or so? 

## Notice
Notice that all these questions are related to how things are supposed to be written in THIS case. That means all questions require reading THIS case code. Googling for answers would thus give wrong answers. Googling for hints or understanding is of course ok.