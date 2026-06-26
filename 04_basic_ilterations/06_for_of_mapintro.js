//for of loop
//syntax
/*
for (const element of object) { //Its not that particular Object whose type is null.This object is borader means array,string,etc and e
//element fetches the value at iletration of index
}
*/
let arr=[1,3,5,6,667,77,8]
for(const greet of arr){
//  console.log(greet);   
}
let str="Hello World"
for (const str_ele of str) {
    //console.log(str_ele);
}
//for loop work on ilteratable things like;Array, String, Map, Set, NodeList (DOM elements) but 
//does not work on the objects because objects are not ilterateable


//-------------------------------map
/*
=====>Map
-->The Map object holds key-value pairs and remembers the original
insertion order of the keys. Any value (both objects and primitive values)
may be used as either a key or a value.it is unique for keys
-->Map mein aap kuch bhi key bana sakte hain: Strings, Numbers, Booleans, Objects, yahan tak ki Functions bhi!
*/
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map. set('IN', "india") //In already ha no added
console.log(map)
console.log(typeof map)//object==nonprimitive 
for (const element of map) {
    console.log(element)
}//so insertion order always remain same
//to hold both key& val sep
for (const [key,value] of map) {
    console.log(key+':-'+value)
}//so insertion order always remain same

//