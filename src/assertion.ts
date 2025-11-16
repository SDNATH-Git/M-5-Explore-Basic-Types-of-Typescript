// Assention 

type user ={
    name:string,
    age:number,
}
const response = {} as user;
response.name = 'SD NATH';
response.age = 23;

let value:any = "hello";
let num = value as number ;

console.log(response, num);