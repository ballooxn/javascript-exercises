const fibonacci = function(n) {
    n = +n; //turn n into a number
    if (n < 0) return "OOPS";
    if (n === 1) return 1;
    // Make an array, defining the first and second number to be 0,1
    // Loop up to n.
    // next number in the array is the sum of i-1 and i-2
    let array = [0,1];
    
    for (let i = 2; i <= n; i++) {
        array.push(array[i-1]+array[i-2]);
    }
    return array[n];
};

// Do not edit below this line
module.exports = fibonacci;
