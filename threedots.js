const ages = [16, 18, 17, 20, 18];
const ages2 = [ 19, 17, 18]
const ages3 = [ 34, 35, 40, 43];
const allAges = ages.concat(ages2).concat([5]).concat(ages3);
const allAges2 = [...ages, ...ages2, 5, ...ages3]
// console.log(allAges2);

const business = 250;
const minister = 300;
const sochib = 350;
//const takaPosia = Math.max(business, minister, sochib);


const takaPosia = [250, 300, 350, 850, 900]
 const maximum = Math.max(...takaPosia)
console.log(maximum);