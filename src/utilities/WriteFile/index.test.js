const fs = require('fs')
const {
    writeTaskTextFile
} = require('.')

describe("Write taskList", () => {
    test("should write to a .txt file with current tasks", () => {
        fs.writeFileSync = jest.fn()
        const currentTasks = "1. Mow the lawn\n 2. Task"

        writeTaskTextFile(currentTasks)

        expect(fs.writeFileSync).toBeCalledTimes(1) 
    })
})
