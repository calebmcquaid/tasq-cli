const fs = require('fs')
const {
    readTaskTextFile
} = require('.')

describe("Read TaskList", () => {
    test("should read a .txt file with tasks", () => {
        fs.readFileSync = jest.fn()

        readTaskTextFile()

        expect(fs.readFileSync).toBeCalledTimes(1)
    })
})