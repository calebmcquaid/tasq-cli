const nixt = require('nixt')

describe("Todo E2E", () => {
    test("should run an end to end testw", (callback) => {
        nixt()
        .run("node ./index.js")
        .stdout("Welcome to the tasklist! Here's what you can do:\n1. Add a task\n\nPress a number to continue:")
        .end(callback)
    })
})