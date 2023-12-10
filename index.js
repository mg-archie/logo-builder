// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { renderLogoShape } = require('./library/shapes');


const questions = [
  {
    type: 'input',
    message: 'Enter three character logo text',
    name: 'logoText',
  },
  {
    type: 'input',
    message: 'Enter text colour',
    name: 'textCol',
  },
  {
    type: 'list',
    message: 'Select logo shape',
    choices: ['Square', 'Circle', 'Triangle'],
    name: 'logoShape'
  },
  {
    type: 'input',
    message: 'Colour your shape',
    name: 'shapeCol',
  },
];

inquirer.prompt(questions).then(answers => {
  const fileSvg = renderLogoShape(answers);
  fs.writeFile('logo.svg', fileSvg, function (err) {
    if (err) 
      console.log(err)
  })
  console.log("Generated logo.svg");
})