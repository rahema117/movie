import { Ui } from "./ui.js";

 export class Details{
    constructor(id){
document.getElementById('close').addEventListener('click', ()=>{
document.getElementById('home').classList.remove('d-none')
document.getElementById('detail').classList.add('d-none')

})
this.getDetail(id)
    }

   async getDetail(id){
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '4d635cb14emshdda6fa99128501ep10826djsnfb8040a5959a',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
const api =  await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,options)
const data =  await api.json()
console.log(data);
new Ui().displayDetail(data)

    }
}


