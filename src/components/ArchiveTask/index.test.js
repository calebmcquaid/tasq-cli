const {
    archiveTask,
} = require('.')
const { readCompletedTaskFile } = require('../../utilities/ReadFile')

jest.mock('../../utilities/ReadFile')

describe("Completed Tasks", () => {
    test("should completely delete tasks on archive", () => {
        readCompletedTaskFile.mockImplementation(() => {return {
            "currentTasks": [
                {
                    "id": 1,
                    "title": "test",
                    "isArchived": false,
                    "isCompleted": false
                    },
                    {
                        "id": 2,
                        "title": "mow the lawn",
                        "isArchived": false,
                        "isCompleted": false
                        },
                    {
                        "id": 3,
                        "title": "This one should be gone",
                        "isArchived": false,
                        "isCompleted": false
                        }
            ]
        }})
        const expectedResult = [{"id": 1, "isArchived": false, "isCompleted": false, "title": "test"},
        {
            "id": 2,
            "title": "mow the lawn",
            "isArchived": false,
            "isCompleted": false
            }]
        const input = 3

        const screen = archiveTask(input)

        expect(screen).toStrictEqual(expectedResult)
    })
})