//Immediately Invoked Function Expression
//IIFE ek aisa function hai jo likhte hi turant execute (run) ho jata hai. Ise alag se call karne ki zaroorat nahi padti.
/* IIFE ka Syntax
IIFE likhne ka tarika thoda alag hai:
Sabse pehle aap function ko ek round bracket () mein wrap karte hain.
Uske baad turant ek()
()()
Iska sabse imp point yeh hai ki iske syntax ke end mein hamesha semicolon (;) lagana zaroori hai, warna JavaScript agli line ke saath confuse hokar error de deta hai.
()();
*/
/*
Kyun use karte hain? 
==>Global Scope Pollution se bachne ke liye: Iske variables bahar ke code ke saath nahi takrate.
==>Data Privacy: Iske andar ka code kisi aur ko access nahi karne deta.
*/
(function say_hello(){
    //Named IIFI
    console.log("Print Hello");
})();
((username) =>{
    //IIFI
    console.log(`Hello User,${username}`)
})("Hammad")