//@ts-check

//let firstName = "Ian";

let sayHi = function (f, a) {
    let firstName = f;
    let age = a;
    let greeting = `Hello! my name is ${firstName} and I am ${age} years old.`;
    console.log(greeting);
};

sayHi();