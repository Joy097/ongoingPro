fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(data => {
    let tdata = "";
    data.map(values =>{
        tdata += `<tr>
        <td>${values.userId}</td>
        <td>${values.id}</td>
        <td>${values.title}</td>
        <td>${values.body}</td>
      </tr>`
    });
document.getElementById("tbl").innerHTML = tdata;
})

