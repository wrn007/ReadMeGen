// packages included
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// Question Array
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'Enter the project title:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a project description:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your project:',
      choices: ['MIT', 'Apache 2.0'],
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Provide installation instructions:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide usage information:',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Provide contribution guidelines:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Provide test instructions:',
    },
    {
      type: 'input',
      name: 'username',
      message: 'Enter your GitHub username:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:',
      validate: function (email) {
        // validate email
        const emailRegex = /\S+@\S+\.\S+/;
        return emailRegex.test(email) ? true : 'Please enter a valid email address';
      },
    },
  ];

// Write Readme File
function writeToFile(fileName, data) {
  const readmeContent = generateMarkdown(data);
  fs.writeFileSync(fileName, readmeContent);
  console.log('README.md generated successfully!');
}

// Initialize app
function init() {
  inquirer.prompt(questions)
    .then((answers) => {
      const fileName = 'README.md';
      writeToFile(fileName, answers);
    })
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
