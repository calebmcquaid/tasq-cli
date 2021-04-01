const {readTaskFile} = require('../../utilities/ReadFile/index')
const {deleteCurrentTask} = require('./')

jest.mock('../../utilities/ReadFile/index')

describe("Delete Task", () => {
    test("should delete current task when given the proper flag", () => {
        readTaskFile.mockImplementation(() => {
            return {
                "currentTasks": [
                    {
                        "id": 0,
                        "title": "test",
                        "isArchived": false,
                        "isCompleted": false
                    },
                    {
                        "id": 1,
                        "title": "New task",
                        "isArchived": false,
                        "isCompleted": false
                    },
                ]
            }
        })
        const expectedCurrentTasks = {"currentTasks": [{
            "id": 1,
            "title": "New task",
            "isArchived": false,
            "isCompleted": false
        }]}
        const taskNumber = 1

        const screen = deleteCurrentTask(taskNumber)

        expect(screen).toStrictEqual(expectedCurrentTasks)
    })
})