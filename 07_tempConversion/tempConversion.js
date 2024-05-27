const convertToCelsius = function(org) {
  let newTemp = (org - 32) * (5/9);
  return roundNumber(newTemp, 1)
};

const convertToFahrenheit = function(org) {
  let newTemp = (org * (9/5) + 32);
  return roundNumber(newTemp, 1)
};

function roundNumber(number, digits) {
  var multiple = Math.pow(10, digits);
  var rndedNum = Math.round(number * multiple) / multiple;
  return rndedNum;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
