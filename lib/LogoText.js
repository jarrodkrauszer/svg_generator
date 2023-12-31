class LogoText {
  constructor() {
    this.text = '';
    this.color = '';
  }

  setColor(color) {
    this.color = color;
  }

  setText(text) {
    this.text = text;
  }

  render() {
    return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>`;
  }
}

module.exports = LogoText;