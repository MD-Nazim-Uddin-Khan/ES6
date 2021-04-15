class parent{
    constructor(){
        this.fatherName = "josh"
        this.motherName = "servina"
    }
}

class child extends parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFulName(){
        return this.fatherName + " " + this.motherName;
    }
}

const baby = new child("Arnold");
const baby2 = new child('Tom')
console.log(baby.getFulName());
console.log(baby2);
