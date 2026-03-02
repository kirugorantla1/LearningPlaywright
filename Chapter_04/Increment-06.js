// ++a -- Increment operator It will execute the increment operation first and then return the value. It is also called pre-increment operator.
//a++ -- Increment operator It will return the value first and then execute the increment operation. It is also called post-increment operator.

let a=10;
console.log(a); 
console.log(++a); //pre-increment operator
console.log(a);
console.log(a++); //post-increment operator

let b=a++;
console.log(b); //post-increment operator
console.log(a); //pre-increment operator