// enhancer file with all the modules



module.exports = {

    success: (item) => {
       const spell = item.enhancement + 1;
       const  ogName = item.name 

        return { ...item, enhancement: spell, name: `+[${spell}] ${ogName}` };
    },

    fail: (item) => {
          // The durability of an item cannot be less than 20 when the item's enhancement level is between +0 and +14.
  // The durability of an item cannot be less than 0 when the item's enhancement level is between +15 and TET.
       let durability = item.durability
       let enhancement = item.enhancement

        if (item.durability < 20 && item.enhancement < 0 && item.enhancement > 14) {
            throw new Error( 'Failed - Durability to low')
        } 


    },

    repair: (item) => {

        return{ ...item, durability: 100}
    }
}

