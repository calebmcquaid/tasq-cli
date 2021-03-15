const {
    archiveTask,
} = require('.')
const { readCompletedTaskTextFile } = require('../../utilities/ReadFile')

jest.mock('../../utilities/ReadFile')

describe("Completed Tasks", () => {
    test("should completely delete tasks on archive", () => {
        readCompletedTaskTextFile.mockImplementation(() => {return "1. Mow the lawn\n2. Task"})
        const input = 2

        const screen = archiveTask(input)

        expect(screen.length).toBe(1)
    })
})