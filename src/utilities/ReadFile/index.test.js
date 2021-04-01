const { exception } = require('console')
const fs = require('fs')
const {
    readCurrentTaskFile,
    readCompletedTaskFile
} = require('.')

describe("Read TaskList", () => {
    afterEach(() => {
        jest.clearAllMocks()
    });

    test("should throw exception on empty ", () => {
        fs.readFileSync = () => {throw new Error('This is an error')}
    
        const screen = readCurrentTaskFile()
    
        expect(screen).toBe('')

    })

    test("should read a .txt file with tasks", () => {
        fs.readFileSync = jest.fn()

        readCurrentTaskFile()

        expect(fs.readFileSync).toBeCalledTimes(1)
    })
})