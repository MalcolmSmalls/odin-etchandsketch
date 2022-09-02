
const container = document.querySelector('.container')
const getGridChoice = document.querySelector('.howManyBoxes')
let gridDivs
let hoveredGrid
let gridChoice = 16

const editGridChoice = () => {
    gridChoice = Number(prompt('How many grids per side?'))
    if(gridChoice > 100){
        gridChoice = 100
    }
    createDivs()
}

getGridChoice.addEventListener('click', editGridChoice)



const createDivs = () => {
    for(i=1; i<=gridChoice*gridChoice; i++){
        let newDiv = document.createElement('div')
        newDiv.classList.add(`divGrid`)
        newDiv.style.cssText = "border:solid 1px; border-color:black; width:20px; height:20px;"
        container.appendChild(newDiv)
        gridDivs = document.querySelectorAll('.divGrid')
    }
}

createDivs()



gridDivs.forEach((grid, i) => {
    grid.addEventListener('mouseover', function(){
        hoveredGrid = grid
        hoveredGrid.style.cssText = "border:solid 1px; border-color:black; width:20px; height:20px;background-color:black;"    
    })
})




