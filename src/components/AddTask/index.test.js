const {
    addTask,
} = require('.')
const { readCurrentTaskTextFile } = require('../../utilities/ReadFile')

jest.mock('../../utilities/ReadFile')
jest.mock('../../utilities/WriteFile')

afterEach(() => {
    jest.resetAllMocks()
})

describe("Add Task", () => {
    test('should a task to the task list', () => {
        readCurrentTaskTextFile.mockImplementation(() => {return 'task2\n'})
        const taskTitle = 'hello'


        const screen = addTask('hello')
        console.log(screen)

        expect(screen.length).toBeGreaterThan(0)
    })
})





