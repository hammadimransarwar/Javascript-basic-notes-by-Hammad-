//literal singletgon objevt nhi bnata constructor bnata ha

//------------------------object literals
let symb=Symbol("one");
let my_info={
    name:"hammad",
    [symb]:"3530-4894-111",
    email:"Hammad@gmail.com",
    "Phone no":"03005755768567"
}
// console.log(my_info.name);
// console.log(my_info["email"])
// console.log(my_info["Phone no"])//cant access by dot method
// console.log(my_info[symb]);
// //changes in objects
// my_info.email="hammad.90@gmail.com"

// console.log(my_info);
// console.log("-------------------------------------Freeze");
// Object.freeze(my_info);
// my_info.email="hammad.190@gmail.com"
// console.log(my_info); //no changes in email

console.log("--------------------Function in objects")
my_info.Greeting=function(){
    console.log(`Hello My name is ${this.name}`) //we cam access objects property by this 
}
// console.log(my_info.Greeting());

let obj1={
    1:"a",
    2:"b"
}
let obj2={
    3:"c",
    4:"d"
}
let obj3={
    5:"e",
    6:"f"
}


// obj conactination 


// let obj4=Object.assign(obj1,obj2,obj3) //object.assign(target,source)
// console.log(obj1);
// console.log(obj4)
//so copies to 4 and 1 both so use curyly braes as new target obj so not alterred the obj1
// let obj4=Object.assign({},obj1,obj2,obj3) //object.assign(target,source)
// console.log(obj1);
// console.log(obj4)
//obj1 remains same
// let obj4={...obj1,...obj2,...obj3} //separator
// console.log(obj4)

//when database sent data arrivved in array of object like this
let arrived_data=[
    {
        id:1,
        name:"user1"
    },
    {
        id:2,
        name:"user2"
    },
    {
        id:3,
        name:"user3"
    }
]
// console.log(arrived_data[1].id);

// console.log(my_info);
// console.log(Object.keys(my_info));
// console.log(Object.values(my_info));
// console.log(Object.entries(my_info)) //create array b meriging each key and value

//----------------------------------------------------------------------------------------------
///-----------------------------------------------------------Object destructing
let user_info={
    name:"hammad",
    [symb]:"3530-4894-111",
    email:"Hammad@gmail.com",
    "Phone no":"03005755768567"
}
//console.log(user_info.name)
//but to make code clean we use object destructing
let {name:n}=user_info;
console.log(n);
user_info.name="Hammad"
console.log(n);