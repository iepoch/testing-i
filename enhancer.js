const { levels } = require("./level");
// enhancer file with all the modules

module.exports = {
  success: item => {
    const spell = item.enhancement + 1;
    const ogName = item.name;

    return { ...item, enhancement: spell, name: `[+${spell}] ${ogName}` };
  },

  fail: item => {
    // The durability of an item cannot be less than 20 when the item's enhancement level is between +0 and +14.
    // The durability of an item cannot be less than 0 when the item's enhancement level is between +15 and TET.

    // The durability of the item is decreased by 5 if the item's enhancement is between 0 and 14.
    // The durability of the item is decreased by 10 if the item's enhancement is greater than 14.
    // If the item's enhancement level is greater than 16 (DUO, TRI, TET), the enhancement level decreases by 1 (a DUO item would go back to PRI on failure).
    // The name is updated to reflect the new enhancement level if it was decreased.
    // If the item's enhancement is 14 or lower, the item cannot be enhanced if the durability is below 25.
    // If the item's enhancement is 15 or higher, the item cannot be enhanced if the durability is below 10.

    let durability = item.durability;
    let enhancement = item.enhancement;
    const updateName = item.ogName;

    if (enhancement > 0 && enhancement < 14) {
      durability = item.durability - 5;
    } else if (enhancement > 15) {
      enhancement = item.enhancement - 10;
    } else if (item.enhancement > 16 || item.enhancement === 'DUO') {
      enhancement = "PRI";
      item.name = `[+PRI] ${updateName}`; // Not sure if I need it but I wanted to add it here
    }

    if (enhancement < 14 && durability < 25) {
      throw new Error("Failed - Durability to low");
    }
    if (enhancement >= 15 && durability < 10) {
      throw new Error("Failed - Error Enhancing item");
    }
    // The name is updated to reflect the new enhancement level if it was decreased.
    return { ...item, enhancement: enhancement };
  },

  repair: item => {
    let repairedItem = {
      ogName: item.ogName,
      name: `[+1] Sheild`,
      durability: 100,
      type: item.type,
      enhancement: 1
    };
    return repairedItem;
  }
};
