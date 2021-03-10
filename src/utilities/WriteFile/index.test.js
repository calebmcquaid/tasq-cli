const fs = require('fs')
const {
    writeTaskTextFile,
    trimNumbers
} = require('.')

describe("Write taskList", () => {
    test("should write to a .txt file with tasks", () => {
        fs.writeFile = jest.fn()
        const currentTasks = "1. Mow the lawn\n 2. Todo"

        writeTaskTextFile(currentTasks)

        expect(fs.writeFile).toBeCalledTimes(1) 
    })
})

describe("Trim tasks", () => {
    test("should trim tasks before being written to text file", () => {
        const tasks = "1. task 1\n2. task 2\n3. task 3\n"
        const trimmedTasks = ["task 1", "task 2", "task 3", ""]

        const screen = trimNumbers(tasks)

        expect(screen).toStrictEqual(trimmedTasks)
    })
})
