// array, any , tuple, enum , void, null, undefined, never

//array

let fruits = ['mango','banana', 'apple',232];
fruits.push(12);

//tuple
let person:[string,number,boolean] =['SD',22, true];
person.push(2222);


// Object
let user:{
    firstName:string,
    middleName?:string,
    lastName:string,
    age:number,
    isStudent:boolean,
} = {
    firstName: "SD",
    lastName: "Nath",
    age: 22,
    isStudent: true,
}

console.log(user);

//function as type