// class Shape {
//   constructor(logoText, textCol, logoShape, shapeCol) {
//     this.logoText = logoText;
//     this.textCol = textCol;
//     this.logoShape = logoShape;
//     this.shapeCol = shapeCol;
//   }
// }

// class Triangle extends Shape {
//   constructor(logoText, textCol, logoShape, shapeCol) {
//     super(logoText, textCol, logoShape, shapeCol);
//   }
// }

// class Square extends Shape {
//   constructor(logoText, textCol, logoShape, shapeCol) {
//     super(logoText, textCol, logoShape, shapeCol);
//   }
// }

// class Circle extends Shape {
//   constructor(logoText, textCol, logoShape, shapeCol) {
//     super(logoText, textCol, logoShape, shapeCol);
//   }
// }

// function renderText(logoText) {
// }

function renderTextCol(textCol) {
}

function renderLogoShape(answers) {
  if (answers.logoShape === 'Square') {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect x="50" y="20" width="150" height="150" fill='${answers.shapeCol}' />
      <text x="125" y="125" font-size="60" text-anchor="middle" fill='${answers.textCol}'>${answers.logoText}</text>
    </svg>`
  } else if (answers.logoShape === 'Circle') {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="100" r="80" fill='${answers.shapeCol}' />
      <text x="150" y="125" font-size="60" text-anchor="middle" fill='${answers.textCol}'>${answers.logoText}</text>
    </svg>`
  } else if (answers.logoShape === 'Triangle') { //need to format shape
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <polygon points="150, 18 244, 182 56, 182" fill='${answers.shapeCol}' />
      <text x="150" y="125" font-size="60" text-anchor="middle" fill='${answers.textCol}'>${answers.logoText}</text>
    </svg>`
  }
}

// function renderShapeCol(shapeCol) {

// }

// function generateSvg(answers) {
//   const renderText = renderText(answers.logoText);
//   const renderTextCol = renderTextCol(answers.textCol);
//   const renderLogoShape = renderLogoShape(answers.logoShape);
//   const renderShapeCol = renderShapeCol(answers.shapeCol);
// }

module.exports = renderLogoShape;