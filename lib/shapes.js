// Class constructors for shapes with "getSVG" method.
// The "getSVG" method returns our necessary SVG code.
class Circle {
  constructor(color) {
    this.color = color;
  }

  getSVG() {
    return `<circle cx="150" cy="100" r="50" fill="${this.color}" />`;
  }
}

class Triangle {
  constructor(color) {
    this.color = color;
  }

  getSVG() {
    return `
        <polygon points="150,20 50,180 250,180" fill="${this.color}" />
      `;
  }
}

class Square {
  constructor(color) {
    this.color = color;
  }

  getSVG() {
    return `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`;
  }
}

module.exports = { Circle, Triangle, Square };
