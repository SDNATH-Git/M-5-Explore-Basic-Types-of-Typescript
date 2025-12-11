// Constraint 
// node src/constraint.ts

function printValue<T extends object>(value: T){
    console.log(value);

}

printValue({name: "SD", age:23, job: "Developer" , ID : 123005});

// printValue(shuvo);                // ❌ error — object না

