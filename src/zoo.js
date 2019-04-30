const API_BASE = "http://localhost:3000/"

export default class Zoo {
    constructor(){

    } 

    getAnimals(){
        fetch(API_BASE + 'zvirata')
            .then(response => response.json())
            .then(data => {
                this.showAnimals(data);
                
        })
    }

    showAnimals(data){

        let zvirata = document.querySelector("#zvirata");
        let html = "";

        data.forEach(zvire => {

                    html += `
                        <div class="zvire" data-id="${zvire.id}">
                            <div class="zvire__foto">
                                <img src="images/${zvire.foto}" alt="${zvire.nazev}">
                            </div>
                            <div class="zvire__popis">
                                <div class="zvire__nazev">
                                    ${zvire.nazev}
                                </div>
                                <div class="zvire__latinsky">
                                    ${zvire.nazevLatinsky}
                                </div>
                            </div>
                        </div>`;
                });

                zvirata.innerHTML = html;

                //přidáme reakci na kliknutí - vyberu všechny zvířata
                let tlacitka = document.querySelectorAll(".zvire");

                //přidám na zvířete listener
                tlacitka.forEach(tlacitko => {
                    tlacitko.addEventListener("click", (e) => {
                        this.animalClick(e);
                    });
                });
    }

    animalClick(e){
        let id = e.target.dataset.id;
        
        this.getAnimal(id);
    }

    getAnimal(id){
        fetch(API_BASE + 'zvirata/' + id)
            .then(response => response.json())
            .then(data => {
                this.showAnimal(data);
        })

    }

    showAnimal(data){
        console.log(data);
    }
}