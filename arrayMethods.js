const fruits = ["Banana", "Apple", "Mango", "Grapes", "Pineapple", "Cashew", "Blueberry"]

const vegetables = ["Onion", "Carrot", "Lettuce", "Tomatoe", "Garlic", "Spinach"]

const colorString = "RedOrangeYellowGreenBlueIndigoViolet"

const abbrString = "ROYGBIV"

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]



// .Length Method.......returns the number of elements in an array.
console.log(fruits.length)
console.log(numbers.length)


// Last Element...........returns the LAST elements in an array....Array[Array.length - 1];
 let lastElement = fruits[fruits.length - 1];
 console.log(lastElement);


// Push() method...................adds new items to the end of an array.
fruits.push("RapsBerry")
console.log(fruits);

fruits[fruits.length] = "Orange"
console.log(fruits)


// toString() method Conversion....... returns a string with array values separated by commas.
let string = fruits.toString()
console.log(string);


// join method....................returns an array as a string.
let joinedArray = fruits.join(" | ")
console.log(joinedArray);



// pop method....................Remove Last Element..... removes (pops) the last element of an array.
let poppedArray = fruits.pop();
console.log(poppedArray);
console.log(fruits)



// push method..................Add Element at the End of the Array.....adds new items to the end of an array.
let pushedArray  = fruits.push("Kiwi")
console.log(pushedArray)
console.log(fruits)



// shift Method......................Remove the First Element of an Array....removes the first item of an array.
let shiftArray = fruits.shift();
console.log(shiftArray);
console.log(fruits);



//unshift Method...................Add Element at the Beginning of an Array..... new elements to the beginning of an array.
let unshiftArray = fruits.unshift("Lemon")
console.log(unshiftArray)
console.log(fruits)


// concat Method....... concatenates (joins) two or more arrays.
let fruitsVegetables = fruits.concat(vegetables)
console.log(fruitsVegetables)

let fruitsVegetablesNumbers = fruits.concat(vegetables, numbers)
console.log(fruitsVegetablesNumbers)



// Splice Method....Add Elements to indexes.......adds and/or removes array elements.
fruits.splice(2, 0, "Melon", "Avocado")
console.log(fruits)


//Slice Method......Remove Element from indexes.......returns selected elements in an array, as a new array.
fruits.slice(0, 2)
console.log(fruits)


// Sort Method................sorts the elements as strings in alphabetical and ascending order.
let sortedArray = vegetables.sort();
console.log(sortedArray)


// reverse Method...............method reverses the order of the elements in an array.
let reversedArray = vegetables.reverse()
console.log(reversedArray)



// ForEach Method..............method calls a function for each element in an array.
fruits.forEach(myFunction)
function myFunction(value) {
    console.log(value);
}

// Map Method....creates a new Array........creates a new array from calling a function for every array element.
let mappedArray =  numbers.map(multiplierFunction)
console.log(mappedArray)
function multiplierFunction(value){
    return value * 5;
}


// filter method......run a test for all array values........method creates a new array filled with elements that pass a test provided by a function.
let filteredArray = numbers.filter(filterFunction)
console.log(filteredArray)

function filterFunction(value){
    return value > 5;
}


// reduce Method.......................find the sum of all values, method executes a reducer function for array element, method returns a single value: the function's accumulated result.
let summedValue = numbers.reduce(reducedFunction)
console.log(summedValue)
function reducedFunction(total, value){
    return total + value;
}


// reduceRight Method..............find the sum of all values... method works from right to left, method executes a reducer function for each array element.
let summedValueRight = numbers.reduceRight(reducedFunction)
console.log(summedValue)
function reducedFunction(total, value){
    return total + value;
}


// every method....run a test for all array values......method executes a function for each array element, method returns true if the function returns true for all elements.
let testResultEvery = numbers.every(greaterThanFourFunction)
console.log(testResultEvery)
function greaterThanFourFunction(value){
    return value > 4;
}


// Some method....run a test for some array values....method checks if any array elements pass a test (provided as a callback function).
let testResultSome = numbers.some(greaterThanSixFunction)
console.log(testResultSome)
function greaterThanSixFunction(value){
    return value > 6;
}


// indexof method....returns -1 if item position is not found........method returns the first index (position) of a specified value.
let position = fruits.indexOf("Mango")
console.log(position);



// Lastindexof method....returns last occurence item position, the same as indexof method.....method returns the last index (position) of a specified value.
let lastIndexPosition = fruits.lastIndexOf("Mango")
console.log(lastIndexPosition);


//find method.....return first value that passes the test.......method returns the value of the first element that passes a test.
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


// Array.from method....return an array from stirng.......Array.from() method returns an array from any object with a length property.

let returnedArrayString1 = Array.from(colorString)
console.log(returnedArrayString1)

let returnedArrayString2 = Array.from(abbrString)
console.log(returnedArrayString2)


// keys() Method.....return the key indexes of the array elements.....method returns an Array Iterator object with the keys of an array.
let keys = vegetables.keys()
for (let x of keys) {
    console.log(x)
}



// entries() Method.....return the key/value pairs of the array elements......returns an Array Iterator object with key/value pairs:
let keyValuePairs = vegetables.entries()
for (let y of keyValuePairs) {
    console.log(y);
}


// includes Method....return boolean value......returns true if an array contains a specified value.
let answer = vegetables.includes("Apple")
console.log(answer)

let answer2 = fruits.includes("Apple")
console.log(answer2)


// constructor Method....return the function that creates the array prototype....... returns the function that created the Array prototype.
let constructorFunction = vegetables.constructor;
console.log(constructorFunction)


//copywithin function.......copies array elements to another position in the array.
let coppiedArray = vegetables.copyWithin(3, 0)
console.log(coppiedArray)

let coppiedArray2 = fruits.copyWithin(2, 0, 2)
console.log(coppiedArray2)



// .isArray Method..check weather an object is an Array, return Boolean.......returns true if an object is an array, otherwise false.
let checkTest = Array.isArray(numbers)
console.log(checkTest)

let checkTest2 = Array.isArray(colorString)
console.log(checkTest2)



// ValueOf method....... returns the array itself......returns the array itself.
let ArrayValue = vegetables.valueOf()
console.log(ArrayValue)


