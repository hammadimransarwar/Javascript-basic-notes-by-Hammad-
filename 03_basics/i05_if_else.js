// let age=18;
// let Have_cnic=true;
// let have_Smart_id=false;
// if(age>=18 && Have_cnic){
//     console.log("User Can get a license")
// }
// else if(age<18 && Have_cnic){
// console.log("User Can get a temporary license")
// }
// else if(age<18 && have_Smart_id){
// console.log("User Can get a learning license")
// }
// else {
// console.log("You cant get a license")
// }

//comaparsion operator 
// ==,!=,>=,>,<=,<,====(strict equal chack datatypes and value and return true if both are same)
//!==(strict not equal) either datatype or value not same return true

//Logical/Combination Operator
//&&(and),(||) Or
//! not for reversing

///// -------------------------Nullish Coalescing Operator ( ?? )===>to handle null,undefined
//it is used to check if null assign other value and also in case of undefined
//if all are values then assiogn the first

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20
// console.log(val1);

//-----------------------------Terniary operator(If-else) not "if-elseif-else"
//synatax:
//Condition ? true:false
let age=18;
let IsAdult=age>18?true:false
let next_year_age=age?age+1:undefined
console.log(IsAdult);
console.log(next_year_age);