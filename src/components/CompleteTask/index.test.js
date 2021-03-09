const {
    completeTask
} = require('.')
const { writeTaskTextFile } = require('../../utilities/WriteFile')



describe("Complete a task", () => {
    test("should remove task from list of tasks", () => {
        writeTaskTextFile('hello')
        const taskNumber = 1
        const currentTasks = []

        const screen = completeTask(taskNumber)

        expect(screen).toStrictEqual(currentTasks)
    })

})