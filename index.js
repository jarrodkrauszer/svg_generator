const inquirer = require('inquirer');
const shapes = require('./lib/shapes.js');

const questions = [
  {
    message: 'Please enter the text you would like to add to your SVG logo. (No more than 3 characters)',
    name: 'title',
  },
  {
    type: 'list',
    message: 'How would you like to enter the text color?',
    name: 'textColor',
    choices: ['Color Keyword', 'Hexadecimal']
  },
  {
    message: 'Please enter the color keyword you would like to use for the text color',
    name: 'textKeyword',
    when: (answers) => answers.textColor === 'Color Keyword'
  },
  {
    message: 'Please enter the hexadecimal value you would like to use for the text color',
    name: 'textHex',
    when: (answers) => answers.textColor === 'Hexadecimal'
  },
  {
    type: 'list',
    message: 'Please select a shape:',
    name: 'shape',
    choices: ['Circle', 'Triagnle', 'Square']
  },{
    type: 'list',
    message: 'How would you like to enter the color of the shape?',
    name: 'shapeColor',
    choices: ['Color Keyword', 'Hexadecimal']
  },
  {
    message: 'Please enter the color keyword you would like to use for the text color',
    name: 'shapeKeyword',
    when: (answers) => answers.shapeColor === 'Color Keyword'
  },
  {
    message: 'Please enter the hexadecimal value you would like to use for the text color',
    name: 'textHex',
    when: (answers) => answers.shapeColor === 'Hexadecimal'
  },
];

function startApp() {
  inquirer
  .prompt(questions)
  .then((response) => {
   console.log(response);
  });
}

// startApp();

let circle = new shapes.Circle();
let triangle = new shapes.Triangle();
let square = new shapes.Square();
let logoText = new shapes.LogoText('JMK', 'green');

circle.setColor('blue');
circle.addLogoText(logoText)

console.log(circle);