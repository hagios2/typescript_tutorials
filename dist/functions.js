"use strict";
function getSum(num1, num2) {
    return num1 + num2;
}
let mysum = function (num1, num2) {
    if (typeof num1 === 'string') {
        num1 = parseInt(num1);
    }
    if (typeof num2 === 'string') {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
function getName(firstname, lastname, middlename) {
    let name;
    if (middlename === undefined) {
        name = `${firstname} ${lastname}`;
    }
    else {
        name = `${firstname} ${middlename} ${lastname}`;
    }
    return name;
}
console.log(getName('Emmanuel', 'Wilson', 'Oteng'));
function testVoid() {
    return;
}
