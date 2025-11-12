//Spread operator in array

let  allFriends = ['Ram',];
let schoolFriends = ['Ajoy' , 'Bjoy', 'Sijoy'];
let collegeFriends = ['Kamal' , 'Jamal', 'Bimal'];

allFriends.push (...schoolFriends, ...collegeFriends);

console.log(allFriends);