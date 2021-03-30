const {
    completeTask,
    moveCompletedTask
} = require('.')
const { readCurrentTaskFile } = require('../../utilities/ReadFile')
jest.mock('../../utilities/ReadFile')


describe("Complete a task", () => {
    test("should remove task from list of tasks", () => {
        readCurrentTaskFile.mockImplementation(() => {return {"currentTasks": [
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
    })

    test("should move completed task to completedTasks", () => {
        readCurrentTaskFile.mockImplementation(() => {return {"currentTasks": [
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

        const task = {
            "id": 2,
            "title": "New",
            "isArchived": false,
            "isCompleted": false
            }

        const screen = moveCompletedTask(task)

        expect(screen).toBe(1)
    })
})