const chalk = require('chalk')
const readline = require('readline')
const { stdout, stdin } = require('process')

const { 
    openApplication, 
    navigateToMenuOption,
    addTask,
    displayCurrentTasks,
    confirmTaskComplete,
    completeTask,
    displayCompletedTodos,
    returnToMainMenu,
    archiveTask
} = require('./index.js')


describe("Menu", () => {
    test("should display a welcome message after the application is started", () => {
    // ARRANGE: (mocks[node modules, "stand in", things I don't own (api calls)], spies, expected output) welcome message - variable, 
        const greeting = "Welcome to the tasklist! Here's what you can do:\n1. Add a task\n2. See Current Tasks\n3. Complete Tasks\nPress a number to continue:"
    // ACT:
        const screen = openApplication(greeting)
    // ASSERT:
        //expect function to return welcome message
        expect(screen).toBe(greeting)
    // ANNIHILATE!!
    })
    
    test("should navigate to the 'add task screen' when add menu number is pressed", () => {
        const addTaskBanner = "Press esc to return to the main menu\n\nWhat needs done? Press enter to add the task"
        const input = 1

        const addTaskScreen = navigateToMenuOption(input)

        expect(addTaskScreen).toBe(addTaskBanner)
    })

    test("should prompt 'invalid option' when input not in the menu is pressed", () => {
        const expectedOuput = "Not a valid menu option! (press enter)"
        const input = Math.random()

        const screen = navigateToMenuOption(input)

        expect(screen).toBe(expectedOuput)
    })
    
    test("should return to the main menu when the escape key is pressed", () => {
        const escapeKey = 27
        const mainMenuGreeting = "Welcome to the tasklist! Here's what you can do:\n1. Add a task\n2. See Current Tasks\n3. Complete Tasks\nPress a number to continue:"

        const screen = returnToMainMenu(escapeKey)

        expect(screen).toBe(mainMenuGreeting)
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
        const escapeKey = 27

        const screen = addTask(escapeKey)

        expect(screen).toBe(greeting)
    })
})

describe("Current Tasks", () => {
    test("should navigate to 'current tasks' menu when proper key is pressed", () => {
        const currentTaskBanner = "Press esc to return to the main menu\n\nHere are your current tasks:"
        const input = 2

        const currentTaskScreen = navigateToMenuOption(input)

        expect(currentTaskScreen).toBe(currentTaskBanner)
    })

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

describe("Complete a task", () => {
    test("should navigate to 'complete a task' when the proper key is pressed", () => {
        const input = 3
        const message = "Nice work! Which task would you like to complete?\n(Enter the corresponding number to complete that task)"

        const screen = navigateToMenuOption(input)

        expect(screen).toBe(message)
    })

    test("should display the current tasks", () => {
        const currentTasks = ["hello", "todo 2", "hello again"]

        const screen = displayCurrentTasks(currentTasks)

        expect(screen).toBe(currentTasks)
    })

    test("should return a confirmation of the correct task to complete", () => {
        const currentTasks = ["1. hello", "2. todo 2", "3. Mow the lawn"]
        const input = 1
        const confirmMessage = `You want to complete the following task? ${currentTasks[input - 1]}`

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
})

describe("Completed Tasks", () => {
    test("should navigate to 'See Completed Tasks' when proper input is pressed", () => {
        const input = 4
        const message = "Here's everything you've completed so far:\n"

        const screen = navigateToMenuOption(input)

        expect(screen).toBe(message)
    })

    test("should display completed tasks", () => {
        const completedTodos = ["Mow the lawn", "Todo"]
        const displayedTodos = "Mow the lawn\nTodo\nPress esc to return to the main menu\n"

        const screen = displayCompletedTodos(completedTodos)

        expect(screen).toBe(displayedTodos)
    })

    test("should completely delete tasks on archive", () => {
        const completedTodos = ["1. Mow the lawn", "2. Todo"]
        const input = 2

        const screen = archiveTask(completedTodos, input)

        expect(screen.length).toBe(1)
    })
})

describe("Share TaskList", () => {
    test("should navigate to 'share tasklist' when proper input is pressed", () => {
        const input = 6
        const expectedGreeting = "Where would you like to send your tasklist? (Please enter a valid email address)"

        const screen = navigateToMenuOption(input)

        expect(screen).toBe(expectedGreeting)
    })
})

