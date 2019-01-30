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
  // The durability of an item cannot be less than 20 when the item's enhancement level is between +0 and +14.
  // The durability of an item cannot be less than 0 when the item's enhancement level is between +15 and TET.
  name: "Sheild",
  type: "armour",
  durability: 100,
  enhancement: 0
};

describe('Success function', () => {
    // The item's enhancement increases by 1.
    // The name is updated to reflect the new enhancement level.
 it('will enhance the sword by 1', () => {
    //  expect(enhancer.success(swords)).toEqual(weapons) // this is failing because the entire item list does not match
     expect(enhancer.success(swords)).toEqual(weaponEnhance) // this one works because all items match for weapon enhancement
 })
})


describe('Fail function', () => {

})


describe('Repair function', () => {
    it('will test if swords durability is 100', () => {
        expect(enhancer.repair(sword02)).toEqual(weapons);
    })
})

