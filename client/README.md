#  Money Manger Application



##  Money Manager Application Overview

Money Manager is a web-based personal financial management tool designed to help users organize their daily transaction efficiently. It allows users to categorize transactions, set budgets, and track income/expense in a simple interface.

<hr/>

**A description of the applications architecture**

```bash
.
├── .env
├── index.html
├── package.json
├── README.md
├── vite.config.js
└── public
│   ├── favicon.svg
│   ├── favicon.ico
│   └── img
│		   └── moneyPig.jpg.webp
└── src
│   └── components
│			└── AppLayout.jsx
│   └── context
│			└── AuthContext.jsx
│   └── pages
│			├──  BudgetCreatePage.jsx
│			├──  BudgetEditPage.jsx
│			├──  BudgetPage.jsx
│			├──  CategoryCreatePage.jsx
│			├──  CategoryEditPage.jsx
│			├──  CategoryPage.jsx
│			├──  HomePage.jsx
│			├──  LoginPage.jsx
│			├──  TransactionCreatePage.jsx
│			├──  TransactionEditPage.jsx
│			└──  TransactionPage.jsx
│   └── services
│			├──  api.js
│			└── axios.js
│   └── App.jsx
│   └── main.jsx
```



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
- A modern web browser (for development/testing)
- dependencies:
	 - "@mantine/core": "^6.0.22",
    - "@mantine/form": "^6.0.22",
    - "@mantine/hooks": "^6.0.22",
    - "@mantine/notifications": "^6.0.22",
    - "@tabler/icons-react": "^2.18.0",
    - "axios": "^1.3.4",
    - "lodash": "^4.17.21",
    - "react": "^18.2.0",
    - "react-dom": "^18.2.0",
    - "react-router-dom": "^6.8.0"

Installation steps:
1. Clone the repository:
   git clone https://github.com/liyang9933/moneymanager.git

2. Navigate to the project directory:
   cd client

3. Install project dependencies:
   npm install

4. Run the application:
   npm run dev
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
