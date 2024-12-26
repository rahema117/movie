import { Details } from "./detail.js"
import { Ui } from "./ui.js"

 export class Home{
    constructor(){
       let links = document.querySelectorAll('.nav-link')
       links.forEach((link)=>{
        link.addEventListener('click',async(e)=>{
            document.querySelector('.active').classList.remove('active')
            link.classList.add('active')
            const category = link.getAttribute('data-cate')
            console.log(category);
            this.getGames(category)
           
        })    
       })
       
       this.home = document.getElementById('home')
       this.detail = document.getElementById('detail')
       this.loader = document.querySelector('.loading')
       this.ui = new Ui()
       this.getGames('mmorpg')
       
      
    }
   async getGames(category){
    this.loader.classList.remove('d-none')
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '4d635cb14emshdda6fa99128501ep10826djsnfb8040a5959a',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,options)
    const response =  await api.json()
    this.loader.classList.add('d-none')
    this.ui.displayGames(response)
   document.querySelectorAll('.item').forEach((item)=>{
    item.addEventListener('click',()=>{
      const attr =  item.getAttribute('item-id')
      console.log(attr);
      
       this.home.classList.add('d-none')
       this.detail.classList.remove('d-none')
       new Details(attr)
        
    })
   })
    }
}

