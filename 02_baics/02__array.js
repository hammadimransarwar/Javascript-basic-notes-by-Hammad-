let students_name_01=["Hammad","ALi","Rose"];
let students_name_02=["Dora","Adison","Trump"];
// students_name_01.push(students_name_02)
// console.log(students_name_01);
// console.log(students_name_01[3]);
// console.log(students_name_01[3][0]);
//Array accepts all  types of elemenst so do like array in exisiting array
//----------------array concat
// let student=students_name_01.concat(students_name_02);
// console.log(student);//now conacatinate the whole array instead of array on array

// let student=students_name_01+students_name_02;
// console.log(student)
// console.log(typeof student)
// //but for astring not array covert to string


//-------------//spread(....)
/*
What it does: "Spreads" the contents of an array into individual elements, allowing you to easily combine them or add new items at the same time.
Why it's better:
Flexibility: You can combine multiple arrays and add your own custom elements in one go.
Readability: It looks much cleaner in modern codebases
*/
// let student=[...students_name_01,...students_name_02];
// console.log(student);

///**************************flat 
// let array_not_flated=[1,2,3,4,[5,6,7],[8,9,[10,11]]];
// new_flat_aray_1=array_not_flated.flat(1) //we have to give depth 1 to infinity
// new_flat_aray_infi=array_not_flated.flat(Infinity) //we have to give depth 1 to infinity
// console.log(new_flat_aray_1);
// console.log(new_flat_aray_infi);

//Array.from() converts into array
//Array.isArray() checks if passed thing is array or not
console.log(Array.from("Hitesh")); //An existing collection (string, NodeList, Object)& converts that existing data into a new array.
console.log(Array.isArray("Hitesh"))
console.log(Array.of(1,4,5))//Separate individual items (variables, numbers) & bundles them together into one new array.