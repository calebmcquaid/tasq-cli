const {updateTask} = require('.')
const { readCurrentTaskFile } = require('../../utilities/ReadFile')

jest.mock('../../utilities/ReadFile')

describe("Update task", () => {
    test("should update the task when given the proper flag", () => {
        readCurrentTaskFile.mockImplementation(() => {return '1. Hello\n2. New task'})
        const taskNumber = 1
        const newTask = "This is an updated task"
        const updatedTasks = "This is an updated task\n2. New task"

        const screen = updateTask(taskNumber, newTask)

        expect(screen).toStrictEqual(updatedTasks)
    })
})