const person = { name: "tutul", age: 17, job: "facebooker", gfName: "rohima", phone: "01508648865", address: "chandpur"}

//const {phone, gfName, name, salary} = person;

// console.log(name, gfName, salary, phone);
// console.log(name, gfName, salary, phone);


const friends = ['Amair khan', 'salman khan', 'sharukh khan', 'shob khan', 'Arman khan' ]
const [prothom, ...AllFriends] = friends;
console.log(AllFriends);



const complexObject = {
    name: "abc",
    info: {
        address: 'kola bagan',
        leader: 'tiger leader'
    }
}
const {leader}  = complexObject.info;
console.log(leader);