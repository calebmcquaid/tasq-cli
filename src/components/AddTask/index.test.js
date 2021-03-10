const {
    addTask,
} = require('.')
const { readCurrentTaskTextFile } = require('../../utilities/ReadFile')

jest.mock('../../utilities/ReadFile')
jest.mock('../../utilities/WriteFile')

describe("Add Task Screen", () => {
    test('should a task to the task list', () => {
        readCurrentTaskTextFile.mockImplementation(() => {return 'hello\n task2\n'})
        const task = 'hello'

        const screen = addTask(task)

        expect(screen.length).toBeGreaterThan(0)
    })
})





