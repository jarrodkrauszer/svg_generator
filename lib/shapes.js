class Shape {
  constructor() {
    this.color = '';
    this.logoText = '';
    console.log('Constructor!!');
  }

 setColor(color) {
  this.color = color;
 }

 setText(text) {
  this.logoText = text;
 }

}

class Circle extends Shape {
  constructor() {
    super();
  }

  render(){

  }
}

class Triangle extends Shape {
  constructor() {
    super();
  }

  render() {

  }
}

class Square extends Shape {
  constructor() {
    super();
  }

  render() {

  }
}

class LogoText {
  constructor(text, color) {
    this.text = text;
    this.color = color
  }
}

module.exports = {
  Circle: Circle,
  Triangle: Triangle,
  Square: Square,
};