const {
    completeTask,
    moveCompletedTask
} = require('.')
const { readCurrentTaskTextFile, readCompletedTaskTextFile } = require('../../utilities/ReadFile')
jest.mock('../../utilities/ReadFile')
jest.mock('../../utilities/WriteFile')


describe("Complete a task", () => {
    test("should remove task from list of tasks", () => {
        readCurrentTaskTextFile.mockImplementation(() => {return 'hello\ntask2\n'})
        const taskNumber = 1
        const newTasks = {"complete": ["hello"], "current": "task2\n"}
        
        const screen = completeTask(taskNumber)
        
        expect(screen).toStrictEqual(newTasks)
    })
    
    test("should move completed task to new file", () => {
        readCurrentTaskTextFile.mockImplementation(() => {return 'hello\n'})
        readCompletedTaskTextFile.mockImplementation(() => {return 'task 1\n'})
        const tasks = {"complete": "hello", "current": "task2\n"}
        const completedTasks = 'task 1\n\nhello'

        const screen = moveCompletedTask(tasks.complete)

        expect(screen).toBe(completedTasks)
    })
})