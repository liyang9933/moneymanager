#  Money Manger Application



##  Money Manager Application Overview

Money Manager is a web-based personal financial management tool designed to help users organize their daily transaction efficiently. It allows users to categorize transactions, set budgets, and track income/expense in a simple interface.

<hr/>

**This apps contain the following features:**

- Transactions, Categories, Budgets CRUD

- Authentication

- Input Validation

- Pagination

- Security 

- Rate limitations

- Responsive UI

  <hr/>

  **A description of the applications architecture**

  ```bash
  .
  ├── API-collection.json
  ├── README.md
  ├── package.json
  ├── server.js
  └── src
      ├── controllers
      │   └── authController.js
      │   └── budgetController.js
      │   └── categoryController.js
      │   └── transactionController.js
      ├── middleware
      │   └── auth.js
      │   └── mediaTypeValidator.js
      ├── models
      │   └── Budget.js
      │   └── Category.js
      │   └── Transaction.js
      │   └── User.js
      └── routes
          ├── index.js
          └── transaction.js
          └── budget.js
          └── category.js
          └── authRoutes.js
  ```

  

##  A list of API endpoints

***Method***      ***URL***                      				***Description***

```POST```		```/api/auth/register``` 		Register a new user

```POST```		```/api/auth/login```				Existed user login

```GET```	```/api/transaction?page=1```	Retrieve all transactions in page #1.

```GET```			```/api/transaction/:id```	Retrieve transaction #id.

```POST```		```/api/transaction```				Create a new transaction.

```PUT```		```/api/transaction/:id```		Update data in transaction #id.

```DELETE```	```/api/transaction/:id```		Delete transaction #id.

```GET```			```/api/budget```						Retrieve all budgets.

```GET```			```/api/budget:id```				Retrieve budget #id.

```POST```		```/api/budget```						Create a new budget.

```PUT```		```/api/budget/:id```					Update data in budget #id.

```DELETE```	```/api/budget/:id```				Delete budget #id.

```GET```			```/api/category```				Retrieve all categories.

```GET```			```/api/category/:id```			Retrieve category #id.

```POST```		```/api/category```					Create a new category.

```PUT```		```/api/category/:id```			Update data in category #id.

```DELETE```	```/api/category/:id```			Delete category #id.



##  How to contribute to the development of Money Manager

I welcome contributions! If you'd like to help, please:

- Fork this repository.
- Create a new branch (`git checkout -b feature-branch`).
- Make your changes and commit them (`git commit -am 'Add new feature'`).
- Push to your fork and submit a pull request."



##  A list of dependencies and how to install them

```
Prerequisites:
- Node.js v17 or higher [https://nodejs.org/en]
- npm (Node Package Manager) [https://www.npmjs.com]
- VS code editor [https://code.visualstudio.com/]
- dependencies:
		- "dotenv": "^16.4.7",
    - "express": "^4.21.2",
    - "helmet": "^8.1.0",
    - "jsonwebtoken": "^9.0.2",
    - "md5": "^2.3.0",
    - "mongoose": "^8.13.1"

Installation steps:
1. Clone the repository:
   git clone https://github.com/liyang9933/moneymanager.git

2. Navigate to the project directory:
   cd server

3. Install project dependencies:
   npm install

4. Run the application:
   node server.js
```



##  How to report issues

Found a bug or have a suggestion? I'd love to hear from you!

1. **Check existing issues**
   Before opening a new issue, please [search the existing issues](https://github.com/liyang9933/moneymanager/issues) to avoid duplicates.
2. **Open a new issue**
   If your issue hasn’t been reported yet, [open a new issue](https://github.com/liyang9933/moneymanager/issues/new) and include the following details:
   - **Title**: A short and descriptive summary of the issue.
   - **Description**: What happened? What did you expect to happen?
   - **Steps to Reproduce**: Provide clear steps so we can reproduce the problem.
   - **Screenshots** (if applicable): Help us understand the issue faster.
   - **Environment**: Browser, OS, device, or other relevant info.
3. **Be respectful**
   I'm all here to build a better project. Please be polite and constructive in your communication.

> ✅ Tip: If you're not sure whether something is a bug or a feature request, feel free to ask — I'm happy to help!