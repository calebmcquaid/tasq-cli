const fs = require('fs')

const {
    displayCurrentTasks,
} = require('.')

describe("Current Tasks", () => {
    test("should display current tasks", () => {
        fs.readFileSync = jest.fn()

        displayCurrentTasks()

        expect(fs.readFileSync).toBeCalledTimes(1)
    })
})