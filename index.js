const inquirer = require('inquirer');
const colors = require('colors');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shapes.js');
const SVG = require('./lib/SVG.js');
const LogoText = require('./lib/LogoText.js');

const questions = [
  {
    message: 'Please enter the text you would like to add to your SVG logo. (No more than 3 characters)'.cyan,
    name: 'text',
  },
  {
    type: 'list',
    message: 'How would you like to enter the text color?'.cyan,
    name: 'textColor',
    choices: ['Color Keyword', 'Hexadecimal']
  },
  {
    message: 'Please enter the color keyword you would like to use for the text color'.cyan,
    name: 'textKeyword',
    when: (answers) => answers.textColor === 'Color Keyword'
  },
  {
    message: 'Please enter the hexadecimal value including the # you would like to use for the text color'.cyan,
    name: 'textHex',
    when: (answers) => answers.textColor === 'Hexadecimal'
  },
  {
    type: 'list',
    message: 'Please select a shape:'.cyan,
    name: 'shape',
    choices: ['Circle', 'Triangle', 'Square']
  },{
    type: 'list',
    message: 'How would you like to enter the color of the shape?'.cyan,
    name: 'shapeColor',
    choices: ['Color Keyword', 'Hexadecimal']
  },
  {
    message: 'Please enter the color keyword you would like to use for the color of the shape'.cyan,
    name: 'shapeKeyword',
    when: (answers) => answers.shapeColor === 'Color Keyword'
  },
  {
    message: 'Please enter the hexadecimal value including the # you would like to use for the color of the shape'.cyan,
    name: 'shadeHex',
    when: (answers) => answers.shapeColor === 'Hexadecimal'
  },
];

function writeFile(data) {
  fs.writeFile('./examples/logo.svg', data, (err) => {
    if(err) throw err;
  
    console.log('Generated logo.svg!');
  });
}

function startApp() {
  inquirer
  .prompt(questions)
  .then((response) => {
    let shape;
    const logoText = new LogoText();
   
    logoText.setText(response.text.substr(0, 3));

    switch (response.textColor) {
      case 'Color Keyword':
        logoText.setColor(response.textKeyword);
        break;
      case 'Hexadecimal':
        logoText.setColor(response.textHex);
        break;
    }
    
    switch (response.shape) {
      case 'Circle':
        shape = new Circle();
        break;
      case 'Triangle':
        shape = new Triangle();
        break;
      case 'Square':
        shape = new Square();
        break;
    }

    switch (response.shapeColor) {
      case 'Color Keyword':
        shape.setColor(response.shapeKeyword);
        break;
      case 'Hexadecimal':
        shape.setColor(response.shapeHex);
        break;
    }

    const svg = new SVG(shape, logoText);
    writeFile(svg.render());
  });
}

startApp();



