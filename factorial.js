// 4! = 4*3*2*1
// let factorial = 1;
// for(let i = 4; i>=1; i--){
//     factorial = factorial * i;
// }
// console.log(factorial);


// function  factorial(i){
//     if(i==1){
//         return 1;
//     }
//     return i * factorial(--i);
// }
// console.log(factorial(4));

// i * factorial(--i)
// 4 * factorial(3)
// 4 * 3 * factorial(2)
// 4 * 3 * 2 * factorial(1);
// 4 * 3 * 2 * 1;
// 24 


// function compare(a, b) {
//     if (a == b) {
//         return true;
//     } else {
//         return false;
//     }
// }
// const result = compare(15, "15");
// console.log(result);


// function compare(a, b) {
//     if (a.tostring() === b) {
//         return true;
//     } else {
//         return false;
//     }
// }
// const result = compare(25, 25);
// console.log(result);

// console.log("123" + 123);

// let a="hi";
// let b="there";
// console.log(a+b);

// for(let i = 5;i <= 100; i++){
//     console.log(i);
// }

const array = [1, 2, 3, 4, 5, 6, 7];
for (let i = 1; i < array.length; i++) {
    if (i == 5) {
        continue;
    }
    console.log(array[i]);
}