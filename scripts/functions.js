//@ts-check

let firstName = "Throngler";

let sayHi = function (firstName, age) {
    let greeting = `Hello! my name is ${firstName} and I am ${age} years old.`;
    console.log(greeting);
};

sayHi("Ian", 17);
sayHi(firstName, 21);

function add(a, b) {
    let answer = a + b;
    return answer;
}

console.log(add(100, 5000));

let runMyStuff = (x, y, f) => {
    let answer = f(x, y);
    return answer;
}

runMyStuff("JamesPatrick", 9, sayHi);