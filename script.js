const container = document.querySelector('.container');
const gridbutton = document.querySelector('#regrid')

gridbutton.addEventListener('click',()=>{
    let temp = prompt("How big the grid? (Max 100)");
    if (temp <= 100 && temp > 0){
        grid = temp;
        removeGrid();
        buildGrid();
    }
})


let grid = 16;

function buildGrid(){
    for(let i = 0; i < grid; i++){

        const subcontainer = document.createElement('div');
        subcontainer.classList.add('subcontainer')

        for(let j = 0; j < grid; j++){
            const pixel = document.createElement('div');
            pixel.classList.add('pixel');

            pixel.addEventListener("mouseover",()=>{
                pixel.classList.add('black');
            })

            subcontainer.appendChild(pixel);
        }

        container.appendChild(subcontainer);
    }
};

function removeGrid(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}

buildGrid();

