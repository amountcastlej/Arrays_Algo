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


//3. Always Hungry
//Write a function that is given an array and each time the value is "food" it should console.log "yummy". If "food" was not present in the array console.log "I'm hungry" once
function alwaysHungry(arr){
    var foodCount = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] == "food"){
            console.log("yummy")
            foodCount++;
        }
    }
    if (foodCount == 0){
        console.log("I'm hungry")
    }
}
//alwaysHungry([3.14, "food", "pie", true, "food"]);
//alwaysHungry([4, 1, 5, 7, 2]);

//4. High pass Filter
// Given an array and a value cutoff, return a new array containing only the values larger than cutoff

function highPass(arr, cutoff){
    var filteredArr = [];
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > cutoff){
            filteredArr.push(arr[i]);
        } else {
            continue;
        }
    }
    return filteredArr; 
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result);

//5. Better Than Average
// Given an array of numbers return a count of how many of the numbers are larger than average
function betterThanAverage(arr){
    var sum = 0;
    for (var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    var avg = sum / arr.length;
    console.log(avg)
    var count = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > avg){
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result)

function flatten(arr){
    var newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i][0]){
            for(let j=0; j < arr[i].length; j++){
                newArr.push(arr[i][j])
            }
        }
        else {
            newArr.push(arr[i])
        }
    }
    return newArr
}
var myArr = [1, [2,3], 4,[]]
console.log(flatten(myArr))