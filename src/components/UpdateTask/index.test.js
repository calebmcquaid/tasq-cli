const {updateTask} = require('.')
const { readCurrentTaskFile } = require('../../utilities/ReadFile')

jest.mock('../../utilities/ReadFile')

describe("Update task", () => {
    test("should update the task when given the proper flag", () => {
        readCurrentTaskFile.mockImplementation(() => {
            return {
                "currentTasks": [
                    {
                        "id": 1,
                        "title": "test",
                        "isArchived": false,
                        "isCompleted": false
                    },
                ]
            }
        })
        const taskNumber = 1
        const newTask = "This is an updated task"
        const updatedTasks = {
            "currentTasks": [
                {
                    "id": 1,
                    "title": "This is an updated task",
                    "isArchived": false,
                    "isCompleted": false
                },
            ]
        }

        const screen = updateTask(taskNumber, newTask)

        expect(screen).toStrictEqual(updatedTasks)
    })
})