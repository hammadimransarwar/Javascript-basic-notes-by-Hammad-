//data types are of two types based on the memeory:
/*
-----------------------|
1. Primitive Data Types|
-----------------------|
These are "call by value" types. When you copy them, you get a copy of the actual data, not a reference to the original memory location. Changes made to the copy do not affect the original.

+++++7 catergories of primitive data types in JavaScript:
-->String
-->Number
-->Boolean (true/false)
-->Null (represents an empty value; it is explicitly empty, not zero)
-->Undefined (a variable declared but not yet assigned a value)
-->Symbol (used to make values unique)
-->BigInt (used for very large integers)
*/


/*
-------------------------------------------------|
2. Reference Data Types(Non-Primitive data types)|
-------------------------------------------------|\
These are "reference" types. When you assign them to a variable, you are working with a direct reference to the memory location where they are stored.
The main categories are:
-->Arrays
-->Objects
-->Functions
*/

//js is dynamically typed language, which means you don't have to declare the data type of a variable when you create it. The data type is determined automatically based on the value assigned to the variable.



//----------------------------------------------------Memory Allocation in JavaScript----------------------------------------------------
let a=10;
let b=a;
console.log(b);
console.log(a);
b=9;
console.log(b);
console.log(a);
//primitive->stack

let user_Profile= {
    user:"hammad",
    email :"hammad@gmail.com"
};
let another_user=user_Profile;
another_user.user="ali";
console.log(user_Profile);
//changed=heap

