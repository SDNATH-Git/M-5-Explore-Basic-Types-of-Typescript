// Constraint 

function printValue<T extends object>(value: T){
    console.log(value);

}

printValue({name: "SD", age:23});