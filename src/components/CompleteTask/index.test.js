const {
    completeTask,
    moveCompletedTask
} = require('.')
const { readTaskFile } = require('../../utilities/ReadFile')
jest.mock('../../utilities/ReadFile')

// beforeEach(() => jest.clearAllMocks() )


describe("Complete a task", () => {
    test("should remove task from list of tasks", () => {
        readTaskFile.mockImplementation(() => {return {"currentTasks": [
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
            ],
            "completedTasks": []
        }})
        const taskNumber = 1
        const newCurrentTasks = [
            {
            "id": 2,
            "title": "New",
            "isArchived": false,
            "isCompleted": false
            }
        ]
        const completedTasks = [
            {
            "id": 1,
            "title": "test",
            "isArchived": false,
            "isCompleted": true
            }
        ]
        
        const screen = completeTask(taskNumber)
        
        expect(screen.currentTasks).toStrictEqual(newCurrentTasks)
        expect(screen.completedTasks).toStrictEqual(completedTasks)
    })
})