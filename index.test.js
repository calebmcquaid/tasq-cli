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
    numberTodos,
    capitlizeTodos,
    addNewLine
} = require('./index.js')


describe("Menu", () => {
    test("should display a welcome message after the application is started", () => {
    // ARRANGE: (mocks[node modules, "stand in", things I don't own (api calls)], spies, expected output) welcome message - variable, 
        const greeting = "Welcome to the tasklist! Here's what you can do:\n1. Add a task\n2. See Current Tasks\n\nPress a number to continue:"
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
        const greeting = "Welcome to the tasklist! Here's what you can do:\n1. Add a task\n2. See Current Tasks\n\nPress a number to continue:"
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
        const removedTask = ["2. todo 2", "3. Mow the lawn"]
        const task = 1

        const screen = completeTask(input, currentTasks, task)

        expect(screen).toStrictEqual(removedTask)
    })
})

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
        const oneLineTodos = ["Todo 1\n", "todo 2\n", "todo 3\n"]

        const screen = addNewLine(sameLineTodos)

        expect(screen).toStrictEqual(oneLineTodos)
    })
})

describe("CLI Display", () => {
    test.skip("should gracefully quit the application when the 'q' key is pressed", () => {
        const goodbyeMessage = "So long!"

        const runningFunction = closeApplication()

        expect(runningFunction).toBe(goodbyeMessage) 
    })

    test.skip("should display the tasks with numbers when content is available", () => {
        const currentTodos = "1. todo 1\n"
        
        const formatCurrentTodos = numberTodos("todo 1", 0)

        expect(formatCurrentTodos).toBe(currentTodos)
    })

    test.skip("should display a message when there are no todos", () => {
        const currentTodos = []
        const message = "No todos! Add a todo or take it easy!"
        
        const noTodos = displayFormattedTodos(currentTodos)
        
        expect(noTodos).toBe(message)
    })
})

describe("CLI Functionality", () => {
    test.skip("should save the input when the enter key is pressed", () => {
        const newTodo = "new todo"
        const currentTodos = ["new todo"]
        
        const addTodo = saveTodo(newTodo)
        
        expect(addTodo).toStrictEqual(currentTodos)
    })
    
    test.skip("should format the todos properly", () => {
        const expectedFormattedTodos = ["1. todo 1\n", "2. todo 2\n"]
        chalk.green = jest.fn().mockReturnValueOnce("1. todo 1\n").mockReturnValueOnce("2. todo 2\n")
        const unformattedTodos = ["todo 1", "todo 2"]
        
        const formattedTodos = numberTodos(unformattedTodos)

        expect(chalk.green).toBeCalledTimes(2)
        expect(formattedTodos).toStrictEqual(expectedFormattedTodos)
    })
    
    test.skip("should not accept empty todos on submit", () => {
        const emptyTodo = ""
        const todoList = []
        
        const submitEmptyTodo = saveTodo(emptyTodo)
        
        expect(submitEmptyTodo).toBe("You can't submit an empty todo")
        expect(todoList).toStrictEqual([])
    })
    
    test.skip("should remove the todo from the inactive list when the todo is deleted", () => {
        const completedTodos = ["todo number 1", "this is also a todo", "last todo"]
        const removedTodo = ["todo number 1", "this is also a todo"]
        
        const removeTodo = deleteTodo(completedTodos, 2)
        
        expect(removeTodo).toStrictEqual(removedTodo)
    })
    
    test.skip("should move the todo from the active list to the inactive list upon completion", () => {
        const completedList = ["todo 1", "todo 2"]
        const currentTodos = ["todo 3"]
        
        const markTodoDone = completeTodo(completedList, currentTodos, 0)
        
        expect(markTodoDone).toStrictEqual(["todo 1", "todo 2", "todo 3"])
    })
})

    test.skip("should display a colorful message on the screen", () => {
        chalk.green = jest.fn()
        const mockTodos = ['hello', "next"]

        numberTodos(mockTodos)
        expect(chalk.green).toHaveBeenCalledTimes(2)
    })

    test.skip("should give you selectable menu options for what to do", () => {
        const options = ["1. Add Todo", "2. Current Todos", "3. Delete Todos"]
        const input = "Current"

        const chosenOption = selectMenuOption(input)

        expect(chosenOption).toBe(options[1])
    })

    test.skip("should allow you to enter a new todo given the 'new' command", () => {

    })
    
    test.skip("should send a magic link when the user logs in", () => {
        
    })
    
    test.skip("should email the todo list when the user shares the todos", () => {
        
    })
    
    test.skip("should open the email with the subject and body populated when the todos are shared", () => {
        
    })
    
    test.skip("should accept input in the command line when the user types", () => {
    
    })