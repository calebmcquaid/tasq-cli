const { openApplication, closeApplication, saveTodo, deleteTodo, completeTodo, displayFormattedTodos, formatTodos } = require('./index.js')

describe("CLI Display", () => {
    test("should display a welcome message after the application is started", () => {
    // ARRANGE: (mocks[node modules, "stand in", things I don't own (api calls)], spies, expected output) welcome message - variable, 
        const welcomeMessage = "Welcome to the todo list"
    // ACT:
        const openApp = openApplication()
    // ASSERT:
        //expect function to return welcome message
        expect(openApp).toBe(welcomeMessage)
    // ANNIHILATE!!
    })

    test("should gracefully quit the application when the 'q' key is pressed", () => {
        const goodbyeMessage = "So long!"

        const runningFunction = closeApplication()

        expect(runningFunction).toBe(goodbyeMessage) 
    })

    test("should display the tasks with numbers when content is available", () => {
        const currentTodos = ["todo 1", "todo 2"]
        const displayedTodos = ["1. todo 1", "2. todo 2"]
        
        const showTodos = displayFormattedTodos(currentTodos)
        
        expect(showTodos).toStrictEqual(displayedTodos)
    })

    test("should display a message when there are no todos", () => {
        const currentTodos = []
        const message = "No todos! Add a todo or take it easy!"
        
        const noTodos = displayFormattedTodos(currentTodos)
        
        expect(noTodos).toBe(message)
    })
})

describe("CLI Functionality", () => {
    test("should save the input when the enter key is pressed", () => {
        const newTodo = "new todo"
        const currentTodos = ["new todo"]
        
        const addTodo = saveTodo(newTodo)
        
        expect(addTodo).toStrictEqual(currentTodos)
    })
    
    test("should format the todos properly", () => {
        const unformattedTodos = ["todo 1", "todo 2"]
        const formattedTodos = ["1. todo 1", "2. todo 2"]
        
        const numberedTodos = formatTodos(unformattedTodos)
        
        expect(numberedTodos).toStrictEqual(formattedTodos)
    })
    
    test("should not accept empty todos on submit", () => {
        const emptyTodo = ""
        const todoList = []
        
        const submitEmptyTodo = saveTodo(emptyTodo)
        
        expect(submitEmptyTodo).toBe("You can't submit an empty todo")
        expect(todoList).toStrictEqual([])
    })
    
    test("should remove the todo from the inactive list when the todo is deleted", () => {
        const completedTodos = ["todo number 1", "this is also a todo", "last todo"]
        const removedTodo = ["todo number 1", "this is also a todo"]
        
        const removeTodo = deleteTodo(completedTodos, 2)
        
        expect(removeTodo).toStrictEqual(removedTodo)
    })
    
    test("should move the todo from the active list to the inactive list upon completion", () => {
        const completedList = ["todo 1", "todo 2"]
        const currentTodos = ["todo 3"]
        
        const markTodoDone = completeTodo(completedList, currentTodos, 0)
        
        expect(markTodoDone).toStrictEqual(["todo 1", "todo 2", "todo 3"])
    })
})
    test.skip("should allow you to enter a new todo given the 'new' command", () => {

    })
    
    test.skip("should send a magic link when the user logs in", () => {
        
    })
    
    test.skip("should email the todo list when the user shares the todos", () => {
        
    })
    
    test.skip("should open the email with the subject and body populated when the todos are shared", () => {
        
    })
    
    test.skip("", () => {
        
    })
    
    
    test.skip("should accept input in the command line when the user types", () => {
    
    })