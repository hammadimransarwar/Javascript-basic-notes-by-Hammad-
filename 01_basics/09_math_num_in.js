// let score=200;
// console.log(score);
// let bal=new Number(1000);
// console.log(bal);
// console.log(score.toString().length);
// let befixed=100.0000000;
// console.log(befixed.toFixed(2))
// let beprecise=124.890;
// console.log(beprecise.toPrecision(3));
// console.log(beprecise.toPrecision(4));


//++++++++++++++++++++++++++++++ Math ++++++++++++++++++++++++++++++++
// console.log(typeof Math)
// console.log(Math)
// console.log(Math.abs(-334)) //Absolute
// console.log(Math.round(4.554))//round
// console.log(Math.ceil(7.24))//ceiling go above
// console.log(Math.floor(4.54))//fllor go down
// console.log(Math.min(1,0,-13,-1))//get min
// console.log(Math.max(1,0,-13,-1))//get max

console.log(Math.random()) //Ranges:0-.9999
console.log(Math.random()*10) //e.g 0.34544->3.4544 and 0.0334->0.334
console.log((Math.random()*10)+1) //min is 1 and max is-> random(0,0.999)->9.99+1->10.99->11 if round
const min=10;
const max=15
console.log(Math.floor(Math.random()+(max-min+1)+min))
