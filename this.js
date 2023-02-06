
let a = this //this is a global object

function a(){} //this is a function 

//this in event handlers

//use the this.html for another example


//implicity use the this keyword to refer to the owner object
const person = {
    name: 'John Doe',
    lastname: 'kabir',
    id: 345,
    fullname : function () { //this is a method
    return this.name + ' ' + this.lastname; // this is refering to thge owner object
    },
    getFullname : function(){
        return this.fullname(); //here this is person
    }
}
console.log(person.getFullname());

//explicity use the this
const person2 = {
    name: 'Jakir',
    lastname: 'uddin'
}

person.fullname.call(person2); // here, this is person2