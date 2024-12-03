// ? 7. Using Array Destructuring, get the last name from the array.
//  todo : notice that 'Christina' is firstName , 'Jon' is middleName , 'Alexandare' is lastName.

const students = ['Christina', 'Jon', 'Alexandare'];

//  !   Answer 1:👇👇👇👇
const[first,middle,last]=students;
console.log(last);


//  !   Answer 2:👇👇👇👇

// const[,,last]=students;
// console.log(last);