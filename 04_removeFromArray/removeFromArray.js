const removeFromArray = function(array, ...toRemove) {
    
    let newArray = array.filter(element => 
        !toRemove.includes(element)
    )
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
