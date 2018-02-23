# traviskosarek.com

This purpose of this project is to help showcase some of my skills as a developer as well as to provide a digital portfolio to share some of the projects I actively contribute to.

## Want to use this as a template for your own website?

Great, feel free to do so! This code is licensed under the MIT license, but I would appreciate a mention that I had originally helped to inspire you to work on your own website. Mentioning my name (Travis Kosarek) would be sufficient, but linking to my website traviskosarek.com is also encouraged!

## Running the code

1. Install [Node](https://nodejs.org/en/)
2. Run `npm install` in the root directory to install all Node dependencies
3. Run `npm start` to start and launch the website

## Build

The `npm start` command does not output files to be hosted on an actual web server. In order to build the application as it would be hosted, execute the command `npm run build`.

To build the application for production, instead execute the command `npm run build:production`.

All build artifacts will be outputted in a `/dist` folder.

## Linting

Ensuring that code stays uniform is important to keeping a clean, easily navigatable project. To keep my code clean I use TSLint to valiadate my project during the build process.

To run the linting service, execute the `npm run lint` command.

## Running unit tests

To run unit tests within the project, execute the command `npm run test`. The tests will run via the [Karma Test Runner](https://karma-runner.github.io).

## Running end-to-end tests

I currently do not have any end-to-end tests on this project, but soon will be creating these!

In order to run functional tests, execute the `npm run e2e` command to run the tests via [Protractor](http://www.protractortest.org/).

## Special Mentions

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.8. I encourage you to go check out the Angular CLI project, it is a really awesome way to get started developing in Angular
