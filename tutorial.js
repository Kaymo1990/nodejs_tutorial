const sum = (num1, num2) => { return num1 + num2 };
const PI = 3.14;
class SomeObject {
    constructor() {
        console.log("Object created");
    }
}
module.exports.sum = sum;
module.exports.PI = PI;
module.exports.SomeObject = SomeObject;