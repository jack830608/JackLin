const axios = require('axios')
const expect = require('chai').expect


const practice = (x) => x + x


describe('測試套件', () => {
    it('測試範例1+2 = 3', () => {
        expect(1 + 2).to.equal(3);
    })
    it('3 plus 4 equal 8 ', () => {
        expect(3 + 4).to.equal(7)
    })
})
describe('測試練習', () => {
    it('practice', () => {
        expect(practice('ss')).to.equal('ssss')
    })
})