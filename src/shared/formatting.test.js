const {
    capitlizeTasks,
    formatTask,
    trimNumbers
} = require('./formatting')

describe("Formatting", () => {
    test("should have a capital first letter", () => {
        const lowercaseTodos = ["mow the lawn", "todo 2", "last todo"]
        const uppercaseTodos = ["Mow the lawn", "Todo 2", "Last todo"]

        const screen = capitlizeTasks(lowercaseTodos)

        expect(screen).toStrictEqual(uppercaseTodos)
    })

    test("should have their own line", () => {
        const sameLineTodos = ["Todo 1", "todo 2", "todo 3"]
        const oneLineTodos = "1. Todo 1\n2. Todo 2\n3. Todo 3"

        const screen = formatTask(sameLineTodos)

        expect(screen).toBe(oneLineTodos)
    })

    test("should strip numbers on completion", () => {
        const numberedTodos = "1. Todo\n2. Todos\n"
        const unnumberedTodos = ["Todo", "Todos", ""]

        const screen = trimNumbers(numberedTodos)

        expect(screen).toStrictEqual(unnumberedTodos)
    })
})
