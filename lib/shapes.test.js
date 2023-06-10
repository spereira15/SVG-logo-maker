const { Circle, Triangle, Square } = require('./shapes');

describe('Circle', () => {
  test('generates correct SVG for Circle', () => {
    const circle = new Circle('red');
    expect(circle.getSVG()).toEqual('<circle cx="150" cy="100" r="50" fill="red" />');
  });
});

describe('Triangle', () => {
  test('generates correct SVG for Triangle', () => {
    const triangle = new Triangle('blue');
    expect(triangle.getSVG()).toEqual('<polygon points="150,20 50,180 250,180" fill="blue" />');
  });
});

describe('Square', () => {
  test('generates correct SVG for Square', () => {
    const square = new Square('green');
    expect(square.getSVG()).toEqual('<rect x="50" y="50" width="200" height="200" fill="green" />');
  });
});