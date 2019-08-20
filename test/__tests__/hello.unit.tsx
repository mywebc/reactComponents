const add = (a:number, b:number) =>  {
    return a + b
}

describe("hello test jest", () => {
    it('1等于1', () => {
      expect(add(1, 2)).toEqual(3)
    })
})