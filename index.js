// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdownGenerate = require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Project Title',
        message: 'What is your project title?',
    },
    {
        type: 'input',
        name: 'Project Description',
        message:'What is your project description?',
    },
    {
        type: 'input',
        name: 'Installation Instructions',
        message:'What are the installation instructions?',
    },
    {
        type: 'input',
        name: 'Usage Information',
        message:'What is the usage information?',
    },
    {
        type: 'input',
        name: 'License',
        message: 'What is the license?',
    },
    {
        type: 'input',
        name: 'Contribution Guidelines',
        message: 'what are the contribution guidelines?',
    },
    {
        type: 'input',
        name: 'Test Instructions',
        message: 'What are the test instructions',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return inquirer.createPromptModule()
}

// TODO: Create a function to initialize app
function init() {
    writeToFile()
}

// Function call to initialize app
init();
