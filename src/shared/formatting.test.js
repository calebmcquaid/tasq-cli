const {
    capitlizeTasks,
    formatTask,
    trimNumbers
} = require('./formatting')

describe("Formatting", () => {
    test("should have a capital first letter", () => {
        const lowercaseTasks = ["mow the lawn", "task 2", "last task"]
        const uppercaseTasks = ["Mow the lawn", "Task 2", "Last task"]

        const screen = capitlizeTasks(lowercaseTasks)

        expect(screen).toStrictEqual(uppercaseTasks)
    })

    test("should have their own line", () => {
        const sameLineTasks = ["Task 1", "task 2", "task 3"]
        const oneLineTasks = "1. Task 1\n2. Task 2\n3. Task 3"

        const screen = formatTask(sameLineTasks)

        expect(screen).toBe(oneLineTasks)
    })

    test("should strip numbers on completion", () => {
        const numberedTasks = "1. Task\n2. Tasks\n"
        const unnumberedTasks = ["Task", "Tasks"]

        const screen = trimNumbers(numberedTasks)

        expect(screen).toStrictEqual(unnumberedTasks)
    })
})
