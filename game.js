    var arr=[]
function shuffleNumbers(){
    arr=[]
    let i=0
    while(i<25){
        // console.log(i+1, 'is the number')
        i++
        if (i >=0){
            // debugger
            arr.push(i)
        }
        if (i>10){
            let aIndex= Math.floor(Math.random()*arr.length)
            let a = arr[aIndex]
            let b = arr[i]
            let c = arr[aIndex]
            // a=b
            // b=c
            arr [aIndex]=b
            arr [i] = c

        }
        
    }
    // console.log(arr)
    createBoxes(arr)
}
function createBoxes(arr){
    let container = document.querySelector('.container')
    arr.forEach(i => {
        if (i>=0){
            let box=document.createElement('div')
            box.className = 'box'
            box.textContent = i
            container.appendChild(box)
        }
        
    });
}
function startTimer(){
let value = document.querySelector('.timer').textContent
var intervalCanceler=setInterval(()=>{
    value= parseInt(value)-1
    document.querySelector('.timer').textContent=value
    if (value == 0){
        document.querySelector('.timer').className += ' hidden' 
        clearInterval(intervalCanceler)
        startGame()
    }

},1000)

}
function startGame(){
    console.log('GAME STARTED :D')
    document.querySelectorAll('.box').forEach((box)=>{
        box.addEventListener("click",(e)=>{
            if (e.target.className.indexOf('selected')==-1){
                e.target.className += ' selected'
            }
        })
    
    })
    startTimer()
}
function showPlacard(){
    let placardtxt = document.querySelector('.placard').textContent
    let arr = ['ODD','EVEN']
let index = +(Math.random()>.5)
    placardtxt = placardtxt.replace('xxx', arr[index])
    document.querySelector('.placard').textContent = placardtxt
    animatePlacard(0,1)
    setTimeout(()=>{
        startTimer()
        animatePlacard(1,0)
    },5000)
    setTimeout(()=>{
        startGame()
    },5000)

}
function animatePlacard(initial,final){
    document.querySelector('.placard').animate([
        {
            opacity:initial,
        },
        {
            opacity:final,
        }

    ],{
        duration:1000,
        fill:'forwards'
    })

}

const showScore = () =>{
    
}

shuffleNumbers()
showPlacard()