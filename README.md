# Playwright Automation Project

This project contains automated tests for the **TestDino application** using **Playwright** with JavaScript. Tests are organized in a step-by-step format, using locators stored in a separate folder for better maintainability.  

---

## Requirements

Before running the tests, ensure you have the following installed:  

1. **Node.js** (v18 or higher) – [Download Node.js](https://nodejs.org/)  
2. **npm** (comes with Node.js)  
3. **Playwright** (installed via npm)  

Optional but recommended:  
- VS Code or any code editor  
- Git (for version control)  

---

## Installation

1. Clone the repository:  
```bash
git clone <repository-url>
cd <project-folder>

2. Install dependencies:    
npm install
npx playwright install


# Running Tests
--------------------
1. Run all tests
npx playwright test

2️. Run a specific test file
npx playwright test tests/login.spec.js

3️. Run a specific test with its name
npx playwright test -g "Login to TestDino (step-by-step)"

4️. Run tests in headed mode (see browser UI)
npx playwright test --headed

5️. Generate HTML report after test run
npx playwright show-report