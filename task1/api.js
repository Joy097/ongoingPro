
function show(){
    const id = document.getElementById("id").value.trim()
    const name = document.getElementById("nam").value.trim()
console.log(id)
    fetch(`https://jsonplaceholder.typicode.com/${name}/${id}`)
            .then(response => response.json())
            .then(json => {
                var result = document.getElementById('result');
                let keys = Object.keys(json);
                result.innerHTML = `${keys[0]} : `+json[keys[0]]+"<br>"+
                `${keys[1]} : ` +json[keys[1]]+"<br>"+
                `${keys[2]} : ` +json[keys[2]]+"<br>"+
                `${keys[3]} : ` + json[keys[3]]
            })
}
function showall(){
    const name = document.getElementById("name").value.trim()
    let a =''
    fetch(`https://jsonplaceholder.typicode.com/${name}`)
    .then(response => response.json())
    .then(json => {
        let result = document.getElementById('result');
        json.forEach(element=>{
            let keys = Object.keys(element)
            let b = `${keys[0]} : `+element[keys[0]]+"<br>"+
            `${keys[1]} : ` +element[keys[1]]+"<br>"+
            `${keys[2]} : ` +element[keys[2]]+"<br>"+
            `${keys[3]} : ` + element[keys[3]]  +"<br><br>"
        a = a.concat(b)
        })
        result.innerHTML = a
    })
}