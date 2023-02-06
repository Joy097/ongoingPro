//Scopes - block, function, global

//block scope
{
    let x = 2;
}

{
    var a = 1 
}
//can use a but can not use b

function A(){
    var a = 6
    console.log(a) // can not access outside of this
}
A()
console.log(a)


//accidental global
car = 12
function glob(){
    car = 67
    return car
}

console.log(glob())


//global things stay in window
var win1 = 'jkagca' 
var win2 = 'jhagscfyjsag'

console.dir(window)