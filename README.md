# Mocha Test Framework Hooks and Fixtures 
This is a demo testing framework, to understand the various usage of Mocha fixtures and hooks. 
In this framework I have used JavaScript with Selenium WebDriver library to work with web applications. 

## Pre-requisites :

NodeJS
Javascript 
Selenium WebDriver
Mocha
Mochawesome

## Goal/Requirements :
In the Application under test, we have several pages. So in my framework, I will need to add a js file for each page in the application. 
Also, I will need to add a subsequent test js file for each of these page actions.

My requirement is to run all the test cases in parallel. They will be independent of each other.
The webdriver instance will be initiated once. It will be available to the page action classes.
There will be a set up method for each of these pages actions classes in their respective test classes.


## Framework structure :

## What is Mocha?

## What is .mocharc.yaml?

This is a configuration file for running a mocha test framework. It is not absolutely necessary to use a .mocharc.yaml file. We can use those commands directly on the CLI when we run "npm test", using "--" and writing the specific configuration we want to run with.

The .mocharc.yaml file looks like :






