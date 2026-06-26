console.log(2>1);
console.log(2<1);
console.log(2>=1);
console.log(2<=1);
console.log(2!=1);
console.log(2==2);
//It return  boolean values either true or false
console.log("**********************String-Num comparsion***********")
console.log(1>"0")
console.log("1">0)
//string is converted to number
console.log("**********************null-0 comparsion***********")
console.log(null > 0)
console.log(null == 0)
console.log(null > 0)
console.log(null >= 0)
/*The reason is that an equality check == and comparisons > <>=
<= work differently.
Comparisons convert null to a number, treating it as 0.
That's why (3) null >= 0 is true and (1) null > 0 is false.*/  
console.log("Null is equal to null and undefined only")
console.log(null==null)
console.log(null==undefined)
