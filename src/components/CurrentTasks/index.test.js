const fs = require('fs')

const {
    displayCurrentTasks,
} = require('.')
const { readTaskTextFile } = require('../../utilities/ReadFile')

describe("Current Tasks", () => {
    test("should display current tasks", () => {
        displayCurrentTasks()

        expect(displayCurrentTasks).toBe(displayCurrentTasks)
    })
})