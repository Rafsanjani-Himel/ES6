/*

var name="John";
function test(){
    var name="Doe";  
}
test();
console.log(name); //output john

*/

/*
var name="John";
function test(){
    var name="Doe";
    console.log(name); //output doe
}
test();
*/

// var name="John";
// function test(){
//     var name="Doe";
//     console.log(name); //output doe
// }
// test();
// console.log(name); //output john


//check var is block scope or not------------

// if(true){
//     var age=24;
// }
// console.log(age); //output 24.so var is not block scope


//check let is block scope or not------------
// if(true){
//     let bd= "bangladesh"
// }
// console.log(bd);


//const variable declare----------------

// const year=10;
//       year=16;
//     console.log(year);

//const object can change------------

const user={name:"john"};
user.name="Doe";
console.log(user);