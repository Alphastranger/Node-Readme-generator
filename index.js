// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdownGenerate = require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Title',
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
        type: 'input',
        name: 'License',
        message: 'What is the license?',
    },
    {
        type: 'input',
        name: 'Contributing',
        message: 'what are the contribution guidelines?',
    },
    {
        type: 'input',
        name: 'Test',
        message: 'What are the test instructions',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return inquirer.createPromptModule()
    fs.writeFile ('README.md',
    `# ${fileName}

    ## Description
    ${data.Description}
    ## Usage
    ${data.Usage}
    ## Contributing
    ${data.Contributing}
    ## Tests
    ${data.Test}
    `, (err) =>
    err ? console.error(err): console.log('Success'))
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)

}

// Function call to initialize app
init();
