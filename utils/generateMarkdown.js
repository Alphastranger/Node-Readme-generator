// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license.badge != null){
    return `${license.badge}`
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license.link != null){
    return `${license.link}`
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license.section != null){
    return `${license.section}`
  } else {
    return ""
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} \n
  ${renderLicenseBadge}
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
  ${renderLicenseSection}
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

