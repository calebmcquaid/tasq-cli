const {readCurrentTaskFile} = require('../../utilities/ReadFile/index')
const {deleteCurrentTask} = require('./')

jest.mock('../../utilities/ReadFile/index')

describe("Delete Task", () => {
    test("should delete current task when given the proper flag", () => {
        readCurrentTaskFile.mockImplementation(() => {return '1. Hello\n2. New task'})
        const expectedCurrentTasks = '2. New task'
        const taskNumber = 1

        const screen = deleteCurrentTask(taskNumber)

        expect(screen).toBe(expectedCurrentTasks)
    })
})