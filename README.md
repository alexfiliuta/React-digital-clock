# React Digital Clock

A simple digital clock application built with React and Vite.

## Table of Contents

- [Demo](#demo)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [License](#license)

## Demo

You can view the live demo of the project [here](http://alexfiliuta.github.io/React-digital-clock).

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/alexfiliuta/react-digital-clock.git
    cd react-digital-clock
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Run the development server:**

    ```bash
    npm run dev
    ```

4. **Open the app in your browser:**

    The app will typically run at `http://localhost:5173`.

## Project Structure

Here's an overview of the project's file structure:
- `resources` : A folder containing the available images.
- `index.html`: The main HTML file.
- `main.jsx`: The entry point for the React application.
- `App.jsx`: The main component that contains the application logic.
- `DigitalClock.jsx`: Component that manages and displays the clock.
- `RandomBackground.jsx` : Component that displays a random           background from the list of images in the resource folder. 
- `vite.config.js`: Configuration file for Vite.
- `eslint.config.js`: ESLint configuration for the project.
- `package.json`: Contains the project metadata and scripts.
- `.gitignore`: Specifies which files and directories to ignore in version control.

## Scripts

In the `package.json` file, the following scripts are defined:

- **`npm run dev`**: Starts the development server.
- **`npm run build`**: Builds the project for production.
- **`npm run lint`**: Runs ESLint to analyze the code.
- **`npm run preview`**: Previews the production build.
- **`npm run deploy`**: Deploys the project to GitHub Pages.

## Dependencies

The project uses the following dependencies:

- **React**: A JavaScript library for building user interfaces.
- **React-DOM**: Provides DOM-specific methods that can be used at the top level of a web app.
- **Vite**: A fast build tool and development server.
- **ESLint**: A tool for identifying and fixing problems in your JavaScript code.

## License

This project is licensed under the MIT License.
