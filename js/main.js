
const container = document.querySelector('.container')
const getGridChoice = document.querySelector('.howManyBoxes')
let gridDivs
let hoveredGrid
let gridChoice = 16
let divSize = document.querySelector('.container').clientWidth / gridChoice

const etchAndSketch = () => {
    gridDivs.forEach((grid, i) => {
        grid.addEventListener('mouseover', function(){
            hoveredGrid = grid
            hoveredGrid.style.cssText = `border:solid 1px; border-color:black; width:${divSize}px; height:${divSize}px; background-color:black;`    
        })
    })
}

const editGridChoice = () => {
    gridChoice = Number(prompt('How many grids per side?'))
    for(i=0; i< gridDivs.length;i++){
        gridDivs[i].remove()
    }
    if(gridChoice > 100){
        gridChoice = 100
    }
    createDivs()
}

getGridChoice.addEventListener('click', editGridChoice)



const createDivs = () => {
    divSize = document.querySelector('.container').clientWidth / gridChoice
   for(i=1; i<=gridChoice*gridChoice; i++){
        let newDiv = document.createElement('div')
        newDiv.classList.add(`divGrid`)
        newDiv.style.cssText = `border:solid 1px; border-color:black; width:${divSize}px; height:${divSize}px;`
        container.appendChild(newDiv)
        gridDivs = document.querySelectorAll('.divGrid')
    }
    etchAndSketch()
}

createDivs()







