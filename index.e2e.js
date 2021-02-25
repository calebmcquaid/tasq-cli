const path = require('path');
const assert = require('assert');
const readline = require('readline');
const nixt = require('nixt');
const { getUserInput } = require('.');
const { stdout } = require('process');

jest.mock("readline");
describe.only("program", () => {
    it.only("should run the application", (fn) => {
        nixt()
        .run('node index.js')
        .stdout("Welcome to the tasklist! Here's what you can do:\n1. Add a task\n\nPress a number to continue:")
        .end(fn);

     });
 });