const sumAll = function(n1, n2) {
    if (typeof(n1) != 'number' || typeof(n2) != 'number') {
        return 'ERROR';
    }
    if (n1 < 0 || n2 < 0) {
        return 'ERROR';
    }

    finalSum = 0;
    if (n1 > n2) {
        for (i = n2; i <= n1; i++) {
            finalSum += i;
        }
    }
    else {
        for (i = n1; i <= n2; i++) {
            finalSum += i;
        }
    }
    
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
