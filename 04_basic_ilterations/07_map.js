//map :map the original array  elements to a new array and return it it is also a high order functiom
const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let new_arr=myNumers.map((num)=>num+1);
// console.log(new_arr);
// console.log(myNumers);

//==========================================================================================nesting
const newNums = myNumers
.map ( (num) => num * 10 )
.map( (new_nums) => new_nums + 1)
.filter( (num) => num >= 40)
console.log(newNums);