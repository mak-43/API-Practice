
const allPlayers=()=>{
    const searchValue=document.getElementById('search-box').value;

    const url=`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>showPlayersDetails(data.player))
}
const showPlayersDetails=(player)=>{

    const parent=document.getElementById('player-container')
    for(const p of player){
        const div =document.createElement('div')
        div.innerHTML=`
        <div class="card border p-5 ">
            <div class="pro-pic ">
                <img class="w-50" src="${p.strThumb}" alt="">
            </div>
            <h2>Name:${p.strPlayer}</h2>
            <h5>${p.strNationality}</h5>
            <p>${p.strWeight}</p>
            <div class="albutton pb-3">
                <button class="btn btn-danger">Delete</button>
                <button class="btn btn-success" onclick="details('${p.idPlayer}')">Details</button>
            </div>
        </div>
        `
        parent.appendChild(div)
        
    }
}

const details=(info)=>{
    const url=`https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${info}`
    fetch(url)
    .then(r=>r.json())
    .then(d=>setDetails(d.players[0]))
   
  
}
const setDetails=(info)=>{
    document.getElementById('details-container').innerHTML=
    `
        <div>
            <img src="">
            <h1>Name:${info.strPlayer}</h1>
        </div>
    
    `


    console.log(info)
}