class SVG {
  constructor(shape, text) {
    this.shape = shape;
    this.text = text;
  }

  render() {
    return `
    <svg version="1.1"
      width="300" height="200"
      xmlns="http://www.w3.org/2000/svg">

      ${this.shape.render()}

      ${this.text.render()}

    </svg>`;
  }
}

module.exports = SVG;