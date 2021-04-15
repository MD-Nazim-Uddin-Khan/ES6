// function doubleIt(num){
//     return num * 2;
// }

// const doubleIt = function another(num){
//     return num * 2;
// }

const doubleIt = num => num * 2;
const add = (x, y) => x + y;
const give5 = () => 7
const doMath = (x, y) =>{
    const sum = x + y;
    const dff = x - y;
    const result = sum * dff;
    return result;
}

const result = doubleIt(5, 5);
const result2 = add(9, 9);
const result3 = give5();
const result4 = doMath(7, 5);


console.log(result4);

