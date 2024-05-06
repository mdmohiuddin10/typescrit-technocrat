"use strict";
// learning function
// normal function
function add(num1, num2) {
    return num1 + num2;
}
add(2, 45);
// arrow function
const addArrow = (num1, num2) => num1 + num2;
// object -> functin -> method
const poorUser = {
    name: "mohiuddin",
    balance: 0,
    addBalance(balance) {
        return this.balance + balance;
    }
};
const arr = [1, 2, 5, 67];
const newArray = arr.map((elem) => elem * elem);
console.log(newArray);
