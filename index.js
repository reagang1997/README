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
                'Apache', 'Mozilla', 'MIT'
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
        const inputs = [];
        fsTitle = `# ${title}\n`;
        inputs.push(fsTitle);
        fsDescription = `## Description\n${description}\n`;
        inputs.push(fsDescription);
        fsInstall = `## How To Install\n \`\`\`md\n${install}\n\`\`\`\n`;
        inputs.push(fsInstall);
        fsUsage = `## How To Run\n \`\`\`md\n${usage}\n\`\`\`\n`
        inputs.push(fsUsage);

        inputs.forEach(input => {
            fs.appendFile('README.md',input , (err) =>
            err ? console.error(err) : console.log('Success!') )
        })
        
        
        // fs.appendFile('README.md',fsDescription , (err) =>
        //     err ? console.error(err) : console.log('Success!') )
        // fs.appendFile('README.md',fsInstall , (err) =>
        //     err ? console.error(err) : console.log('Success!') )
        // fs.appendFile('README.md',fsUsage , (err) =>
        //     err ? console.error(err) : console.log('Success!') )
    })


