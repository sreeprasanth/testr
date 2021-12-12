
const rankingsBody = document.querySelector("#rankings-table>tbody");
console.log(rankingsBody);

function loadRankings(){
const request = new XMLHttpRequest();
request.open("GET","ranking.json");
request.onload = () =>{
   try{
    const json = JSON.parse(request.responseText);
    populateRankings(json);

} catch (e){
    console.warn("couldn't load");
}
};
request.send();
}
function populateRankings(json){
    //console.log(json);
    json.forEach((row)=>{
        const tr = document.createElement("tr");
        row.forEach((cell)=>{
            const td = document.createElement("td");
            td.textContent = cell;
           tr.appendChild(td);
       console.log(cell);
        });
        rankingsBody.appendChild(tr);
    });
}
//document.addEventListener("DOMContentLoaded",()=>{loadRankings();});