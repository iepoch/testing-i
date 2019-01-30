// enhancer file with all the modules



module.exports = {

    success: (item) => {
       const spell = item.enhancement + 1;
        return { ...item, enhancement: spell};
    },

    fail: (item) => {

    },

    repair: (item) => {

        return{ ...item, durability: 100}
    }
}

