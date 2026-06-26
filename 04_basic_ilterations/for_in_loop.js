//for in loop-->it gives keys instaead of elements so run on objects
//syntax
/*for (const key in object) {    
}*/

const myObject = {
js: 'javascript',
cpp: 'C++',
rb: "ruby",
swift: "swift by apple"
}
for(const key in myObject){
console.log(key);//it gives key ks,cpp etc
}
for(const key in myObject){
    console.log(myObject[key]) //go to my object at that key give me that value simple
}
for(const key in myObject){
    console.log(`${key} value is ${myObject[key]}`) //go to my object at that key give me that value simple
}

//now can run for array but instead of values gives the keys/indexes
let array=[1,2,45,5]
for (const key in array) {
    console.log(key)
}