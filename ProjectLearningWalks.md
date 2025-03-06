# Backend project learning walk tasks 

## Tasks for getting familiar with the architecture and project folder structure

**Case:** Spring 2025 case to be studied is Siba backend (e.g. admin, planner, Building, Equipment)

**Instructions how to set up the example**: 

**Case repo link:** https://github.com/haagahelia/Siba_be

(**Case client repo link: (possibly not needed yet)**) https://github.com/haagahelia/siba-fe

**Note:** If at some point in these tasks you would have to list files, and there would be more of 5 files of same kind, give 3 examples and say "etc. in that and that folder", possibly "excluding this or that special one". 

It's typical some folder has e.g. index kind of unique file or few, and then _multiple_ files that are kind of siblings with each other. It's important to be able to notice the nature.
 
1. Server startup

List names of our own files that are called (not just something declared there, but some function is called from there) during the server start. All from src folder, so omit that folder in file's folder path. In order of calling them

2. Middleware attachment

List in order what middleware is added to handle the GET one building by id REST API endpoint call (Attached at server startup, used when request coming in). Middleware are functions that are attached to the Request-Response handling loop, and executed before your own final request handling operation. (Well, unless the middleware notices an error and does NOT call next function in the loop)

What are the parameters each middleware function will receive?

In locations where middleware functions are defined Express accepts functions, or arrays (of functions or arrays (of functions or arrays)... But finally the last values found must be a (middleware function). That makes attaching single (function) or multiple (array) middleware functions easy.

Look at src\routes\Building.ts and find

3. Login of the user (basics)

How are users created? Where is/are the endpoint(s) needed for adding users? What information is sent to backend for user creation?

How does the client try to login? Where are the user accounts defined? Where is/are the endpoint(s) needed for login?

4. Encryption and decryption with encryption library. case 1 - password hashing and checking hash 2nd time

How and where is password saved? Do you see clear text passwords in database? (user/email: admin, password: admin, user/email:planner, password: planner)

5. Encryption and decryption with encryption library. case 2 - (authentication)/authorization token

5. Input data validation

Look at the endpoint creating one new Equipment (=Equipment type). What is the end point URL? What is the HTTP method? How is the input data checked? (Don't try to understand all details, but browser around to see hints of data being checked)

6. Database connection creation and connection pool

What are all the files in project related to database design, database creation, database connection, database operations?

7. Database operation when request comes in

Are database operations started when those .get() .post() .delete() functions are called?

8. Logger creation and usage

Where is the logger object created? What npmjs library is used to created the logger? Where is it defined where the logger writes to?

9. Response handling and writing back to client

Look at some endpoints in src\routes\Building.ts for model. In which file is the final response written back to the caller/client? What info does the programmer of the endpoint need to provide? Does the programmer of the endpoint decide what is the HTTP status code?

