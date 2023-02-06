// hoisting only happens duirng declaration

var x = 5;
console.log(x,y) 
var y = 9;  //is actually =>

var x
var y
x = 5
console.log(x,y) // 5 , undefined (for once)
y = 9

