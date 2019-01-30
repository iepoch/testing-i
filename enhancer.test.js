const enhancer = require('./enhancer')
const  {swords,sword02, sheilds}  = require('./items')

// Items have name, type, durability and enhancement.Add any other properties you need to implement the client's requirements.
// The item's type can be weapon or armor.
const weapons = {
  // The durability of an item starts at 100.
  // The maximum durability of an item is 100.
  name: "Sword",
  type: "weapon",
  durability: 100,
  enhancement: 0
};

const weaponEnhance = {
  // The enhancement level of an item starts at 0 and can reach a maximum of PEN.
  ogName: "Sword",
  name: `+[${1}] Sword`,
  type: "weapon",
  durability: 70,
  enhancement: 1
};

const armour = {

  name: "Sheild",
  type: "armour",
  durability: 8,
  enhancement: 15
};

describe('Success function', () => {
    // The item's enhancement increases by 1.
    // The name is updated to reflect the new enhancement level.
 it('will enhance the sword by 1', () => {
     expect(enhancer.success(swords)).toEqual(weaponEnhance) // this one works because all items match for weapon enhancement
 })

it('will name is updated to reflect the new enhancement', ()=>{
      expect(enhancer.success(swords)).toEqual(weaponEnhance) // this is failing because the entire item list does not match
})

})


describe('Fail function', () => {

    it(' will fail if item duribility < 20', ()=>{
        expect(() => {
            enhancer.fail(sheilds)
        }).toThrow()
    }) 
})


describe('Repair function', () => {
    it('will test if swords durability is 100', () => {
        expect(enhancer.repair(sword02)).toEqual(weapons);
    })
})

