const {
    confirmTaskComplete,
    completeTask
} = require('.')

const { displayCompletedTodos } = require('./')

describe("Complete a task", () => {
    test("should display completed tasks", () => {
        const completedTodos = ["Mow the lawn", "Todo"]
        const displayedTodos = "Mow the lawn\nTodo\nPress esc to return to the main menu\n"

        const screen = displayCompletedTodos(completedTodos)

        expect(screen).toBe(displayedTodos)
    })

    test("should return a confirmation of the correct task to complete", () => {
        const currentTasks = ["1. hello", "2. todo 2", "3. Mow the lawn"]
        const input = 1
        const confirmMessage = `You want to complete the following task? ${currentTasks[input - 1]} (Press 'y' to complete, press any other key to return to the tasks)`

        const screen = confirmTaskComplete(currentTasks, input)

        expect(screen).toBe(confirmMessage)
    })

    test("should remove task from list of tasks when given the 'y' input", () => {
        const input = 'y'
        const currentTasks = ["1. hello", "2. todo 2", "3. Mow the lawn"]
        const updatedCurrentTasks = ["2. todo 2", "3. Mow the lawn"]
        const task = 1

        const screen = completeTask(input, currentTasks, task)

        expect(screen).toStrictEqual(updatedCurrentTasks)
    })

    test("should return to list of tasks", () => {
        const input = "n"
        const currentTasks = ["1. hello", "2. todo 2", "3. Mow the lawn"]
        const task = 1

        const screen = completeTask(input, currentTasks, task)

        expect(screen).toStrictEqual(currentTasks)
    })
})