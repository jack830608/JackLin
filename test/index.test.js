const func = require('./func')


test('Check function',()=>{
    expect(func.sum(2,3)).toBe(5)
    // expect(func.sum(2)).toBe(2)
})

const sum = (a, b) => {
    return a + b
}
test('Check String', () => {
    expect(sum('Hi','Jack')).toMatch(/Jack/)
})
test('Check Summary ', () => {
    expect(sum(5,2)).toBe(7)
})
test('Test Float', () => {
    expect(0.1 + 0.2).toBeCloseTo(0.3)

    //expect(0.1 + 0.2).toBe(0.3)
})

test('For Array',()=>{
    let arrA = ['A','B','C']

    expect(arrA).toContain('B')
    
    arrA.forEach((i) => {
        expect(i).not.toBe('')
    })
})

test('Special value',()=>{

    expect(true).toBeTruthy()
    
    expect(false).toBeFalsy()

    expect(null).toBeNull()

    expect(undefined).toBeUndefined()

    expect(null).toBeDefined()
})