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

    test("should delete current task when given the proper flag", () => {
        readCurrentTaskTextFile.mockImplementation(() => {return '1. Hello\n2. New task'})
        const expectedCurrentTasks = '2. New task'
        const taskNumber = 1

        const screen = deleteCurrentTask(taskNumber)

        expect(screen).toBe(expectedCurrentTasks)
    })
})