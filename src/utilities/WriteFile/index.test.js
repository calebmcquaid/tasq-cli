const fs = require('fs')
const {
    writeTaskTextFile,
    writeCompletedTaskTextFile
} = require('.')

describe("Write taskList", () => {
    test("should write to a .txt file with current tasks", () => {
        fs.writeFileSync = jest.fn()
        const currentTasks = "1. Mow the lawn\n 2. Task"

        writeTaskTextFile(currentTasks)

        expect(fs.writeFileSync).toBeCalledTimes(1) 
    })

    test("should write to a .txt file with completed tasks", () => {
        fs.writeFileSync = jest.fn()
        const completedTask = "1. new task"

        writeCompletedTaskTextFile(completedTask)

        expect(fs.writeFileSync).toBeCalledTimes(1)
    })
})
