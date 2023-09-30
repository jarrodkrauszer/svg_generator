class Shape {
  constructor() {
    this.color = '';
    this.logoText = '';
    console.log('Constructor!!');
  }

 setColor(color) {
  this.color = color;
 }

 addLogoText(text) {
  this.logoText = text;
 }

//  render(){
//   return this.xml;
//  }

}

class Circle extends Shape {
  constructor() {
    super();
  }
/* <circle cx="150" cy="100" r="50" fill="blue" /> */
}

class Triangle extends Shape {
  constructor() {
    super();
  }
/* <polygon points="150,50 250,150 50,150" fill="red" /> */
}

class Square extends Shape {
  constructor() {
    super();
  }
/* <rect x="50" y="50" width="200" height="100" fill="green" /> */
}

class LogoText {
  constructor(text, color) {
    this.text = text;
    this.color = color
  }

  // setColor(color) {
  //   this.color = color;
  // }

  // setText(text) {
  //   this.text = text;
  // }
}

module.exports = {
  Circle: Circle,
  Triangle: Triangle,
  Square: Square,
  LogoText: LogoText,
};