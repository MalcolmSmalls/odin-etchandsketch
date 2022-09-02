
const div = document.createElement('div')
const container = document.querySelector('.container')
div.style.cssText = "background-color:red; width:15px; height:15px;"



const createDivs = () => {
    for(i=1; i<=32; i++){
        let newDiv = document.createElement('div')
        newDiv.classList.add(`div${i}`)
        container.appendChild(newDiv)
    }
}

createDivs()