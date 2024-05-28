const palindromes = function(str) {
    str = str.toLowerCase();
    const array = str.split("");
    const filtered = array.filter((c) => isAlpha(c) || isNumeric(c));
    const reversed = filtered.slice().reverse();
    if (filtered.join("") == reversed.join("")) {
        return true;
    }
    return false;
};

let isAlpha = function(ch){
    return typeof ch === "string" && ch.length === 1
        && (ch >= "a" && ch <= "z" || ch >= "A" && ch <= "Z");
}
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

// Do not edit below this line
module.exports = palindromes;
