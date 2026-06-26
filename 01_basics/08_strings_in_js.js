let name="Hammad";
let age=20;
console.log("My name is "+ name +"& Age is "+ age); 
//another way
console.log(`My name is ${name} & Age is ${age}`);
//This is called string interpolation is a process that allows you to insert variables or expressions directly into a string without having to break it up using messy plus signs (+) for concatenation.
/*
. The Backticks (`)
Instead of using single quotes (') or double quotes ("), you wrap the entire text in backticks. This defines what JavaScript calls a Template Literal.

2. The Placeholders (${...})
Inside those backticks, whenever you want to drop in a variable, you wrap it in a dollar sign and curly braces: ${variableName}.
*/
console.log(name.toLowerCase())
console.log(name.charAt(4)); //hamm a d
console.log(name.indexOf('d')) //hamma d
let full_name="M Hammad Imran"
let first_name=full_name.substring(2,9);
console.log(first_name);
let last_name=full_name.substring(-6,14);
console.log(last_name);
//it ignore negative values in substring method and makes 0->14
//slice method
let f_name_slice=full_name.slice(2,9)
let l_name_slice=full_name.slice(-6,14)
console.log(f_name_slice);
console.log(l_name_slice);
//it takes negative values in slice method and makes 14-6=8 start and end at 14 and start<end otherwise it will return empty string 
let error_empty=full_name.slice(-8,3)
console.log("Error empty: "+error_empty) //it will return empty string because start is greater than end
let explain_=full_name.slice(-13,5)
console.log("explained "+explain_)
//14-13=1 1->5 M "Hamm"ad Imran(0 123456) and end is not included
let code="hitesh-hc"
console.log(code.slice(-8,4));
//9-8=1 1->4 itesh h is 4 not included


//trim to trim spaces extra from start & end
f_trim="     M   Hammad Imran   "
console.log(f_trim)
console.log(f_trim.trim())
//replace one more method to replace and includes
console.log(f_trim.replace('Hammad','-'));
console.log(f_trim.includes("M"));
console.log(f_trim.includes("N"));