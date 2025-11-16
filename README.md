# Workflow

This project was designed for the purpose of learning about TDD (test-driven development) and therefore includes both unit and end-to-end tests.

## Features

- Unit tests using Vitest
- End-to-end (e2e) tests with Playwright
- Library management with NPM
- Use of environment variables for individual configuration
- Linting with prettier and husky (for pre-commit hooks)

## Prerequisites

- Node.js (v20+)
- npm
- Computer + Editor of choice (e.g., VSCode, WebStorm, etc)

## Getting Started

### Installation

#### Clone the repo:

Install the github CLI and run the following to clone the repo:

```shell
gh repo clone Kateve52911/workflow-repo-ca
```

Afterwards, we need to install the packages using the Node Package Manager (NPM).

```shell
npm install
```

### Environment Variables

Create a .env file in the root directory, see the .env.example file for an example.

```
TEST_USER_EMAIL=workflowuser@stud.noroff.no
TEST_USER_PASSWORD=workflowpass
```

### Running the project

Assuming you are using VS Code, you will need to ensure the Live Server plugin is installed. Then, assuming all the steps above have worked, then run/initialise the project as follows:

```
npm run dev
```

### Running tests

In this project, there are two kinds of tests: unit tests and end-to-end (e2e) tests. To run each of these respectively, run the following commands:

```shell
npm test
npx playwright test --headed
```

There are actually many ways to run the playwright (e2e) tests. For example:

```shell
npx playwright test tests/e2e/listeners/auth  # run a single test
npx playwright test --last-failed  # run last failed tests
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run test` - Run tests
- `npm run lint` - Run ESLint

## Technologies

- JavaScript
- HTML
- CSS
- ESLint
- Prettier
- Playwright
- Vitest

## Author

Kathrine Mellem Evensen
