const person1 = {
    name:"Ammu",
    age:40,
    country:"Bangladash",
    status:"housewife"
}
console.log(Object.freeze(person1));
person1.country="US";
// console.log(Object.seal(person1));
person1.salary=1000;



// console.log(Object.keys(person1));
// console.log(Object.entries(person1));
