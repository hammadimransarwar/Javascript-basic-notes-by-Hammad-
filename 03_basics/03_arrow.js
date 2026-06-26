// const user={
//     name:"Hammad Imran",
//     class:12,
//     age:20,
//     welcome_user:function(){
//         console.log(`${this.name},Welcome to our site`)
//         //this refers to scope within the block
//         console.log(this);
//     }
// }
// user.welcome_user();
// //but in the editor if i write this outside the function
// console.log(this); //it will return empty object but in browser it willl return a window object.

// function chai() {
//     let username = "hitesh"
//     console.log(this.username); // Yeh "undefined" dega this does not work in func
// }
// //2 methid function
// const chai = function () {
// let username = "hitesh"
// console.log(this.username); // Yeh "undefined" dega this does not work in func
// }
console.log("--------------------------------------------------------arrow function")
console.log("Syntax:() => {}")
// const chai = () =>{
// let username = "hitesh"
// console. log(this);
// }
// chai();
//it gives undefined in this.username and {} object in this


const chai=() =>{
    let user_name="hammad"
    console.log(user_name);
}
chai()
function add_f(a, b) {
    return a + b;
}
//Explicit return
const addTwo_r_explicit = (num1, num2) => {
    return num1 + num2; // 
}
// if one line code called implicit return
const add_r_implicit = (a, b) => a + b;
//if parenthesis are used no use of return same as above implicit
const add_r_implicit_curly = (a, b) => (a + b); 
