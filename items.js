const { levels } = require("./level");
module.exports = {
  swords: {
    ogName: "Sword",
    name: "Sword",
    type: "weapon",
    durability: 100,
    enhancement: 0
  },

  sword02: {
    ogName: "Sword 2",
    name: "Sword 2",
    type: "weapon",
    durability: 10,
    enhancement: 0
  },

  sheilds: {
    ogName: "Sheild",
    name: "Sheild",
    type: "armour",
    durability: 100,
    enhancement: 0
  },

  scale: {
    ogName: "Sheild",
    name: "Sheild",
    type: "armour",
    durability: 25,
    enhancement: 0
  },

  bracers: {
    ogName: "Bracers",
    name: "Bracers",
    type: "armour",
    durability: 100,
    enhancement: "DUO"
  },
  bruteBracers: {
    ogName: "Bracers",
    name: "Bracers",
    type: "armour",
    durability: -1,
    enhancement: levels[19].length
  }
};
