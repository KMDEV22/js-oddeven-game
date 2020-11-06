    let SLECTION_TYPE=''
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
        box.addEventListener("click",(event)=>{
            if (event.target.className.indexOf('selected')==-1){
                event.target.className += ' selected'
                
                checkAnswer(+event.target.textContent)

            }
        })
    
    })
    startTimer()
}
function checkAnswer(txtContent){
    let correctEl = document.querySelector('.correct')
    let incorrectEl = document.querySelector('.incorrect')
    let isCorrect = false
    if(SELECTION_TYPE =='ODD'){
        if(txtContent % 2 != 0){
            isCorrect = true
        }
    }else if(SELECTION_TYPE == 'EVEN'){
            if (txtContent % 2 == 0){
            isCorrect = true
            }
    }
    if(isCorrect){
        let currentHt = +correctEl.style.height.toString().replace('%','')
        currentHt += (100/13)
        correctEl.style.height =currentHt +'%'
    }else {
        let currentHt = +incorrectEl.style.height.toString().replace('%','')
        currentHt += (100/13)
        incorrectEl.style.height=currentHt +'%'}
    
}
function showPlacard(){
    let placardtxt = document.querySelector('.placard').textContent
    let arr = ['ODD','EVEN']
let index = +(Math.random()>.5)
    SELECTION_TYPE = arr[index]
    placardtxt = placardtxt.replace('xxx', SELECTION_TYPE)
    document.querySelector('.placard').textContent = placardtxt
    animatePlacard(0,1)
    setTimeout(()=>{
        startTimer()
        animatePlacard(1,0)
    },5000)
    setTimeout(()=>{
        startGame()
        document.querySelector('.placard').className+=' hidden'
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