const container = document.querySelector('.container');
const gridbutton = document.querySelector('#regrid');
const blackbutton = document.querySelector('#brush-black');
const rainbowbutton = document.querySelector('#brush-rainbow');

let grid = 16;
let brush = 'black';


gridbutton.addEventListener('click',()=>{
    let temp = prompt("How big the grid? (Max 100)");
    if (temp <= 100 && temp > 0){
        grid = temp;
        removeGrid();
        buildGrid();
    }
})

blackbutton.addEventListener('click',()=>{
    brush = 'black';
    console.log(brush);
})

rainbowbutton.addEventListener('click',()=>{
    brush = 'rainbow';
    console.log(brush)
})


function buildGrid(){
    let pixelSize = 1000 / grid;

    for(let i = 0; i < grid; i++){

        const subcontainer = document.createElement('div');
        subcontainer.classList.add('subcontainer')

        for(let j = 0; j < grid; j++){
            const pixel = document.createElement('div');
            pixel.classList.add('pixel');
            pixel.style.width = `${pixelSize}px`
            pixel.style.height = `${pixelSize}px`

            pixel.addEventListener("mouseover",()=>{
                if(brush === 'rainbow'){
                    pixel.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
                }
                else{
                    pixel.style.backgroundColor = 'black';
                }
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

