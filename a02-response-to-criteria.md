# IFN666_25se1 Assessment 02 Submission

**Student name:**  Liyang Wang

**Student ID:** n12211451

# Response to marking criteria

## (API) Core: Application architecture (1 mark)

- **One line description:** I used a layered architecture of models, routes, controllers, middleware.
- **Video timestamp:** 
- **Relevant files**
   - /server/src/

## (API) Core: Endpoints (2 marks)

- **One line description:** I implemented 17 endpoints of authentication, transaction, budget and category.
- **Video timestamp:** 
- **Relevant files**
   - /server/src/routes

## (API) Core: Data model (3 marks)

- **One line description:** I used Mongoose to implement the data model with two one-to-many relationships and having references between category and transaction/budget.
- **Video timestamp:** 
- **Relevant files**
   - /server/src/models

## (API) Core: Data interface (3 marks)

- **One line description:** I used a "controller" architecture to connect my API endpoints to the data model and implemented CRUD operations.
- **Video timestamp:** 
- **Relevant files**
   - /server/src/controllers

## (API) Core: Deployment to web server (3 marks)

- **One line description:** I configured Caddy file on the server so that my application running on the internet at https://n12211451.ifn666.com/assessment02/
- **Video timestamp:** 
- **Relevant files**
   - /Caddyfile

## (API) Core: API testing with Hoppscotch (3 marks)

- **One line description:** I tested my API using Hoppscotch and it proves that my business logic is implemented.
- **Video timestamp:** 
- **Relevant files**
   - /server/API-collection.json

## (API) Additional: Authentication (3 marks)

- **One line description:** I implemented new user registeration and existed users login with JSON web tokens (JWT).
- **Video timestamp:** 
- **Relevant files**
   - /server/src/controllers/authController.js
   - /server/src/models/User.js

## (API) Additional: Input validation (3 marks)

- **One line description:** I implemented media type validator and required fields in data models so that I can prevent users from inputing non-JSON format requests or missing input values.
- **Video timestamp:** 
- **Relevant files**
   - /server/src/middleware/mediaTypeValidator.js
   - /server/src/models/Transaction.js
   - /server/src/models/Category.js
   - /server/src/models/Budget.js

## (API) Additional: Security (3 marks)

- **One line description:** I implemented additional security features to my API with Helmet. 
- **Video timestamp:** 
- **Relevant files**
   - /server/server.js

## (API) Additional: Pagination (3 marks)

- **One line description:** I implemented pagination on the "get all" routes of transactions functionality.
- **Video timestamp:** 
- **Relevant files**
   - /server/src/controllers/transactionController.js

## (API) Additional: Use of third-party APIs (3 marks)

- **One line description:** I implemented md5 to hashed passwords so that developers cannot know the real passwords from the database.
- **Video timestamp:** 
- **Relevant files**
   - /server/src/controllers/authController.js

---


## (Client) Core: Application architecture (3 marks)

- **One line description:** I used a layered architecture of services, pages, context and components.
- **Video timestamp:** 
- **Relevant files**
   - /client
   - /client/src/

## (Client) Core: User interface design (3 marks)

- **One line description:** I used React Router and Mantine UI framework to create a clean, intuitive, and user-friendly interface.
- **Video timestamp:** 
- **Relevant files**
   - /client/src/main.jsx
   - /client/src/components/AppLayout.jsx
   - /client/src/pages/HomePage.jsx

## (Client) Core: React components (3 marks)

- **One line description:** I built reusable and modular React components, focusing on CRUD functions of my money manager.
- **Video timestamp:** 
- **Relevant files**
   - /client/src/pages/

## (Client) Core: State management (3 marks)

- **One line description:** I used useState for local component state and useContext for login/log out global state.
- **Video timestamp:** 
- **Relevant files**
   - /client/src/pages/
   - /client/src/context/

## (Client) Core: API integration (3 marks)

- **One line description:** I fetch and display data from the REST API I built.
- **Video timestamp:** 
- **Relevant files**
   - /client/src/services/
   - /client/src/pages/

## (Client) Additional: Authentication (3 marks)

- **One line description:**  I implemented user authentication and authentication tokens handling, allowing users to log in with a username and password and their information will be protected after they log out. 
- **Video timestamp:** 
- **Relevant files**
   - /client/src/pages/LoginPage.jsx
   - /client/src/services/api.jsx
   - /client/src/context/AuthContext.jsx

## (Client) Additional: Input validation (3 marks)

- **One line description:** I implemented input validation in the web application to improve user experience. 
- **Video timestamp:** 
- **Relevant files**
   - /client/src/pages/

## (Client) Additional: Rate limiting (3 marks)

- **One line description:** Implemented client-side rate limiting on pagination buttons using `lodash.debounce`, preventing users from triggering multiple API requests rapidly by clicking repeatedly. This improves UX and protects the backend from redundant requests.
- **Video timestamp:** 
- **Relevant files**
   - src/pages/TransactionsPage.jsx

## (Client) Additional: Pagination (3 marks)

- **One line description:** I took advantage of server-side pagination and implemented navigating through pages of transaction on interaces that list entries.
- **Video timestamp:** 
- **Relevant files**
   - src/pages/TransactionsPage.jsx

## (Client) Additional: Responsive design (3 marks)

- **One line description:** I implemented my application to adapt to different screen sizes like desktop, tablet, and smaller windows and mobile devices.
- **Video timestamp:** 
- **Relevant files**
   - src/componets/AppLayout.jsx
   - src/pages/TransactionsPage.jsx
   - src/pages/BudgetPage.jsx
