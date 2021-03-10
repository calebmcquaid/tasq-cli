const {
    numberTodos,
    capitlizeTodos,
    addNewLine,
    stripTaskNumbers
} = require('./formatting')

describe("Formatting", () => {
    test("should number the tasks in order", () => {
        const unformattedTodos = ["Mow the lawn", "Todo 2", "Last todo"]
        const formattedTodos = ["1. Mow the lawn", "2. Todo 2", "3. Last todo"]

        const screen = numberTodos(unformattedTodos)

        expect(screen).toStrictEqual(formattedTodos)
    })

    test("should have a capital first letter", () => {
        const lowercaseTodos = ["mow the lawn", "todo 2", "last todo"]
        const uppercaseTodos = ["Mow the lawn", "Todo 2", "Last todo"]

        const screen = capitlizeTodos(lowercaseTodos)

        expect(screen).toStrictEqual(uppercaseTodos)
    })

    test("should have their own line", () => {
        const sameLineTodos = ["Todo 1", "todo 2", "todo 3"]
        const oneLineTodos = "1. Todo 1\n2. todo 2\n3. todo 3"

        const screen = addNewLine(sameLineTodos)

        expect(screen).toBe(oneLineTodos)
    })
    test("should strip numbers on completion", () => {
        const numberedTodos = ["1. Todo", "2. Todos"]
        const unnumberedTodos = ["Todo", "Todos"]

        const screen = stripTaskNumbers(numberedTodos)

        expect(screen).toStrictEqual(unnumberedTodos)
    })
})
