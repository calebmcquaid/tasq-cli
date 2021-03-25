const {
    addTask,
} = require('.')
const { readCurrentTaskFile } = require('../../utilities/ReadFile')

jest.mock('../../utilities/ReadFile')
jest.mock('../../utilities/WriteFile')

afterEach(() => {
    jest.resetAllMocks()
})

describe("Add Task", () => {
    test('should a task to the task list', () => {
        readCurrentTaskFile.mockImplementation(() => {return 'task2\n'})

        const screen = addTask('hello')

        expect(screen.length).toBeGreaterThan(0)
    })
})





