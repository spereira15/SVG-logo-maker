const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./lib/shapes');

// Function to generate the SVG logo
function generateLogo(text, textColor, shape, shapeColor) {
    let shapeElement;
  
    switch (shape) {
      case 'circle':
        shapeElement = new Circle(shapeColor);
        break;
      case 'triangle':
        shapeElement = new Triangle(shapeColor);
        break;
      case 'square':
        shapeElement = new Square(shapeColor);
        break;
      default:
        throw new Error('Invalid shape');
    }
  
    // Create SVG content based on user input
    const svgContent = `
      <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        ${shapeElement.getSVG()}
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="50" fill="${textColor}">${text}</text>
      </svg>
    `;
  
    // Save SVG content to "logo.svg" file
    fs.writeFileSync('logo.svg', svgContent);
  }
  
  // Prompt user using inquirer package
  function promptUser() {
    // Work in progress
  }
  
  // Initialize the app
  promptUser();