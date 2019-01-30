const enhancer = require('./enhancer')

const  {swords, sheilds}  = require('./items')


describe('Success function', () => {
    test('this will test swords', () => {
        expect(swords.enhancer).toEqual({
            durability:100
        })
    })

})


describe('Fail function', () => {

})


describe('Repair function', () => {

})

