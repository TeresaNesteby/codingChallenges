// Write a function called oddball_sum which takes in a list of numbers and returns the sum of all the odd elements.

function oddBallSum(listOfNums) {
  var i = 0;
  var sumOfOdds = 0;
  for (i=0; i< listOfNums.length; i++ ) {
    if (listOfNums[i] % 2 !== 0) {
      sumOfOdds += listOfNums[i]
}
}
return sumOfOdds
  };

console.log(oddBallSum([3, 4, 2, 1, 7]));