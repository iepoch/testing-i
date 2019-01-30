// enhancer file with all the modules



module.exports = {

    success: (item) => {
       const spell = item.enhancement + 1;
       const  ogName = item.name 
        return { ...item, enhancement: spell, name: `+[${spell}] ${ogName}` };
    },

    fail: (item) => {

    },

    repair: (item) => {

        return{ ...item, durability: 100}
    }
}

