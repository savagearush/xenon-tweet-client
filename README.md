# Xenon Tweet Client

Xenon Tweet Client is a React web application that allows users to view and interact with tweets from various sources. It uses Vite as a build tool and is deployed on Vercel.

## How to use it

- First user have to click Register Button then he has to register himself.
- if He already had a account he can directly log in via login button
- then after signup/login he will be redirected to blank home page where he can go to contact us page and fill details and those detail will be saved to mongodb database.

## Technologies used

- React: A JavaScript library for building user interfaces
- Vite: A fast and lightweight frontend tooling
- Axios: A promise-based HTTP client for the browser and node.js
- React Query: A library for fetching, caching and updating data in React applications
- React Router: A collection of navigational components for React
- CSS: uses CSS for styling
- Responsive : It is also fully responsive to mobile phones and laptop/pc.
- ... [other technologies]

## Setup

To run this project locally, follow these steps:

1. Clone the repository and navigate to the project folder
2. Install the dependencies using `npm install` or `yarn install`
3. Start the development server using `npm run dev` or `yarn dev`
4. Open http://localhost:3000 to view the app in the browser

## Available commands

- `npm run dev` or `yarn dev`: Start the app locally in your development environment
- `npm run build` or `yarn build`: Build the app for production
- `npm run serve` or `yarn serve`: Serve the production build locally
- `npm run test` or `yarn test`: Run tests using Jest and React Testing Library
- `npm run lint` or `yarn lint`: Run ESLint and Prettier on the codebase
- ... [add other commands here]

## Development flow

Here are the steps of the process you need to follow in order to integrate new code or a new feature into the project:

1. Create a new branch from the `main` branch using the following naming convention: `<feature|bug|enhancement|doc>/<short-description>`. For example: `feature/add-search-bar`
2. Develop the new feature while doing atomic commits to your branch using `git commit`
3. After you are done, push your changes to the remote repository using `git push -u origin <your-branch-name>`
4. Create a pull request from your branch to the `main` branch and request a code review
5. After the pull request is approved, merge it using the UI on GitHub
6. Your code will be automatically deployed to Vercel after the merge

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Developed By - Arush Sharma
