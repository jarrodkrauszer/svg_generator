class Shape {
  constructor() {
    this.color = '';
    console.log('Constructor!!');
  }

 setColor(color) {
  this.color = color;
 }

 render(){
  console.log('Default Render');
 }
}

class Circle extends Shape {
  constructor() {
    super();
  }

  render() {
    return `<circle cx="150" cy="100" r="50" fill="${this.color}" />`
  }
}

class Triangle extends Shape {
  constructor() {
    super();
  }

  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />'`;
  }
}

class Square extends Shape {
  constructor() {
    super();
  }

  render() {
    return `<rect x="50" y="50" width="200" height="100" fill="${this.color}" />`;
  }
}

module.exports = {
  Circle: Circle,
  Triangle: Triangle,
  Square: Square,
};