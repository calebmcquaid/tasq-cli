const { 
    navigation
} = require('./')

const {readCurrentTaskTextFile} = require('./utilities/ReadFile')
const yargs = require('yargs/yargs')
jest.mock('./utilities/ReadFile')

describe("Menu", () => {
    test("should display a help message when no flag is passed in", () => {
    // ARRANGE: (mocks[node modules, "stand in", things I don't own (api calls)], spies, expected output) welcome message - variable, 
        const greeting = "Welcome to the tasklist! Here's what you can do:\n1. Add a task\n2. See Current Tasks\n3. Complete Tasks\nEnter 'task --help' for more information"
    // ACT:
        const screen = navigation('')
    // ASSERT:
        //expect function to return welcome message
        expect(screen).toBe(greeting)
    // ANNIHILATE!!
    })

    test("should display current tasks when given proper flag", () => {
        readCurrentTaskTextFile.mockImplementation(() => {return "task 1\n task 3\n"})
        const argv = yargs('--current').option('current', {
            type: 'string',
            default: 'bar'
        }).argv
        const currentTasks = "task 1\n task 3\n"

        const screen = navigation(argv)

        expect(screen).toBe(currentTasks)
    })
})

describe('Help', () => {
    test("should return the help menu when given the proper flag", () => {
        const flag = '--help'
        const helpMenu = "Help Menu"

        const screen = navigation(flag)

        expect(screen).toBe(helpMenu)
    })
})