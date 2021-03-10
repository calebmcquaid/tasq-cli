const {
    addTask,
} = require('.')
const { readTaskTextFile } = require('../../utilities/ReadFile')

jest.mock('../../utilities/ReadFile')
jest.mock('../../utilities/WriteFile')

describe("Add Task Screen", () => {
    test('should a task to the task list', () => {
        readTaskTextFile.mockImplementation(() => {return 'hello\n task2\n'})
        const task = 'hello'

        const screen = addTask(task)

        expect(screen.length).toBeGreaterThan(0)
    })
})





