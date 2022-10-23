# Napptilus test

This SPA emulates a mobile phone store. It consists of two main views: product list and and product detail.

It is part of the selection process for the position of frontend developer at Napptilus.

This app has been developed trying to maintain SOLID principles, a responsive design and BEM methodology.

## Main technologies

- The application has been developed with React js and Vite as a bundle.
- Jest and testing-library for unit test and component tests.
- Cypress for test 2e2.
- react-icons for svg`s icons
- BEM methodology
- Responsive design

### Project structure

```
src
├── api
├── components
├── constants
├── mocks
├── pages
├── services
├── storage
```

## Requirements

### Node.js

Recomended last stable version (LTS) for your OS
[https://nodejs.org/en/download/](https://nodejs.org/en/)

## Getting started

### Clone repo

```
git clone https://github.com/Adriancit0/napptilus-test.git
```

### Move to app root

```
cd napptilus-test
```

### Install dependencies

```
npm install
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:5174](http://localhost:5174) to view it in your browser.

The page will reload when you make changes.\

### `npm run test`

Launches the test runner in the interactive watch mode.\

### `npm run cypress`

Launches the e2e test runner.\

### `npm run lint`

Launches code lint.\

## Deploy

Currently this project is deployed with vercel in [https://napptilus-test.vercel.app/](https://napptilus-test.vercel.app/)
