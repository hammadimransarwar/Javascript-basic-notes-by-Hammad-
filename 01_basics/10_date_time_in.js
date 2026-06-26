/*
Date:
--->JavaScript Date objects represent a single moment in time in a platform-
    independent format. Date objects encapsulate an integral number that
    represents milliseconds since the midnight at the beginning of January 1,
    1970, UTC (the epoch).
*/
let date=new Date();//so need to write new because its a non primitive data types and its type is object
//Primitives (like numbers) are like borrowing tools—JS handles them automatically—while Objects (like Date) are like owning a full toolkit that you must manually build using new.
// console.log("Simple: "+date);
// console.log("To string "+date.toString())
// console.log("To Datestring "+date.toDateString())
// console.log("To Iso String "+date.toISOString())
// console.log("To JSon "+ date.toJSON())
/*Think of it like taking a photo of a clock at a specific moment:
->toString(): Describing the entire scene, including the exact time, the day, the time zone, and your location.
->toDateString(): Just saying, "It's Wednesday, March 1st."
->toISOString() / toJSON(): Giving the exact technical timestamp (like a digital log file) that every computer system in the world understands instantly.
*/


// let mydate=new Date(2026,0,5,5,6);//when by digit then month starts at 0-11 and cann add time after 
// console.log(mydate.toDateString())
// console.log(mydate.toLocaleString());
// let mm_dd_yy=new Date("6-24-2026") //here month start at 1
// console.log(mm_dd_yy.toDateString());

console.log(Date.now()); //Tell the milliseconds January 1,1970
console.log(Math.floor(Date.now()/1000)) //to get in seconds