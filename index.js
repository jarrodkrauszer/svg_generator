const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shapes.js');
const SVG = require('./lib/SVG.js');
const LogoText = require('./lib/LogoText.js');

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
    choices: ['Circle', 'Triangle', 'Square']
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

let circle = new Circle();
let triangle = new Triangle();
let square = new Square();
let textEl = new LogoText('JMK', 'blue');
let logo = new SVG(triangle, textEl);

triangle.setColor('blue');

function writeFile() {
  fs.writeFile('./logo.svg', logo.render(), (err) => {
    if(err) throw err;
  
    console.log('File created successfully!');
  });
}

writeFile();

