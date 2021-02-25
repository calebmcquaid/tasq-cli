module.exports = {
  createInterface: jest.fn().mockReturnValue({
    on: jest.fn().mockImplementationOnce((text, cb) => (cb("hello"))),
    close: jest.fn().mockImplementationOnce(() => undefined)
  })
};