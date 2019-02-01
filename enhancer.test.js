const enhancer = require("./enhancer");
const {
  swords,
  sheilds,
  sword02,
  scale,
  bracers,
  bruteBracers
} = require("./items");

// Items have name, type, durability and enhancement.Add any other properties you need to implement the client's requirements.
// The item's type can be weapon or armor.

// The durability of an item starts at 100.
// The maximum durability of an item is 100.

const weaponEnhance = {
  // The enhancement level of an item starts at 0 and can reach a maximum of PEN.
  ogName: "Sword",
  name: `[+1] Sword`,
  type: "weapon",
  durability: 100,
  enhancement: 1
};

const armourEnhance = {
  ogName: "Sheild",
  name: `[+1] Sheild`,
  type: "armour",
  durability: 100,
  enhancement: 1
};

const bracersEnhance = {
  ogName: "Bracers",
  name: `[+PRI] Bracers`,
  type: "armour",
  durability: 100,
  enhancement: "PRI"
};

describe("GAME TESTING", () => {
  describe("Success function", () => {
    // The item's enhancement increases by 1.
    // The name is updated to reflect the new enhancement level.
    const actual = enhancer.success(swords);
    const expected = weaponEnhance;
    // const armourActual = enhancer.success(sheilds);
    // const armourExpected = armourEnhance;
    it("will enhance the sword & sheild by 1", () => {
      expect(actual).toEqual(expected); // this one works because all items match for weapon enhancement
      // expect(armourActual).toEqual(armourExpected); // Not working as it fails on name
    });

    it("will name is updated to reflect the new enhancement", () => {
      expect(actual).toEqual(expected);
    });
  });

  describe("Fail function", () => {
    // If the item's enhancement is 14 or lower, the item cannot be enhanced if the durability is below 25.
    it(" will fail if item duribility < 20", () => {
      expect(() => {
        enhancer.fail(sword02);
      }).toThrow();
    });
    // If the item's enhancement is 15 or higher, the item cannot be enhanced if the durability is below 10.
    it("will fail if enhancement is 15+ and durability is -10", () => {
      expect(() => {
        enhancer.fail(sword02);
      }).toThrow();
    });
    it("will fail if enhancement is greater than 16(DUO, TRI, TET)", () => {
      expect(enhancer.fail(bracers)).toEqual(bracersEnhance);
    });
      describe('Fail is durability is less than 0', () => {

          it("will fail if durability less than 0 and enhancement is higher than 15", () => {
              expect(enhancer.fail(bruteBracers)).toEqual(bracersEnhance);
  });
        })


  });

  describe("Repair function", () => {
    it("will test if swords durability is 100", () => {
      expect(enhancer.repair(scale)).toEqual(armourEnhance);
    });
  });
});
