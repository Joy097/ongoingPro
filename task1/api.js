
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

function post(){
    const name = document.getElementById("nam1").value.trim()
    const id = document.getElementById("nam2").value.trim()
    const body = document.getElementById("nam3").value.trim()
    let result = document.getElementById('result');

    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
    title: name,
    body: id,
    userId: body,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => result.innerHTML= add(json));
}

function update(){
    const id = document.getElementById("id1").value.trim()
    const title = document.getElementById("ttl").value.trim()
    const body = document.getElementById("bdy").value.trim()
    const userid = document.getElementById("uid").value.trim()

    let result = document.getElementById('result');

    fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  body: JSON.stringify({
    id: id,
    title: title,
    body: body,
    userId: userid,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => result.innerHTML= add(json));
}

function del(){
    const id = document.getElementById("id").value.trim()
    const name = document.getElementById("nam").value.trim()
    let result = document.getElementById('result');

    fetch(`https://jsonplaceholder.typicode.com/${name}/${id}`, {
  method: 'DELETE',
});
    .then(() => {
       return fetch(`https://jsonplaceholder.typicode.com/${name}`)
    })
    .then((json) => result.innerHTML= add(json));
}
