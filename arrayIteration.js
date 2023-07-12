const fruits = ["Banana", "Apple", "Mango", "Grapes", "Pineapple", "Cashew", "Blueberry"]

const vegetables = ["Onion", "Carrot", "Lettuce", "Tomatoe", "Garlic", "Spinach"]

const colorString = "RedOrangeYellowGreenBlueIndigoViolet"

const abbrString = "ROYGBIV"

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]


// ForEach Method
fruits.forEach(myFunction)
function myFunction(value) {
    console.log(value);
}

// Map Method....creates a new Array
let mappedArray =  numbers.map(multiplierFunction)
console.log(mappedArray)
function multiplierFunction(value){
    return value * 5;
}


// filter method......run a test for all array values 
let filteredArray = numbers.filter(filterFunction)
console.log(filteredArray)

function filterFunction(value){
    return value > 5;
}


// reduce Method.......................find the sum of all values
let summedValue = numbers.reduce(reducedFunction)
console.log(summedValue)
function reducedFunction(total, value){
    return total + value;
}


// reduceRight Method..............find the sum of all values
let summedValueRight = numbers.reduceRight(reducedFunction)
console.log(summedValue)
function reducedFunction(total, value){
    return total + value;
}


// every method....run a test for all array values
let testResultEvery = numbers.every(greaterThanFourFunction)
console.log(testResultEvery)
function greaterThanFourFunction(value){
    return value > 4;
}


// Some method....run a test for some array values
let testResultSome = numbers.some(greaterThanSixFunction)
console.log(testResultSome)
function greaterThanSixFunction(value){
    return value > 6;
}


// indexof method....returns -1 if item position is not found
let position = fruits.indexOf("Mango")
console.log(position);



// Lastindexof method....returns last occurence item position, the same as indexof method
let lastIndexPosition = fruits.lastIndexOf("Mango")
console.log(lastIndexPosition);


//find method.....return first value that passes the test
let returnValue = numbers.find(testFunction)
console.log(returnValue)
function testFunction(value){
    return value > 8;
}

//findIndex method.....returns the index of the first value that passes the test
let returnValueIndex = numbers.findIndex(testFunction)
console.log(returnValueIndex)
function testFunction(value){
    return value > 8;
}


// Array.from method....return an array from stirng

let returnedArrayString1 = Array.from(colorString)
console.log(returnedArrayString1)

let returnedArrayString2 = Array.from(abbrString)
console.log(returnedArrayString2)


// keys() Method.....return the key indexes of the array elements
let keys = vegetables.keys()
for (let x of keys) {
    console.log(x)
}



// entries() Method.....return the key/value pairs of the array elements
let keyValuePairs = vegetables.entries()
for (let y of keyValuePairs) {
    console.log(y);
}


// includes Method....return boolean value 
let answer = vegetables.includes("Apple")
console.log(answer)

let answer2 = fruits.includes("Apple")
console.log(answer2)
