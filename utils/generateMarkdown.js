// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'none') {
    return `![GitHub badge](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return ``
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'none'){
    return `![Github link]((https://opensource.org/licenses/${license})`
  }
    return ``
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none'){
    return `This README is covered under the ${license} license!`
  }
    return ""
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data.license)
  return `# ${data.title} \n
  ${renderLicenseBadge(data.license)}
  ## Table of Contents\n
  \n1.[Description](#description)
  \n2.[Usage](#usage)
  \n3.[License](#license)
  \n4.[Contributing](#contributing)
  \n5.[Tests](#tests)
  \n6.[Questions](#questions)
  \n ## Description
  ${data.Description}\n
  ## Usage
  ${data.Usage}\n
  ## License
  ${renderLicenseSection(data.license)}\n
  ${renderLicenseLink(data.license)}
  ## Contributing
  ${data.Contributing}\n
  ## Tests
  ${data.Test}\n
  ## Questions
  Your github: [${data.github}](github.com/${data.github})\n
  Your email: ${data.email}\n
  To reach me with additional questions, please email me at [gmail](abjosammag@gmail.com)`
}
module.exports = generateMarkdown;

