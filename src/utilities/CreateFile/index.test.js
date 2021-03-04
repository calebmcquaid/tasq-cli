const fs = require('fs')

const {
    createTaskTextFile
} = require('.')

describe("Share TaskList", () => {


    test("should create a .txt file with tasks", () => {
        fs.writeFile = jest.fn()
        const currentTasks = ["1. Mow the lawn", "2. Todo"]
        const expectedSuccess = "File created successfully"

        createTaskTextFile(currentTasks)

        expect(fs.writeFile).toBeCalledTimes(1) 
    })
})