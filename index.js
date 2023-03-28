// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdownGenerate = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
    },
    {
        type: 'input',
        name: 'Description',
        message:'What is your project description?',
    },
    {
        type: 'input',
        name: 'Installation Instructions',
        message:'What are the installation instructions?',
    },
    {
        type: 'input',
        name: 'Usage',
        message:'What is the usage information?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What is the license?',
        choices: ['mit','apache-2.0', 'ncsa', 'gpl', 'none'],
    },
    {
        type: 'input',
        name: 'Contributing',
        message: 'what are the contribution guidelines?',
    },
    {
        type: 'input',
        name: 'Test',
        message: 'What are the test instructions?',
    },
    {
        type: 'input',
        name: 'github',
        message: ' What is your github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(data)
    fs.writeFile(fileName, markdownGenerate(data), (err) =>
        err ? crossOriginIsolated.log(err) : console.log('success'))
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then((answers) => {
        writeToFile('README.md', answers)
    })
    .then(() => console.log('it works'))
    .catch((err) => console.error(err))

}

// Function call to initialize app
init();
