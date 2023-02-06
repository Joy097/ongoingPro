class Class1{
    constructor(name,year){
        this.name = name;
        this .year = year;
    }
    play(){
        console.log(this.name+" is playing");
    }
    drive(){
        console.log(this.name+"is driving");
    }
}

const manush = new Class1('joy', 1356)
const manush1 = new Class1('jabir', 1656)
const manush2 = new Class1('jovan', 1956)
const manush3 = new Class1('abir', 2013)
const manush4 = new Class1('arash', 2021)

console.log(manush3.name+" was born in "+manush3.year);
manush2.play()