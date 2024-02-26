# Web Application Development Repository

Welcome to the Web Application Development repository! This repository serves as a resource for learning web development using various technologies including Node.js, EJS, NPM, React framework, and pm2 for server deployment.

To Be Learnt

* Node.js: Node.js is a powerful JavaScript runtime environment that allows you to build scalable web applications. You'll learn how to set up a Node.js environment, create servers, handle HTTP requests, and more.

* EJS (Embedded JavaScript): EJS is a simple templating language that lets you generate HTML markup with plain JavaScript. You'll learn how to use EJS to dynamically render content on the server-side.

* NPM (Node Package Manager): NPM is the default package manager for Node.js and JavaScript. You'll learn how to use NPM to manage project dependencies, install packages, and run scripts.

* React Framework: React is a popular JavaScript library for building user interfaces. You'll learn how to create interactive and dynamic UI components using React, manage application state, and handle user events.

* pm2: pm2 is a process manager for Node.js applications that allows you to keep your application running in the background and manage it effectively. You'll learn how to use pm2 to start, stop, and monitor Node.js processes, as well as how to deploy your application in live mode.

Getting Started
To get started with this repository, follow these steps:

Clone the repository to your local machine:

https://github.com/JoatXI/WebAppDev.git

Navigate to the project directory:
cd WebAppDev

Install dependencies using NPM:
`npm install`

Start the development server:
`npm start` or install pm2 using: `npm install -g pm2` which installs pm2 globally in your computer. Then use `pm2 start script.mjs --watch` to start the server on live mode.

Open your web browser and visit http://localhost:2024 to view the application.

Project Structure
The repository follows a standard project structure:

WebAppDev/<br>
│<br>
├── public/           # Static assets (images, stylesheets, etc.)<br>
│<br>
├── src/              # Source code<br>
│   ├── components/   # React components<br>
│   ├── views/        # EJS views<br>
│   ├── server.js     # Node.js server file<br>
│<br>
├── package.json      # Project configuration and dependencies<br>
└── README.md         # Project documentation<br>

Happy coding! 🚀
