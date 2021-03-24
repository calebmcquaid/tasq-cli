const {
    displayCurrentTasks,
    deleteCurrentTask
} = require('.')
const { readCurrentTaskTextFile } = require('../../utilities/ReadFile')

jest.mock('../../utilities/ReadFile')

describe("Current Tasks", () => {
    test("should display current tasks", () => {
        displayCurrentTasks()

        expect(displayCurrentTasks).not.toBe(null)
    })


})