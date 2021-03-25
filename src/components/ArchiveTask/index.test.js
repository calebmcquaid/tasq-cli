const {
    archiveTask,
} = require('.')
const { readCompletedTaskFile } = require('../../utilities/ReadFile')

jest.mock('../../utilities/ReadFile')

describe("Completed Tasks", () => {
    test("should completely delete tasks on archive", () => {
        readCompletedTaskFile.mockImplementation(() => {return "1. Mow the lawn\n2. Task"})
        const expectedResult = "1. Mow the lawn"
        const input = 2

        const screen = archiveTask(input)

        expect(screen).toBe(expectedResult)
    })
})