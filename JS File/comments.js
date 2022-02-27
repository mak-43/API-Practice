function loadComments(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res=>res.json())
    .then(data=>display(data))
}

const display=(data)=>{

    const ul=document.getElementById('container')

    for(const i of data){
        const li=document.createElement('li')
        li.innerHTML= `
        <h3>${i.id}</h3>
        <p>Name:${i.name}</p>
        <p>body: ${i.body.slice(0,50)}

        `
        ul.appendChild(li)
        console.log(i.id)
    }

    
}