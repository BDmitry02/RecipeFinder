# Recipe Finder App

## Overview

The **Recipe Finder App** is a web application built with **Next.js** that allows users to search for recipes, view the results with detailed information, and explore ingredients and preparation steps for each recipe. The application utilizes the Spoonacular API to fetch recipe data and is styled with **Tailwind CSS**.


## Features

- **Search for Recipes**: Allows users to search for recipes based on query, cuisine, and preparation time.
- **Recipe Results**: Displays a list of recipes with their title and image.
- **Recipe Details**: Clicking on a recipe shows detailed information, including ingredients and preparation steps.
- **Suspense Loading**: Uses Suspense for loading states during data fetching.
- **Error Handling**: Implements error handling for data fetching issues.
- **Responsive Design**: Fully responsive UI using Tailwind CSS.
  
## Getting Started

### Setup

1. Clone this repository:

    ```bash
    git clone https://github.com/BDmitry02/RecipeFinder.git
    ```

2. Install dependencies:

    ```bash
    npm install
    ```


### Running the App

To run the development server, use the following command:

```bash
npm run dev
```

To run the production server, follow these steps:

1. **Build the application**:

    First, build the application to prepare it for production. Run the following command:

    ```bash
    npm run build
    ```

    This command will generate an optimized production build in the `.next` directory.

2. **Start the production server**:

    Once the build is complete, run the following command to start the server:

    ```bash
    npm start
    ```

    This will start the Next.js production server.

3. **Access the application**:

    After starting the production server, open your browser and go to the following URL:

    ```bash
    http://localhost:3000
    ```

    The app should now be running in production mode, serving the optimized build.
