const {
    addTask,
} = require('.')
const { readTaskFile } = require('../../utilities/ReadFile')

jest.mock('../../utilities/ReadFile')
jest.mock('../../utilities/WriteFile')

afterEach(() => {
    jest.resetAllMocks()
})

describe("Add Task", () => {
    test('should a task to the task list', () => {
        readTaskFile.mockImplementation(() => {
            return {
                "currentTasks": [
                    {
                        "id": 1,
                        "title": "test",
                        "isArchived": false,
                        "isCompleted": false
                    },
                ]
            }
        })

        const screen = addTask('hello')

        expect(screen.currentTasks.length).toBe(2)
    })
})





