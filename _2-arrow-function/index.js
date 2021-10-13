//system one to use function in js-------------

// function multiply(x,y){
//     return (x * y);
// }
// console.log(multiply(20,5));



//system two to use function in js-------------named function expression

// var multiply=function(x,y){
//     return x*y;
// }
// console.log(multiply(16,5));

// arrow function using system----------------

// const multiply = (x,y) =>{         //(=>)this sign means fat arrow or arrow function
//     return x*y;
// }
// console.log(multiply(12,4)) ;  




// let add= (x,y,z) =>{
//     return x+y+z;
// }
// console.log(add(3,45,5));

// const div= (x,y) =>{
//     return x/y;
// }
// console.log(div(40,5))

//implecit arrow clean code
// const sub = (x,y) => x - y; //without using curly bracket;
// console.log(sub(4, 2));

// let a = x => x;
// console.log(a(10));

//id and name using setNameId function in normal js

// function setNameId(id,name){
//     return{
//         id: id,
//         name: name
//     }
// }
// console.log(setNameId(1334,"Rafsanjani"));

//clean code using arrow function
const setNameId = (id,name) => ({id: id, name:name});
console.log(setNameId(2,"himel"));
