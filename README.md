# Mocha Test Framework Hooks and Fixtures 
This is a demo testing framework, to understand the various usage of Mocha fixtures and hooks. 
In this framework I have used JavaScript with Selenium WebDriver library to work with web applications. 

## Pre-requisites :

## Goal/Requirements :

## Framework structure :

## What is Mocha?

## What is .mocharc.yaml?

This is a configuration file for running a mocha test framework. It is not absolutely necessary to use a .mocharc.yaml file. We can use those commands directly on the CLI when we run "npm test", using "--" and writing the specific configuration we want to run with.

The .mocharc.yaml file looks like :

timeout : '6000'

#reporter: 'spec'

package: './package.json'

parallel: true

recursive: true

reporter : 'mochawesome'

require: 'mochawesome/register'

reporter-option: [

   reportFilename: 'mochawesome-reports',

   quiet: true,

   html: true
   
]





