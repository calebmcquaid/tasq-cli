const fs = require('fs')

const {
    displayCurrentTasks,
} = require('.')
const { readCurrentTaskTextFile } = require('../../utilities/ReadFile')

describe("Current Tasks", () => {
    test("should display current tasks", () => {
        displayCurrentTasks()

        expect(displayCurrentTasks).not.toBe(null)
    })
})