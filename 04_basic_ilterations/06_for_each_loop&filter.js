//forEach ek Higher Order Function hai. Iska matlab hai ki ise apna kaam karne ke liye ek "callback function" chahiye hota hai
//Hindi
/*
Aap ise aise dekhein:

forEach ek "machine" hai jo array ke har item ko pakadti hai.

Callback function woh "instruction" hai jo aap us machine ko dete hain ki "har item ke saath kya karna hai".
*/
//syntax
/*
array_name.Foreach(Callback func)
*/

const coding = ["js", "ruby", "java", "python", "cpp"]
//------------------------------------------------------------Regular funct
// coding. forEach( function (val){
// console. log(val);
// } )
//function ka name nhi koi ka array ka sath attached ha argument men val kia ha array ki har index pr value jo majood ha

//-----------------------------------------------------------arrow function way
// coding. forEach((val) => {
//     console.log(val)
// })

//---------------------------------------------------------now function then passed as refernec
// function print(item){
//    console.log(item)
// }
// coding.forEach(print);


// //---------------------------------------------------------------can have more parameters
// coding. forEach( (item, index, arr)=> {
// console. log(item, index, arr);
// } )




//------------------------------------------------for each does not return a value nether array
// values=coding.forEach((item)=>{return item})
// console.log(values)


//so use filer--------------------------------------------------Filter :=also take the call back function
let mynums=[1,2,3,4,5,6,7,8];
// let Even=mynums.filter((nums)=>{return nums%2==0})
// console.log(Even)
//anothery way to do it by forEach
const newNums = []
// mynums. forEach((num) => {
// if(num>4)
// newNums.push(num)
// } )
// console.log(newNums) ;


//---------------------------------------------------------------------Filter:pratice
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];
let_my_books=books.filter((book_obj)=>book_obj.genre==='History')
console.log(let_my_books);