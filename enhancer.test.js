const enhancer = require('./enhancer')
const  {swords, sheilds}  = require('./items')

const weapons = {
    name: 'Sword',
    type: 'weapon',
    durability:100,
    enhancement: 0
}

const weaponEnhance ={
    name: 'Sword',
    type: 'weapon',
    durability: 70,
    enhancement: 1
}

const armour = {
    name: 'Sheild',
    type: 'armour',
    durability: 100,
    enhancement: 0

}

describe('Success function', () => {
 it('will enhance the sword by 1', () => {
     expect(enhancer.success(swords)).toEqual(weapons) // this is failing because the entire item list does not match
     expect(enhancer.success(swords)).toEqual(weaponEnhance) // this one works because all items match for weapon enhancement
 })
})


describe('Fail function', () => {

})


describe('Repair function', () => {
    it('will test if swords durability is 100', () => {
        expect(enhancer.repair(swords)).toEqual(weapons);
    })
})

