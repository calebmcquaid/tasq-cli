const {
    displayCurrentTasks,
    deleteCurrentTask
} = require('.')
const { readCurrentTaskFile } = require('../../utilities/ReadFile')

jest.mock('../../utilities/ReadFile')

describe("Current Tasks", () => {
    test("should display current tasks", () => {
        readCurrentTaskFile.mockImplementation(() => { return [{
            "id": 1,
            "title": "test",
            "isArchived": false,
            "isCompleted": false
        }]})
        displayCurrentTasks()

        expect(displayCurrentTasks).not.toBe(null)
    })


})