import classes from '../classes'

describe("classes", () => {
    it("接受一个classes", () => {
        const result = classes("a")
        expect(result).toEqual("a")
    })
    it("接受奇怪的classes", () => {
        const result = classes("a", "中文")
        expect(result).toEqual("a 中文")
    })
})