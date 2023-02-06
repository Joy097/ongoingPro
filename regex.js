//search
let text = "i want to go to the gym";
let n = text.search("to");
//console.log(n)


let text1 = "i want to go to the gym";
let n1 = text.search(/Go/i);
//console.log(n1)

let text2 = "i want to go to the gym";
let n2 = text.search(/to/g);
//console.log(n1)

let str = text1.replace(/to/g, 'tokyo');
//console.log(str)


let num = "1242521248"
let match = num.match(/[1-3]/g)
//console.log(match)

// types = [abcd], [0-9], [6|8]
