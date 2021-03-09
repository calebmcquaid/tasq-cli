
const { ESCAPE_KEY } = require('../../shared/constants')
const {
    addTask,
} = require('.')

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





