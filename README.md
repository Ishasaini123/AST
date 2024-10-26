# Rule Engine with Abstract Syntax Tree (AST)

This project implements a simple 3-tier rule engine application to determine user eligibility based on attributes like age, department, income, and experience. It utilizes an Abstract Syntax Tree (AST) for dynamic rule creation, combination, and evaluation.

## Features
- Create individual eligibility rules from simple string expressions.
- Combine multiple rules into a single AST for efficient evaluation.
- Evaluate the combined rules against user data.
- Robust error handling for invalid rules and data formats.
- Support for logical operators (`&&`, `||`).

## Technologies Used
- **Node.js**: Backend runtime environment.
- **MySQL**: For future database integration.
- **Acorn**: A JavaScript library for parsing rule strings into an AST.

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd rule-engine
Install Dependencies Ensure you have Node.js installed, then run:
npm install acorn

To run the application, execute the following command:
node src/main.js
Sample Rules
You can modify the sample rules in main.js to test different eligibility scenarios:
const rules = [
  "((age > 30 && department === 'Sales') || (age < 25 && department === 'Marketing')) && (salary > 50000 || experience > 5)",
  "((age > 30 && department === 'Marketing')) && (salary > 20000 || experience > 5)"
];
