const {
    archiveTask,
    moveArchivedTask
} = require('.')
const { readTaskFile } = require('../../utilities/ReadFile')

jest.mock('../../utilities/ReadFile')

describe("Completed Tasks", () => {
    test("should completely delete tasks on archive", () => {
        readTaskFile.mockImplementation(() => {return {
            "completedTasks": [
                {
                    "id": 1,
                    "title": "test",
                    "isArchived": false,
                    "isCompleted": true
                    },
                    {
                        "id": 2,
                        "title": "mow the lawn",
                        "isArchived": false,
                        "isCompleted": true
                        },
                    {
                        "id": 3,
                        "title": "This one should be gone",
                        "isArchived": false,
                        "isCompleted": true
                        }
            ],
            "archivedTasks": []
        }})
        const expectedResult = [{"id": 1, "isArchived": false, "isCompleted": true, "title": "test"},
        {
            "id": 2,
            "title": "mow the lawn",
            "isArchived": false,
            "isCompleted": true
            }]
        const input = 3

        const screen = archiveTask(input)

        expect(screen).toStrictEqual(expectedResult)
    })

    test("should move a completed task to archived", () => {
        readTaskFile.mockImplementation(() => {return {"completedTasks": [
            {
            "id": 1,
            "title": "test",
            "isArchived": false,
            "isCompleted": true
            },
            {
                "id": 2,
                "title": "New",
                "isArchived": false,
                "isCompleted": true
                }
            ],
            "archivedTasks": []
        }})

        const task = {
            "id": 2,
            "title": "New",
            "isArchived": true,
            "isCompleted": true
            }

        const screen = moveArchivedTask(task)

        expect(screen).toBe(1)
    })
})