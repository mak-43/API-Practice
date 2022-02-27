function loadPhotos(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res=>res.json())
    .then(data=>display(data))
}
function display(d){
    const c=document.getElementById('card')
    for(const i of d){
        const div=document.createElement('div')
        div.innerHTML=`
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${i.url}" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${i.id}</h5>
              <p class="card-text">${i.title}.</p>
              <p class="card-text">${i.url}.</p>
              <p class="card-text">${i.thumbnailUrl}.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        
        `
        c.appendChild(div)

    }
}