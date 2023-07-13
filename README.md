# Three.js Learning Project

This is a readme file for a project where you can learn about Three.js, a JavaScript library for creating and displaying 3D computer graphics on the web. This project includes a basic setup for creating a 3D scene with a sphere, light, camera, and controls. It also demonstrates how to animate the sphere and interact with it using the mouse.

## Getting Started

To run this project, you need to have a basic understanding of JavaScript and web development. Follow the steps below to set up and run the project on your local machine:

1. Clone the project repository:

```bash
git clone <repository-url>
```

2. Open the project directory:

```bash
cd three-js-learning-project
```

3. Install the project dependencies using a npm

```bash
npm install
```

4. Build the project:

```bash
npm run build
```

5. Open the `index.html` file in a web browser to see the 3D sphere and interact with it using the mouse.

## Project Structure

The project structure is as follows:

- `index.html`: The main HTML file that contains the canvas element and links to the required JavaScript and CSS files.
- `style.css`: The CSS file that defines the styles for the HTML elements.
- `main.js`: The JavaScript file that sets up the Three.js scene, creates the sphere, adds light and camera, and handles the mouse interactions and animations.

## Dependencies

This project relies on the following dependencies:

- Three.js: A JavaScript library that provides an API for creating and rendering 3D graphics.
- OrbitControls: A module from the Three.js examples that allows for easy camera control in the 3D scene.
- gsap: A popular animation library that is used for animating the sphere and other elements in the scene.

These dependencies are managed using a package manager and included in the project's `package.json` file.

## Usage

Once you have set up the project and opened the `index.html` file in a web browser, you can interact with the 3D sphere in the following ways:

- Move the mouse over the sphere while holding down the mouse button to change its color. The sphere's color will be updated based on the position of the mouse cursor on the screen.

## Additional Resources

To learn more about Three.js and explore its capabilities, you can refer to the official documentation and resources:

- [Three.js Documentation](https://threejs.org/docs/)
- [Three.js Examples](https://threejs.org/examples/)
- [Three.js GitHub Repository](https://github.com/mrdoob/three.js/)
