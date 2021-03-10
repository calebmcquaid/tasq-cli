const fs = require('fs')
const {
    readCurrentTaskTextFile
} = require('.')

describe("Read TaskList", () => {
    test("should read a .txt file with tasks", () => {
        fs.readFileSync = jest.fn()

        readCurrentTaskTextFile()

        expect(fs.readFileSync).toBeCalledTimes(1)
    })
})