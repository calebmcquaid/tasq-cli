const chalk = require('chalk')
const readline = require('readline')
const { stdout, stdin } = require('process')
const fs = require('fs')
const nodemailer = require('nodemailer')

const { 
    openApplication, 
    navigateToMenuOption,
    returnToMainMenu,
    navigation
} = require('./index.js')


describe("Menu", () => {
    test("should display a welcome message after the application is started", () => {
    // ARRANGE: (mocks[node modules, "stand in", things I don't own (api calls)], spies, expected output) welcome message - variable, 
        const greeting = "Welcome to the tasklist! Here's what you can do:\n1. Add a task\n2. See Current Tasks\n3. Complete Tasks\nEnter 'task -help' for more information"
    // ACT:
        const screen = navigation()
    // ASSERT:
        //expect function to return welcome message
        expect(screen).toBe(greeting)
    // ANNIHILATE!!
    })

    test("should navigate to 'current tasks' menu when proper key is pressed", () => {
        const currentTaskBanner = "Press esc to return to the main menu\n\nHere are your current tasks:"
        const input = 2

        const currentTaskScreen = navigateToMenuOption(input)

        expect(currentTaskScreen).toBe(currentTaskBanner)
    })

    test("should navigate to 'complete a task' when the proper key is pressed", () => {
        const input = 3
        const message = "Nice work! Which task would you like to complete?\n(Enter the corresponding number to complete that task)"

        const screen = navigateToMenuOption(input)

        expect(screen).toBe(message)
    })

    test("should navigate to 'See Completed Tasks' when proper input is pressed", () => {
        const input = 4
        const message = "Here's everything you've completed so far:\n"

        const screen = navigateToMenuOption(input)

        expect(screen).toBe(message)
    })

    test("should navigate to 'share tasklist' when proper input is pressed", () => {
        const input = 6
        const expectedGreeting = "Where would you like to send your tasklist? (Please enter a valid email address)"

        const screen = navigateToMenuOption(input)

        expect(screen).toBe(expectedGreeting)
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

describe('Help', () => {
    test("should return the help menu when given the proper flag", () => {
        const flag = '-help'
        const helpMenu = "Help Menu"

        const screen = navigation(flag)

        expect(screen).toBe(helpMenu)
    })
})



describe('Email', () => {
    test.skip("should send email with tasks", () => {
        nodemailer.createTransport.sendMail = jest.fn()
        const successResponse = "Successfully sent file!"

        const screen = sendEmail()

        expect(screen).toBe(successResponse)
    })
})

