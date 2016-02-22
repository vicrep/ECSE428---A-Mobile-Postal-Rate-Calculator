# ECSE 428 - A Mobile Postal Rate Calculator


## Setup
Prerequisite: Install [NodeJS](https://nodejs.org/en/download/)

1. Install the Ionic Beta CLI: `npm install -g ionic@beta cordova` 
2. Pull this repository
3. From the repository's local directory, run `npm install`
4. To test out the app in your browser, run `ionic serve --lab`

## Unit Testing

This app implements TDD through [Jasmine Unit Testing](http://jasmine.github.io/edge/introduction.html). 
This is installed automatically when you perform the setup as shown above.

The unit testing spec file is present at [/app/unit-test.spec.js](/app/unit-test.spec.js).
All unit tests are written in this file, and are rendered by Jasmine.

To run the test, simply run `npm test`. A live-reloading browser window will open up with the unit tests.

## Running the app on your device
1. We have already made builds of the application for both iOS and Android for your convenience.
2. Android:
    1. Ensure that your Android is configured to allow installations from unknown sources (this is usually found in settings -> security -> allow unknown sources)
    2. Download and install the APK from [the latest release of the app](https://github.com/vicrep/ECSE428---A-Mobile-Postal-Rate-Calculator/releases)
3. iOS:
    1. Make sure you have xCode and all other necessary development tools installed on your mac
    2. You can find the xCode project for this app at [/platforms/ios](/platforms/ios]
    3. Open the project, and run the app from an emulator or your phone (top-right toolbar), if your environment is configured to do so

