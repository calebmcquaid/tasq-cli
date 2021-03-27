const {displayCompletedTasks} = require('.')
const { readCompletedTaskFile } = require('../../utilities/ReadFile')

jest.mock('../../utilities/ReadFile')

describe("Completed Tasks", () => {
    test("should display completed tasks", () => {
        readCompletedTaskFile.mockImplementation(() => {return {"completedTasks": [
            {
            "id": 1,
            "title": "test",
            "isArchived": false,
            "isCompleted": false
            },
            {
                "id": 2,
                "title": "New",
                "isArchived": false,
                "isCompleted": false
                }
            ]
        }})
        const expected = {
            "id": 1,
            "title": "test",
            "isArchived": false,
            "isCompleted": false
            }

        const screen = displayCompletedTasks()

        expect(screen.completedTasks[0]).toStrictEqual(expected)
    })
})