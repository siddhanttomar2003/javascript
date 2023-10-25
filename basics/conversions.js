// we can also convert anydata type into another
// let score="313"
// console.log(typeof score);
// let converteddatatype=Number(score)
// console.log( typeof converteddatatype);
// we can also convert a number to boolean
let score=1
let test=Boolean(score)
// console.log(test);
// console.log(typeof test);
//->empty string gives 0 in boolean
let nam=""
let convert=Boolean(nam)
// console.log(convert);
// console.log(typeof convert);
//while unempty string gives 1 in boolean
//sometimes it also shows NAN if we tries to convert a datatype which can not be convertes in to a number

console.log("2"+2);
//NOTE-> JS  allows to use different datatype in between operators so we need to be careful in using this
console.log("2"<1);
console.log("2"==2);//here it will return true bcz it will convert string to no. 
// for strict check we have to use the === operator which checks for same datatype also
console.log("2"===2);


