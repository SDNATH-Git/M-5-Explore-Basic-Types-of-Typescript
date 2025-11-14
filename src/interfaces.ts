// Interfaces

interface user {
    name: string;
    age: number;
}

interface Employee extends user{
    employeeid:number;
    salary:number;
}

const emp: Employee={
    name:'Ajoy',
    age:23,
    employeeid:101,
    salary: 300000,
}

console.log(emp);