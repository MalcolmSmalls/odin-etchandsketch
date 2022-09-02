
const container = document.querySelector('.container')
let gridDivs
let hoveredGrid


const createDivs = () => {
    for(i=1; i<=256; i++){
        let newDiv = document.createElement('div')
        newDiv.classList.add(`divGrid`)
        newDiv.style.cssText = "border:solid 1px; border-color:black; width:20px; height:20px;"
        container.appendChild(newDiv)
        gridDivs = document.querySelectorAll('.divGrid')
    }
}

createDivs()


// const addColor = () => {
//     console.log('hello');
//     gridDivs.style.cssText = "border:solid 1px; border-color:black; width:20px; height:20px;background-color:black;"
// }

gridDivs.forEach((grid, i) => {
    grid.addEventListener('mouseover', function(){
        hoveredGrid = grid
        hoveredGrid.style.cssText = "border:solid 1px; border-color:black; width:20px; height:20px;background-color:black;"    
    })
})

// gridDivs.forEach((grid, i) => {
//     grid.addEventListener('mousedown', function(){
//         hoveredGrid = grid
//         hoveredGrid.style.cssText = "border:solid 1px; border-color:black; width:20px; height:20px;background-color:black;"
//     })
// })

// let divGridVar = document.querySelector('.divGrid')





// divGridVar.addEventListener('mouseover', addColor, false)

