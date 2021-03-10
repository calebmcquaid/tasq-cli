const {
    completeTask
} = require('.')
const { readTaskTextFile } = require('../../utilities/ReadFile')
jest.mock('../../utilities/ReadFile')
jest.mock('../../utilities/WriteFile')


describe("Complete a task", () => {
    test("should remove task from list of tasks", () => {
        readTaskTextFile.mockImplementation(() => {return 'hello\ntask2\n'})
        const taskNumber = 1
        const newTasks = 'task2\n'

        const screen = completeTask(taskNumber)

        expect(screen).toStrictEqual(newTasks)
    })

})