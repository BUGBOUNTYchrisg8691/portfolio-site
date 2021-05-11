# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --force
RUN npm install -g react-scripts@3.4.1
RUN npm install -g @craco/craco@^5.9.0
RUN npm install -g @ant-design/icons@^4.6.2
RUN npm install -g @craco/craco@^5.9.0
RUN npm install -g @fortawesome/fontawesome-svg-core@^1.2.35
RUN npm install -g @fortawesome/free-brands-svg-icons@^5.15.3
RUN npm install -g @fortawesome/free-regular-svg-icons@^5.15.3
RUN npm install -g @fortawesome/free-solid-svg-icons@^5.15.3
RUN npm install -g @fortawesome/react-fontawesome@^0.1.14
RUN npm install -g antd@^4.15.4
RUN npm install -g craco-antd@^1.19.0
RUN npm install -g craco-less@^1.17.0
RUN npm install -g react@^17.0.2
RUN npm install -g react-dom@^17.0.2
RUN npm install -g react-router@^5.2.0
RUN npm install -g react-router-dom@^5.2.0
RUN npm install -g web-vitals@^1.1.2
RUN npm install -g @testing-library/jest-dom@^5.12.0
RUN npm install -g @testing-library/react@^11.2.6
RUN npm install -g @testing-library/user-event@^12.8.3
RUN npm install -g cz-conventional-changelog@^3.3.0
RUN npm install -g eslint-plugin-react-hooks@^1.7.0
RUN npm install -g husky@^6.0.0
RUN npm install -g lint-staged@^10.5.4
RUN npm install -g prettier-eslint-cli@^5.0.1

# add app
COPY . ./

# start app
CMD ["npm", "start"]
