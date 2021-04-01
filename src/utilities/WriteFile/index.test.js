const fs = require('fs')
const {
    writeTaskFile
} = require('.')

describe("Write taskList", () => {
    test("should write to a .json file with current tasks", () => {
        fs.writeFileSync = jest.fn()
        const currentTasks = {
            "currentTasks": [
                { 
                    "id": 2,
                    "title": "test",
                    "isArchived": false,
                    "isCompleted": false
                },
                { 
                    "id": 3,
                    "title": "test",
                    "isArchived": false,
                    "isCompleted": false
                }
            ]
        }

        writeTaskFile(currentTasks)

        expect(fs.writeFileSync).toBeCalledTimes(1) 
    })
})
