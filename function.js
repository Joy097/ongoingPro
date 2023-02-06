let x = function(){
    console.log("I am called by x")
}
x();

//self invoking function
(function (){
    console.log("I am self invoking function")
})();