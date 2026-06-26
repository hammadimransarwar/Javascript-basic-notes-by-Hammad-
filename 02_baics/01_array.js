let arr=[1,2,3,4,5,6];
let heros=["Ironman","Spiderman","batman"]
// let new_arr=new Array(1,4,5,6,7)
// console.log(arr);
// console.log(heros[2]);//batman[2]
// console.log(new_arr);
////////////////////////////////////////////////Methods

// arr.push(0);
// arr.push(4);
// console.log(arr);
// arr.pop()
// arr.unshift(10);
// console.log(arr)
// arr.shift();
// console.log(arr);

/*
->push() adds a new element to the end of the array.
->pop() removes the very last element from the array

->unshift() adds a new element to the beginning of the array.
->shift() removes the first element from the beginning of the array.
*/


//join
//It takes all the elements inside an array and binds them together into a single string.
// let arr_01=[1,2,4,5,6.7]
// console.log(arr_01)
// console.log(arr_01.includes(9))
// console.log(arr_01.indexOf(19));//19 not present so return -1
// console.log(arr_01.indexOf(1));//1  present so return 0 index
// let arr_bind=arr_01.join();
// console.log(arr_01);
// console.log(arr_bind);
// console.log(typeof arr_bind)

//slice,splice
/*
-->1. slice()
What it does: It extracts a portion of an array and returns it as a new array.
Does it change the original? No. The original array stays exactly as it was.
Think of it as: A "copy-paste" tool. It grabs a slice of data without damaging the source.

-->2. splice()
What it does: It manipulates the original array by removing, replacing, or adding elements at a specific index.
Does it change the original? Yes. It permanently modifies the original array.
Think of it as: A "surgery" tool. It cuts into the actual array to take things out or put new things in.
*/
let arr_02=[1,2,3,4,5,6];
//slice abd splice
let new_arr_slice=arr_02.slice(0,2)
console.log("original",arr_02);
console.log("sliced",new_arr_slice); //copy 0 and 1 index in new_arr
let new_arr_splice=arr_02.splice(1,3)
console.log("original",arr_02);
console.log("spliced",new_arr_splice); 
/*
1. slice(start, end) (The "Copy" Tool)
Goal: Use this when you want to extract data without affecting the original array.

Example: let copy = arr.slice(1, 3);

It grabs items at index 1 and 2, but ignores index 3.

The original arr stays exactly as it was.

2. splice(start, count) (The "Surgery" Tool)
Goal: Use this when you need to remove items from the original array or add new ones in their place.

Example: let removed = arr.splice(1, 3);

It physically removes 3 items starting from index 1.

The original arr is now permanently smaller.

The removed variable now holds the "deleted" pieces.

Pro-Tip for Memory:

Slice is like a Slicer (a knife that cuts a piece of bread, leaving the loaf intact).

Splice is like Surgery (you are taking something out of the body; the original entity is permanently altered).
*/