const { exception } = require('console')
const fs = require('fs')
const {
    readCurrentTaskTextFile,
    readCompletedTaskTextFile
} = require('.')

describe("Read TaskList", () => {
    afterEach(() => {
        jest.clearAllMocks()
    });

    test("should throw exception on empty ", () => {
        fs.readFileSync = () => {throw new Error('This is an error')}
    
        const screen = readCurrentTaskTextFile()
    
        expect(screen).toBe('')

    })
    
    test("should throw exception on empty ", () => {
        fs.readFileSync = () => {throw new Error('This is an error')}
    
        const screen = readCompletedTaskTextFile()
    
        expect(screen).toBe('')

    })

    test("should read a .txt file with tasks", () => {
        fs.readFileSync = jest.fn()

        readCurrentTaskTextFile()

        expect(fs.readFileSync).toBeCalledTimes(1)
    })

    test("should read a .txt file with completed tasks", () => {
        fs.readFileSync = jest.fn()

        readCompletedTaskTextFile()

        expect(fs.readFileSync).toBeCalledTimes(1)
    })

})