const { 
    navigation
} = require('./')

const {readCurrentTaskFile} = require('./utilities/ReadFile')
const yargs = require('yargs/yargs')
jest.mock('./utilities/ReadFile')

describe("Menu", () => {
    test("should display a help message when no flag is passed in", () => {
    // ARRANGE: (mocks[node modules, "stand in", things I don't own (api calls)], spies, expected output) welcome message - variable, 
        const greeting = "Welcome to the tasklist! Here's what you can do:\n\nAdd a task with --add and the task: tasq --add 'new task'\n\nUpdate a current task with --update, the task number, and the new task: tasq --update 1 'updated task'\n\nSee current tasks with --current: tasq --current\n\nDelete current tasks with --delete: tasq --delete 1\n\nComplete tasks with --complete and the task number: tasq --complete 1\n\nSee completed tasks with --completed: tasq --completed\n\nEnter 'tasq --info' to see a list of the commands."
    // ACT:
        const screen = navigation('')
    // ASSERT:
        //expect function to return welcome message
        expect(screen).toBe(greeting)
    // ANNIHILATE!!
    })

    test("should display current tasks when given proper flag", () => {
        readCurrentTaskFile.mockImplementation(() => {return [{ 
        "id": 1,
        "title": "test",
        "isArchived": false,
        "isCompleted": false
    }]})
        const argv = yargs('--current').option('current', {
            type: 'string',
            default: 'bar'
        }).argv
        const currentTasks = "1. test\n"

        const screen = navigation(argv)

        expect(screen).toBe(currentTasks)
    })
})

describe('Help', () => {
    test("should return the help menu when given the proper flag", () => {
        const argv = yargs('--info').option('--info', {
            type: 'string',
            default: 'bar'
        }).help('').argv
        const helpMenu = "  --add ' '\t\t Add a task\n  --current\t\t See current tasks\n  --update # ' '\t Update a task with the corresponding number\n  --delete ' '\t\t Delete a current task by entering the corresponding number\n  --complete ' '\t Complete a task with the corresponding number\n  --completed\t\t See the tasks you have completed\n  --archive ' '\t\t Permanently delete completed task with the corresponding number"

        const screen = navigation(argv)

        expect(screen).toBe(helpMenu)
    })
})