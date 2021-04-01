const {
    displayTasks,
} = require('.')
const { readTaskFile } = require('../../utilities/ReadFile')

jest.mock('../../utilities/ReadFile')

describe("Display Tasks", () => {
    test("should display current tasks", () => {
        const test = readTaskFile.mockImplementation(() => { return {
        "currentTasks": [
            {
            "id": 0,
            "title": "test",
            "isArchived": false,
            "isCompleted": false
            }, {
            "id": 1,
            "title": "New task",
            "isArchived": false,
            "isCompleted": false
            }
        ],
        "completedTasks": [{
                "id": 0,
                "title": "new task that's completed",
                "isArchived": false,
                "isCompleted": true
            }, {
                "id": 1,
                "title": "test number 2",
                "isArchived": false,
                "isCompleted": true
            }]
        }})
        const expected = "0. test\n\n1. New task\n"
        const typeOfTask = "currentTasks"

        const screen = displayTasks(typeOfTask)

        expect(screen).toBe(expected)
    })


})