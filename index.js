const inquirer = require('inquirer');
const fs = require('fs');
const { title } = require('process');

inquirer
    .prompt([
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
            type: 'input',
            message: 'What to do to instal?',
            name: 'install'
        },
        {
            type: 'input',
            message: 'What command to run?',
            name: 'usage'
        },
        {
            type: 'list',
            message: 'Which license?',
            choices: [
                'idk', 'any licenses'
            ],
            name: 'license'
        },
        {
            type: 'input',
            message: 'What is your GitHub username',
            name: 'gitUser'
        },
        {
            type: 'input',
            message: 'What is your GitHub email?',
            name: 'gitEmail'
        }
    ]).then(response => {
        console.log(response);
        const {title, description, install, usage, license, gitUser, gitEmail} = response;

        fsTitle = `# ${title}\n`;
        fsDescription = `## Description\n${description}`;
        
        fs.appendFile('README.md',fsTitle , (err) =>
            err ? console.error(err) : console.log('Success!') )
        fs.appendFile('README.md',fsDescription , (err) =>
        err ? console.error(err) : console.log('Success!') )
    })


