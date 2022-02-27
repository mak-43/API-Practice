const loadUsers=()=>{
    fetch('https://randomuser.me/api/?results=50')
    .then(r=>r.json())
    .then(d=>display(d))
}

function display(d){
    const ul=document.getElementById('container')
    const data=d.results
    for(const i of data){
        const li=document.createElement('li')
        li.innerHTML=`
            <p>hi my name is</p>
            <p>${i.name.title} ${i.name.first} </p>
            <p>${i.email} </p>

        `
        ul.appendChild(li)
        console.log(li)
    }
   
}