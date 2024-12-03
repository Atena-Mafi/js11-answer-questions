// * ==================================2=====================================


const object1 = {
    ali: 'name',
    writes: 'does what',
    novels: 'kind of book',
  };

/*
 todo: 1. Take the object from question 1  
 todo: 2. put all the values into an array with 2 ways that you’ve learned
*/
//way1👇👇👇👇
let way1=Object.values(object1);
console.log(way1);

//way2👇👇👇👇
let way2=[object1.ali , object1.writes , object1.novels];

console.log(way2);

///way3👇👇👇👇
const{ali,writes,novels}=object1;

let way3=[ali,writes,novels]
console.log(way3);

