//Spread operator in array

let  allFriends = ['Ram',];
let schoolFriends = ['Ajoy' , 'Bjoy', 'Sijoy'];
let collegeFriends = ['Kamal' , 'Jamal', 'Bimal'];

allFriends.push (...schoolFriends, ...collegeFriends);

console.log(allFriends);

//Spread operator in object

let user = {
    name: 'SD NATH',
    age: 22,
    address: 'ctg,Bangladesh',
}
let jobDetails ={
    position : "Web Developer",
    company : "PH",
    salary : 25000,
}

const allInfo ={...user, ...jobDetails};
console.log(allInfo);
