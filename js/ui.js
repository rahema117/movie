
export class Ui {
    constructor(){

    }
    displayGames(games){
        let carrtona = ''
        for (let i = 0; i < games.length; i++) {
          carrtona += `
           <div class="col-lg-3 col-md-6">
                <div item-id="${games[i].id}"class="item border border-dark rounded-2">
                   <div class="item-header p-3">
                    <div class="item-img">
                        <img src="${games[i].thumbnail}" alt="" width="100%">  
                     </div>
                     <div class="div d-flex justify-content-between p-2">
                         <h4>${games[i].title}</h4>
                        <div class="free d-flex justify-content-center align-items-center rounded-2">
                            free
                        </div>
                     </div>
                     <p>${games[i]. short_description}</p>
                   </div>
                   <div class="d-flex justify-content-between  border-top border-dark px-3 py-2">
                    <span class="badge">${games[i].genre}</span>
                    <span class="badge">${games[i].platform}</span>
                    </div>
                </div>
                    
                </div>
              
                
            </div>
          
          
          
          `
            
        }

document.getElementById('demo').innerHTML = carrtona

    }

    displayDetail(detail){
       const detailBox = `
        
         <div class="col-md-4">
                    <div class="detail-card ">
                        <h2 >Details Game</h2>
                        <img src="${detail.thumbnail}" alt="" width="100%">
                    </div>
                </div>
                <div class="col-md-7">
                    <div class="detail-card py-5">
                        <h2 >Title: ${detail.title}</h2>
                        <h5 class="py-2">Category: <span class="badge text-bg-secondary">${detail.genre}</span></h5>
                        <h5 class="py-2">Platform: <span class="badge text-bg-secondary">${detail.platform}</span></h5>
                        <h5 class="py-2">status: <span class="badge text-bg-secondary">${detail.status}</span></h5>
                        <p >${detail.description}
                           </p>
                             <a href="${detail.game_url}" target="_blank" class="btn btn-outline-warning w-25">Shoe Game</a>
                    </div>
                </div>
        
        
        `
document.getElementById('detailContent').innerHTML = detailBox

    }
}