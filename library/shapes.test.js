const { Square, Circle, Triangle } = require('./shapes');


describe('Shape', () => {
  test('Square should render correctly', () => {
    const shape = new Square("red", "blue", "red");
    expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect x="50" y="20" width="150" height="150" fill='red' />
      <text x="125" y="125" font-size="60" text-anchor="middle" fill='blue'>red</text>
    </svg>`)
  })
});

describe('Shape', () => {
  test('Circle should render correctly', () => {
    const shape = new Circle("ten", "black", "green");
    expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="100" r="80" fill='green' />
      <text x="150" y="125" font-size="60" text-anchor="middle" fill='black'>ten</text>
    </svg>`)
  })
});

describe('Shape', () => {
  test('Triangle should render correctly', () => {
    const shape = new Triangle("tri", "pink", "black");
    expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <polygon points="150, 18 244, 182 56, 182" fill='black' />
      <text x="150" y="125" font-size="60" text-anchor="middle" fill='pink'>tri</text>
    </svg>`)
  })
});
