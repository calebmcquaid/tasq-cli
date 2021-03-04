
const { ESCAPE_KEY } = require('../../shared/constants')
const {
    displayCurrentTasks,
    addTask,
} = require('.')

describe("Current Tasks", () => {
    test("should display current tasks", () => {
        const currentTasks = ["task 1", "mow the lawn"]

        const screen = displayCurrentTasks(currentTasks)

        expect(screen).toBe(currentTasks)
    })

    test("should display message when there are no tasks", () => {
        const currentTasks = []
        const message = "No tasks! Go to the add task menu to add another\n(Press esc to return to the main menu)"

        const screen = displayCurrentTasks(currentTasks)

        expect(screen).toBe(message)
    })
})

describe("Add Task Screen", () => {
    test("should display 'add task success' when a non-empty task is submitted", () => {
        const expectedSuccess = "Great! We will add this to the list! (press enter to add another task)"
        const alphabet = "abcde"
        const taskInput = alphabet[Math.floor(Math.random() * alphabet.length)]

        const screen = addTask(taskInput)

        expect(screen).toBe(expectedSuccess)
    })

    test("should prompt 'invalid task' when given an empty task", () => {
        const invalidResponse = "Please add a real task! (press enter)"
        const emptyTask = ""
        
        const screen = addTask(emptyTask)

        expect(screen).toBe(invalidResponse)
    })

    test("should navigate to main menu when ESC is pressed", () => {
        const greeting = "Welcome to the tasklist! Here's what you can do:\n1. Add a task\n2. See Current Tasks\n3. Complete Tasks\nPress a number to continue:"

        const screen = addTask(ESCAPE_KEY)

        expect(screen).toBe(greeting)
    })
})





