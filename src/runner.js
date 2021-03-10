const { navigation } = require(".")
const argv = require('yargs/yargs')(process.argv.slice(2)).argv;

navigation(argv)