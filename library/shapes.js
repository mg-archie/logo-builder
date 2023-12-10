//to render squares
class Square {
  constructor(logoText, textCol, shapeCol) {
    this.logoText = logoText;
    this.textCol = textCol;
    this.shapeCol = shapeCol;
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect x="50" y="20" width="150" height="150" fill='${this.shapeCol}' />
      <text x="125" y="125" font-size="60" text-anchor="middle" fill='${this.textCol}'>${this.logoText}</text>
    </svg>`
  }
}
//to render circles
class Circle {
  constructor(logoText, textCol, shapeCol) {
    this.logoText = logoText;
    this.textCol = textCol;
    this.shapeCol = shapeCol;
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="100" r="80" fill='${this.shapeCol}' />
      <text x="150" y="125" font-size="60" text-anchor="middle" fill='${this.textCol}'>${this.logoText}</text>
    </svg>`
  }
}
//to render triangles
class Triangle {
  constructor(logoText, textCol, shapeCol) {
    this.logoText = logoText;
    this.textCol = textCol;
    this.shapeCol = shapeCol;
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <polygon points="150, 18 244, 182 56, 182" fill='${this.shapeCol}' />
      <text x="150" y="125" font-size="60" text-anchor="middle" fill='${this.textCol}'>${this.logoText}</text>
    </svg>`
  }
}
//creates instance of new shape classes and renders with users input
function renderLogoShape(answers) {
  if (answers.logoShape === 'Square') {
    const square = new Square(answers.logoText, answers.textCol, answers.shapeCol);
    return square.render();
  } else if (answers.logoShape === 'Circle') {
    const circle = new Circle(answers.logoText, answers.textCol, answers.shapeCol);
    return circle.render();
  } else if (answers.logoShape === 'Triangle') {
    const triangle = new Triangle(answers.logoText, answers.textCol, answers.shapeCol);
    return triangle.render();
  }
}

module.exports = { renderLogoShape, Triangle, Square, Circle };