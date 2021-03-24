const {displayCompletedTasks} = require('.')

describe("Completed Tasks", () => {
    test("should display completed tasks", () => {
        displayCompletedTasks()

        expect(screen).not.toBe(null)
    })
})