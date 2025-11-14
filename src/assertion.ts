// Assention 

type user ={
    name:string,
    age:number,
}
const response = {} as user;
response.name = 'sd';
response.age = 30;

let value:any = "hello";
let num = value as number ;

console.log(response, num);