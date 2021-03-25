const {
    completeTask,
    moveCompletedTask
} = require('.')
const { readCurrentTaskFile, readCompletedTaskFile } = require('../../utilities/ReadFile')
jest.mock('../../utilities/ReadFile')
jest.mock('../../utilities/WriteFile')


describe("Complete a task", () => {
    test("should remove task from list of tasks", () => {
        readCurrentTaskFile.mockImplementation(() => {return 'hello\ntask2\n'})
        const taskNumber = 1
        const newTasks = {"complete": ["hello"], "current": "task2\n"}
        
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