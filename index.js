const fs = require("fs");
const inquirer = require("inquirer");
const { Circle, Triangle, Square } = require("./lib/shapes");

// Function to generate SVG logo based on input
function generateLogo(text, textColor, shape, shapeColor) {
  let shapeElement;

  switch (shape) {
    case "circle":
      shapeElement = new Circle(shapeColor);
      break;
    case "triangle":
      shapeElement = new Triangle(shapeColor);
      break;
    case "square":
      shapeElement = new Square(shapeColor);
      break;
    default:
      throw new Error("Invalid shape");
  }

  // Create SVG content based on user input
  const svgContent = `
      <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300">
        ${shapeElement.getSVG()}
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="50" fill="${textColor}">${text}</text>
      </svg>
    `;

  // Save SVG content to "logo.svg" file
  fs.writeFileSync("logo.svg", svgContent);
}

// Prompt user using inquirer package
function promptUser() {
  inquirer
    .prompt([
      {
        name: "text",
        message: "Enter the text for the logo (up to three characters):",
        validate: (input) => {
          return input.length > 0 && input.length <= 3;
        },
      },
      {
        name: "textColor",
        message: "Enter the text color:",
      },
      {
        type: "list",
        name: "shape",
        message: "Select a shape:",
        choices: ["circle", "triangle", "square"],
      },
      {
        name: "shapeColor",
        message: "Enter the shape color:",
      },
    ])
    .then((answers) => {
      // Generate the logo based on user input
      generateLogo(
        answers.text,
        answers.textColor,
        answers.shape,
        answers.shapeColor
      );
      console.log("Generated logo.svg");
    })
    .catch((error) => {
      console.error(error);
    });
}

// Initialize the app
promptUser();
