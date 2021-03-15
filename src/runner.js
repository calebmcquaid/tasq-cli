#! /usr/bin/env node
const { navigation } = require(".")
const argv = require('yargs/yargs')(process.argv.slice(2)).help().argv;

console.log(navigation(argv))