// function saymyname(){
// console.log("H")
// console.log("A")
// console.log("M")
// console.log("M")
// console.log("A")
// console.log("D")
// }

// saymyname //gives yor refernece nothning happened
// saymyname() //gives you the execeution


//dont need to speacify the type of paramters in js
// function addtwonumbers(num1,num2){
//     return num1+num2
// }
// let res=addtwonumbers(1,78);
// console.log("Result",res)

//now can give default values to a function
function addtwonumbers(num1=0,num2=0){
    return num1+num2
}
let res=addtwonumbers()
console.log(res);

///----------------------------------------------spread/ 'rest'(...)
function addtocart(...obj){  //... called rest here it packed everything nto array like you cand add as much values you neded
    return obj
}
console.log(addtocart(11,13,353,24,3,4454))