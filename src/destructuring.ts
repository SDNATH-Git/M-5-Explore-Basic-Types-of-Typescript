// Destructuring Array
let fruits: string[]= ['mango', 'banana', 'apple'];
let [a,b,c] = fruits;

console.log(a);
console.log(b);
console.log(c);



// Destructuring Objects
const user ={
    name: "SD NATH",
    age : 22,
    address : "ctg, Bangladesh",
}

const {name, age, address}= user;
console.log(name);
console.log(age);
console.log(address);
