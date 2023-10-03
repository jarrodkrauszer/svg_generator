const { Circle, Square, Triangle } = require('./shapes');

describe('Test all 3 shapes', () => {
  it('Creates a Triangle', () => {
    const triangle = new Triangle();
    triangle.setColor("blue");

    expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
  });

  it('Creates a Circle', () => {
    const circle = new Circle();
    circle.setColor("red");

    expect(circle.render()).toEqual('<circle cx="150" cy="100" r="50" fill="red" />');
  });

  it('Creates a Square', () => {
    const square = new Square();
    square.setColor("green");

    expect(square.render()).toEqual('<rect x="50" y="50" width="200" height="100" fill="green" />');
  });
});