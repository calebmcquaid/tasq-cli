const {
    archiveTask,
} = require('.')

describe("Completed Tasks", () => {
    test("should completely delete tasks on archive", () => {
        const completedTasks = ["1. Mow the lawn", "2. Task"]
        const input = 2

        const screen = archiveTask(completedTasks, input)

        expect(screen.length).toBe(1)
    })
})