# Team Profile Generator

## Description

This is a node.js application that generates a team profile HTML page from inputs given through the command line. The user is able to create profiles for a manager, engineer, and intern role with specific info about that employee and their respective role.

## Installation

1) Make sure that you have [node.js](https://nodejs.dev/) installed on your local machine.
2) Clone the repository/download the source files onto your local machine.
3) Navigate to the repository folder in the command line, and run the following to install all dependencies:

``` 
    npm install
```

## Usage

Once installed, you can run the program by navigating to the repository folder in the command line and run:

```
    npm start
```

You will then be prompted in the command line for all the info about the employees you are planning to add. Once you are finished with the prompts, it will generate a HTML and CSS file under the `./dist/` folder with all your employees and their respective information.

A video demonstration of the application can be found [here](https://youtu.be/5dQxCQfJv0E).

## Tests

Tests can be run with Jest by running the following in the command line

```
    npm run test
```

These Jest tests can be found in the `./test` folder for more details.