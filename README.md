## Run as normal React app. Documentation below Docker sections

#### Node v16 suggested

### If you have trouble running this locally using `npm`, I have included a containerized version using [Docker](https://www.docker.com/)

## Build with Docker

*A note for Unix users: Some of the following commands may require `sudo` depending on how you installed Docker and/or configured your installment. If at all possible, please look up how to configure Docker so `sudo` is not required, as using Docker with elevated privileges is not recommended for new users*

#### Follow these steps to build and run using Docker

1. Install Docker(link above)
2. Clone repository
3. Next, `cd` into `portfolio-site` or whatever you named it locally
4. Run the command `docker build -t <image name>:<tag> .`. This will build a Docker image locally.
5. Once `build` is finished, run with `docker run -it -p 3000:80 <image name>:<tag>`. Once this command hangs and you see the last stdout line of `/docker-entrypoint.sh: Configuration complete; ready for start up`, your Docker container is up and running. You can then access it via the browser at `localhost:3000`

## Development Mode with Docker

#### Follow these steps to run Docker container in development mode with hot reloading.

1. Make sure you have the Docker engine and `docker-compose` binary installed. This comes separate from the Docker engine on Linux. If you installed Docker Desktop for MacOS and Linux, it should've come packaged with Docker. [Link to docs for `docker-compose`](https://docs.docker.com/compose/install/)
2. Clone repo
3. `cd` into `portfolio-site` or whatever you named it locally
4. Next, run the command `docker-compose build`.
5. Finally, run the command `docker-compose up`, and you should see the normal React stdout to the terminal with some additional output from the Docker container preceding each line, but just disregard that. Once you see the 'Compiled successfully' out from React, you can go to your browser and view it at `localhost:3000`

#### In development mode, it will act like a normal React app built with CRA and hot reload any changes you make inside the `src` directory. Changes to any files outside the `src` directory will not be recognized and reload unless you configure the mounted `volumes` section within `app` within `services` in the `docker-compose.yml` config file. If you have any other issues, please consult the [Docker Docs](https://docs.docker.com/)

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
