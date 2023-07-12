let Person = {name: "Ahmad", age: 24, email: "ahmad@gmail.com"}


// Adding Properties to existing Object
const {name, age, email} = Person
console.log(email)


// Using ... to make a copy of the Existing Object Prototype and another properties
Person = {...Person, gender:"Male", profession:"Engineer", country:"Nigeria"}

console.log(Person)
