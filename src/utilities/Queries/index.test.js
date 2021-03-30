const {readCurrentTaskFile} = require('../ReadFile')
const {findById, findByTitle} = require('./index')

jest.mock('../ReadFile/index')

describe("Query", () => {
    test("should find a task by id", () => {
        const id = 1
        readCurrentTaskFile.mockImplementation(() => {return {
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
        }})
        const expected = {
                "id": 1,
                "title": "New task",
                "isArchived": false,
                "isCompleted": false
        }

        const screen = findById(id)

        expect(screen).toStrictEqual(expected)
    })

    test("should find task by title", () => {
        const title = "New task"
        readCurrentTaskFile.mockImplementation(() => {return {
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
        }})
        const expected = {
                "id": 1,
                "title": "New task",
                "isArchived": false,
                "isCompleted": false
        }

        const screen = findByTitle(title)

        expect(screen).toStrictEqual(expected)
    })
})