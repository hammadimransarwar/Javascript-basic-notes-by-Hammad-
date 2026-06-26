let score=33;
console.log("-__********************************Number conversion********************************__-");
console.log(typeof score);
console.log("--");
console.log(typeof(score));
//but during backened or sometime we dont know what type of score arrived it may be "33" or 33 so we can convert it to number using Number() function
let score_number=Number(score);
//guranteed to be a number now
console.log("Now if string are converted to number then some cases may be NaN(Not a Number) if the string is not a valid number otherwise coverted");
console.log(typeof score_number);
let score_string1="33"
console.log(typeof score_string1);
let score_string1_number=Number(score_string1);
console.log(score_string1_number);
let score_string2="33abc"
let score_string2_number=Number(score_string2);
console.log(score_string2_number); //NaN(not a number)
console.log("What happened if the null is converted to number");
let null_number=Number(null);
console.log(null_number);
//it gives 0 because null is considered as 0 in number conversion
console.log("What happened if the undefined is converted to number");
let undefined_number=Number(undefined);
console.log(undefined_number);
//it gives NaN because undefined is not a valid number
 
/*
Summary:
1. We can convert string to number using Number() function.
2. If the string is a valid number then it will be converted to that number otherwise it will be NaN.
3. Null is considered as 0 in number conversion.
4. Undefined is not a valid number and it will be converted to NaN.
*/

console.log("_---------------------------String conversion---------------------------_");
let score_int=33;
let score_string=String(score_int);
console.log(score_string);
console.log(typeof score_string);
//if we convert null to string then it will be "null" same for undefined it will be "undefined"
let null_string=String(null);
console.log(null_string);
console.log(typeof null_string); 
/*
summary:
1. We can convert number to string using String() function.
2. If we convert null to string then it will be "null" same for undefined it will be "undefined".   
3.number will be converted to string and it will be the same number but in string forma and has type of string.
*/
console.log("-____________________________________Boolean conversion__________________________-");
let score_zero=0;
let score_boolean=Boolean(score_zero);
console.log(score_boolean); 
//it gives false because 0 is considered as false in boolean conversion
let score_non_zero=33;
let score_non_zero_boolean=Boolean(score_non_zero);
console.log(score_non_zero_boolean);
//it gives true because any non zero number is considered as true in boolean conversion
let empty_string="";
let empty_string_boolean=Boolean(empty_string);
console.log(empty_string_boolean);  