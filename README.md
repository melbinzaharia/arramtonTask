# arramtonTask
Documentation :

Created restApi for signIn,SignUp , signOut and User-details
Implemented proper folder 
Implemented bcypt hashing algorithm for hashing
Implemented Jwt token for authentication via cookies
Executed sanitization in user Input via sanitizeHtml
Csp middleware also Implemented
express-validator is used for validating inputs
Middleware  for user authentication
Tech Stack: NodeJs,MongoDb,Express.js
Abstacted details such as jwt key ,port and mongo db url

DEVELOPMENT ENVIORMENT SETUP

Clone the project from the repository
Run npm install to install dependencies
change directory to arramtonTask in terminal
Start the server with npm dev start and then you can use npm dev run


ENDPOINTS

1) SIGNUP: POST METHOD ,localhost:8080/api/auth/signup
JSON BODY TO BE PASSED IN FORMAT => {
  "firstname": "james",
  "lastname": "Anderson",
  "username": "emilypllu",
  "email": "emily.0andersonopp@example.com",
  "password": "Passw0rd!23"
}

2) SIGNIN: POST METHOD, localhost:8080/api/auth/signin
JSON BODY TO BE PASSED IN FORMAT => {
  "email": "emily.0andersonopp@example.com",
  "password": "Passw0rd!23"
}
Once the signin is done copy the ID from response

3) USERDETAILS: GET METHOD, localhost:8080/api/user/ ID 

PASS THE ID IN PARAM WHICH IS OBTAINED FROM THE SIGNIN


4) Signout: GET METHOD:localhost:8080/api/auth/signout


In case of database issues => please change the database in .env if the issues in database not resolved












