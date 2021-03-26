const {
    completeTask,
    moveCompletedTask
} = require('.')
const { readCurrentTaskFile, readCompletedTaskFile } = require('../../utilities/ReadFile')
jest.mock('../../utilities/ReadFile')
jest.mock('../../utilities/WriteFile')


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
            ]
        }})
        const taskNumber = 1
        const newTasks = {"currentTasks": [
            {
            "id": 2,
            "title": "New",
            "isArchived": false,
            "isCompleted": false
            }
        ]}
        
        const screen = completeTask(taskNumber)
        
        expect(screen).toStrictEqual(newTasks)
    })
    
    test("should move completed task to new file", () => {
        readCurrentTaskFile.mockImplementation(() => {return 'hello\n'})
        readCompletedTaskFile.mockImplementation(() => {return 'task 1\n'})
        const tasks = {"complete": "hello", "current": "task2\n"}
        const completedTasks = 'task 1\n\nhello'

        const screen = moveCompletedTask(tasks.complete)

        expect(screen).toBe(completedTasks)
    })
})