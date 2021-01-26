const inquirer = require('inquirer');
const fs = require('fs');
const { title } = require('process');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your GitHub username',
            name: 'gitUser'
        },
        {
            type: 'input',
            message: 'What is your GitHub email?',
            name: 'gitEmail'
        },
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title'
        },
        {
            type: 'input',
            message: 'Enter a short description of the project',
            name: 'description'
        },
        {
            type: 'list',
            message: 'Which license?',
            choices: [
                'Apache', 'Mozilla', 'MIT'
            ],
            name: 'license'
        },
        {
            type: 'input',
            message: 'What command should be ran to install dependencies?',
            name: 'install'
        },
        {
            type: 'input',
            message: 'What command should be ran to run tests?',
            name: 'test'
        },
        {
            type: 'input',
            message: 'What does the user need to know about using the repo?',
            name: 'usage'
        },
        {
            type: 'input',
            message: 'What does the user need to know about contributing to the repo?',
            name: 'contribute'
        }
    ]).then(response => {
        const { title, description, install, usage, license, gitUser, gitEmail, test, contribute } = response;
        let url = "";
        switch (license) {
            case "Apache":
                url = "https://img.shields.io/badge/License-Apache%202.0-blue.svg";
                break;
            case "Mozilla":
                url = "https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg";
                break;
            case "MIT":
                url = "https://img.shields.io/badge/License-MIT-yellow.svg";
                break;
        }

            const markdown =
                `
![License](${url})

# ${title}

## Description
${description}

## Table Of Contents
*[Installation](#install)
*[Usage](#usage)
*[Contact](#contact)
*[Contributing](#contributing)
*[Tests](#tests)

## Installation
To install the necessary dependencies, run the following command:
\`\`\`md\n${install}\n\`\`\`

## Usage
${usage}

## License
This product is licensed under the ${license} license.

## Tests
To test, run the following command:
\`\`\`md\n${test}\n\`\`\`

## Contributing
${contribute}


## Contact
### GitHub Username
${gitUser}

### GitHub email
${gitEmail}

`;

        fs.writeFile('README.md', markdown, (err) =>
            err ? console.error(err) : console.log('Generating README...'))






    })


