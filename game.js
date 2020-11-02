function makeboxes(){
    let container = document.querySelector('.container')
    let i=0
    while(i<100){
        console.log(i+1, 'is the number')
        i++
        let box=document.createElement('div')
        box.className = 'box'
        box.textContent = i
        container.appendChild(box)
    }
}
function startTimer(){

}
function startGame(){

}
function showScore(){

}
makeboxes()