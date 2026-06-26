//---------------------------reducd
/*reduce method array ke saare elements ko jod kar (ya process karke) ek single value return karta hai.
=>Iske 2 main hisse hote hain:
=>Accumulator: Jo ab tak ka total result store karta hai.
=>Current Value: Jo array ka har element ek-ek karke uthata hai.
=>Aap ismein ek initialValue bhi set kar sakte hain, jahan se calculation shuru hoti hai.
Yeh shopping cart ke total price jaisa kaam karta hai, jahan aap har item ki price ko add karke ek final bill banate hain.
Short mein: reduce = Sabhi elements ko mila kar ek final result banana.*/

//syntax:
/*
array_name.reduce(function (accumulative,current value) {
    return accumulative + current value
} , value to start accumulative)


array_name.reduce((accumulative,current value) => {
    return accumulative + current value
} , value to start accumulative)
*/


let mynums=[1,2,4,5,5]
// let price=mynums.reduce(function (acc,curr) {
//     return acc+curr
// },0)
// console.log(price);



//2nd way arrow function
let price=mynums.reduce((a,c)=>{return a+c},0)
console.log(price);