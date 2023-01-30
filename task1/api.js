
async function show(){
    const id = document.getElementById("id").value.trim()
    const name = document.getElementById("nam").value.trim()
    let result = document.getElementById('result');

    let url = `https://jsonplaceholder.typicode.com/${name}/${id}`
    let b = await fetcher(url)
    console.log(b)

    result.innerHTML = add(b)
}
async function showall(){
    const name = document.getElementById("name").value.trim()
    let result = document.getElementById('result');
    let a =''
    let url = `https://jsonplaceholder.typicode.com/${name}`
    let b = await fetcher(url)
    b.forEach(element => {
    let d = add(element)
    a = a.concat(d)})
    result.innerHTML = a
}

async function fetcher(url){
    
    let v = await fetch(url)
    let c = await v.json()
    return  c
    
}

function add(element){

        let keys = Object.keys(element)
        let x = `${keys[0]} : `+element[keys[0]]+"<br>"+
        `${keys[1]} : ` +element[keys[1]]+"<br>"+
        `${keys[2]} : ` +element[keys[2]]+"<br>"+
        `${keys[3]} : ` + element[keys[3]]  +"<br><br>"
        return x;
    
   
}
