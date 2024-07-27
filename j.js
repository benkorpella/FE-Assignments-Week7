/* 1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

  Programmatically subtract the value of the first element in the array from the value in the last element of the array.
    Do not use numbers to reference the last element, find it programmatically.
    ages[7] - ages[0] is not allowed!
  Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
  Use a loop to iterate through the array and calculate the average age. */

var arr1 = [3, 9, 23, 64, 2, 8, 28, 93]                      //  Initialize array with array literal

console.log("1A: ", arr1[arr1.length-1] - arr1[0]);          //  Use array property `length` to find the last element

arr1.push(21)                                                //  Use arrry method `push` to add an element to the end

console.log("1B: ", arr1[arr1.length-1] - arr1[0]);          //  Subtract 1 since js arrays are zero-indexed

var total1 = 0                                               //  Initialize integer with int literal

arr1.forEach(age => {                                        //  Use arrry method `forEach` to loop over each element
  total1 += age                                              //  Use Addition Assignment Operator to add age to total 
})                                                           //  Equivalent to total1 = total1 + age

console.log("1C: ", total1);

console.log()

/* 2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.

  Use a loop to iterate through the array and calculate the average number of letters per name.
  Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. */

var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']  //  Initialize array with array literal

console.log("2A: ", names.reduce((accu, curr) => {           // Use arrry method `reduce` to loop over each element
  return accu + curr.length                                  // On each loop, add the length of each name to a running total
}, 0) / names.length)                                        // After the loop, divide the total by the number of names

console.log("2B: ", names.reduce((accu, curr) => {           // Use arrry method `reduce` to loop over each element
  return `${accu} ${curr}`                                   // On each loop, use a template literal to return the running 
}))                                                          //   total and current name seperated by a space
console.log()

// 3. How do you access the last element of any array?

console.log("3: ", "array[array.length-1]")                  // Use array.length - 1 since js arrays are zero-indexed

console.log()

// 4. How do you access the first element of any array?

console.log("4: ", "array[0]")                               // The first element is at index 0

console.log()

/* 5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array 
      and add the length of each name to the nameLengths array.

  For example:
    let names = ["Kelly", "Sam", "Kate"];    // starting with this array
    let nameLengths = [5, 3, 4];             // create a new array */

let nameLengths = names.map(      // Use arrry method `map` to loop over each element
  name => name.length             // On each loop, the function is executed and the return 
)                                 //   value is added to a new list that is returned by map
console.log("5: ", nameLengths)

console.log()

// 6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.

console.log("6: ", nameLengths.reduce((accu, curr) => {     // Use arrry method `reduce` to loop over each element
  return accu + curr                                        // On each loop, add the length of each name to a running total
}, 0))

console.log()

// 7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to 
//    itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').

function repeatWords(word, n) {     // Define a function with the function operator
  let out = ''                      // Define a variable scoped to this function
  for (i=0;i<n;i++){                // Loop through the values from 0 to n
    out += word                     // Concatenate the word onto the running value
  }
  return out                        // Return the variable
}

console.log("7: ", repeatWords("Bruh", 15));

console.log()

// 8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be 
//    the first and the last name separated by a space.

function combineName(firstName, lastName) {      // Define a function with the function operator
  return `${firstName} ${lastName}`              // Use a template literal to return full name
}

console.log("8: ", combineName("Ben", "Korpella"));

console.log()

// 9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array 
//    is greater than 100.

function isSumLarge(arr) {                     // Define a function with the function operator
  let sum = arr.reduce((accu, curr) => {       // Use arrry method `reduce` to loop over each element
    return accu + curr                         // On each loop, add number to a running sum
  })
  return sum > 100                             // After the loop, if the sum is greater than 100, return true 
}                                              // otherwise return false

console.log("9A: ", isSumLarge([1,2,3]));
console.log("9A: ", isSumLarge([60,52,657]));

console.log()

// 10. Write a function that takes an array of numbers and returns the average of all the elements in the array.

function getAverage(arr) {                     // Define a function with the function operator
  let sum = arr.reduce((accu, curr) => {       // Use arrry method `reduce` to loop over each element
    return accu + curr                         // On each loop, add number to a running sum
  }) 
  return sum / arr.length                      // After the loop, divide the sum by the number of values to get the average
}

console.log("10: ", getAverage([1,5,8]))

console.log()

// 11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first 
//     array is greater than the average of the elements in the second array.

function compareAverages(arr1, arr2) {         // Define a function with the function operator
  average1 = getAverage(arr1)                  // Call the prevoiusly defined function `getAverage` to get the average of arr1
  average2 = getAverage(arr2)                  // Call the prevoiusly defined function `getAverage` to get the average of arr2
  return average1 > average2                   // If the average1 is greater than average2, return true otherwise return false
}

console.log("11A: ", compareAverages([1,3,3,3,3,3,3,3,3], [60,52,657]))
console.log("11B: ", compareAverages([1,5,8,999], [1,2,3]))

console.log()

// 12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and 
//     returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink(isHotOutside, moneyInPocket) {   // Define a function with the function operator
  return isHotOutside && moneyInPocket > 10.5          // isHotOutside must be true and moneyInPocket must be greter than 10.5
}

console.log("12A: ", willBuyDrink(true, 15))
console.log("12B: ", willBuyDrink(false, 1000000))
console.log("12C: ", willBuyDrink(true, .01))
console.log("12D: ", willBuyDrink(false, 3))

console.log()

// 13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

/*

Problem: Fog machine is either on or off; it can't be run at half output. 

Solution: Pulse the output; on for a certain time, off for a certain time.

percentToTime is a function to calculate how long the on time and off time need to be in order to reach the desired average on time.

Params:
    percent is the avereage amount of time you want the fog to be on. Required.
    cycleTime is how long an on/off cycle lasts in minutes. Optional. Defaults to 5 minutes.

Return value: 
    A string with the on time and off time in minutes and seconds.
*/

function percentToTime(percent, cycleTime=5) {        // Type checking
  if (typeof percent != "number" ||                   // percent must be a number
      percent < 0 ||                                  // percent must be greater than 0
      percent > 100 ||                                // percent must be less than 100
      typeof cycleTime != "number" ||                 // cycleTime must be a number
      cycleTime < 0 ) {                               // cycleTime must be greater than 0
    return "percent must be a number between 0 and 100 and cycleTime must be a number greater than 0"     
  }                                                   // Return an error message and exit the function
  
  percent = percent / 100                             // Divide by 100 to get a float
  cycleTime = cycleTime * 60                          // Multiply by 60 to convert minutes to seconds
  
  let onSeconds = cycleTime * percent                 // Multiply the total time by the percent to get the on time in seconds
  onSeconds = Math.round(onSeconds)                   // Round to the nearest whole second to avoid .999999997 seconds
  let onMinutes = Math.floor(onSeconds / 60)          // Divide the on time by 60 and round down to get the minutes
  let onMinutesRemainder = onSeconds % 60             // Use the Modulo Operator to get the number of extra seconds
  
  let offSeconds = cycleTime - onSeconds              // Subtract the on time from the total time to get the off time in seconds
  let offMinutes = Math.floor(offSeconds / 60)        // Divide the off time by 60 and round down to get the minutes
  let offMinutesRemainder = offSeconds % 60           // Use the Modulo Operator to get the number of extra seconds
  
  return `${percent*100}% On time: ${onMinutes}m${onMinutesRemainder}s (${onSeconds}s), Off time: ${offMinutes}m${offMinutesRemainder}s (${offSeconds}s)`
}                                                     // Use a string template literal to present the results

console.log("13A: ", percentToTime(50))
console.log("13B: ", percentToTime(100))
console.log("13C: ", percentToTime(27))
console.log("13D: ", percentToTime(33.33, 10))
console.log("13E: ", percentToTime("banana"))
