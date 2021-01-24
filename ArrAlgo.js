//Algorithm Practice

// 1. Print Values and sum
// Print each array value and the sum so far
var testArr = [6,3,5,1,2,4];
//print vals and sum;
// sum = 0;
// for(var i = 0; i < testArr.length; i++){
//     sum += testArr[i];
//     console.log('value:', i, 'sum:', sum);
// }

//Value * Position
//2. Multiply each value in the array by its array position
for(var i=0; i<testArr.length; i++){
    testArr[i] = testArr[i] * i;
}
console.log(testArr);


