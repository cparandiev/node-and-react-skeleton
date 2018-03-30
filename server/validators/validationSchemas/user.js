const { inLengthRange, inValueRange }  = require('../validationFunctions');

module.exports = {
    username: inLengthRange(3, 20),
    password: /^.{3,5}$/,  
    age: inValueRange(1, 100),
}

//     // name: minLength(4),
//     //lname: maxLength(3),
//     volume: inValueRange(1, 3),
//     foo: inLengthRange(1, 5),
//     //mname: inLengthRange(2,4),
//     username: /^.{3,5}$/,
//     password: /^.{3,5}$/,
//     age: /^([5-9]|[12][0-9]|3[0-5])$/,
//     cars: [carSchema]
// }