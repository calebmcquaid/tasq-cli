const {
    completeTask
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
        console.log(screen)
        
        expect(screen.currentTasks).toStrictEqual(newCurrentTasks)
        expect(screen.completedTasks).toStrictEqual(completedTasks)
    })
})