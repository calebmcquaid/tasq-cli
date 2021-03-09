const fs = require('fs')

const {
    writeTaskTextFile
} = require('.')

describe("Share TaskList", () => {

    test("should create a .txt file with tasks", () => {
        fs.writeFile = jest.fn()
        const currentTasks = ["1. Mow the lawn", "2. Todo"]

        writeTaskTextFile(currentTasks)

        expect(fs.writeFile).toBeCalledTimes(1) 
    })
})