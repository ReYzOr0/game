let btn = document.querySelector('.btn'),
    input = document.querySelector('.input'),
    timeOut = document.querySelector('.time'),
    gameBox = document.querySelector('.game__block'),
    time = 0,
    score = 0,
    interval = 0; 
    
btn.addEventListener('click', (event) => {
    event.preventDefault()
    if(input.value > 4) {
        time = input.value
        input.value = ''
        score = 0
        clearInterval(interval)
        start()
        let result = document.querySelector('.result')
        if(result) {
            result.style.display = 'none'
        }
    }
})

gameBox.addEventListener('click', (event) => {
    if(event.target.classList.contains('ball')) {
        score++
        event.target.remove()
        createBall()
    }
    if(event.target.classList.contains('Kua')) {
        score++
        event.target.remove()
        createBall()
    }
    if(event.target.classList.contains('tre')) {
        score++
        event.target.remove()
        createBall()
    }
})




function start() {
    btn.disabled = true
    timeOut.innerHTML = time
    interval = setInterval(() => {
        decrease()
    }, 1000);
    createBall()
    
}



function decrease() {
    if(time == 0) {
        endGame()
    }else {
        let currentTime = --time
        timeOut.innerHTML = currentTime
    }
}

function endGame() {
    gameBox.innerHTML = `<h2 class="result">Вы набрали: ${score} очков</h2>`
    btn.disabled = false
}

function createBall() {
    let ball = document.createElement('div')
    ball.classList.add(`${res()}`)
    let size = `${random(20,100)}`
    let coor = gameBox.getBoundingClientRect()
    let x = random(0, coor.width - size)
    let y = random(0, coor.height - size)
    
    ball.style.width = size + 'px' 
    ball.style.height = size + 'px'
    ball.style.background = `rgb(${random(0,255)},${random(0,255)},${random(0,255)})`
    ball.style.top = y + 'px'
    ball.style.left = x + 'px'
    
    gameBox.append(ball)
    
}

// gameBox.addEventListener('click', () => {
// createBall()
// })

function random(min,max){
    return Math.floor(Math.random() * (max + 1 - min) + min)
}




function  createtre() {
    let tre = document.createElement('div')
    tre.classList.add('tre')
    let size = `${random(20,100)}`
    let coor = gameBox.getBoundingClientRect()
    let x = random(0, coor.width - size)
    let y = random(0, coor.height - size)

    tre.style.width = size + 'px' 
    tre.style.height = size + 'px'
    tre.style.background = `rgb(${random(0,255)},${random(0,255)},${random(0,255)})`
    tre.style.top = y + 'px'
    tre.style.left = x + 'px'
    
    gameBox.append(tre)
}

function createKua() {
    let Kua = document.createElement('div')
    Kua.classList.add('Kua')
    let size = `${random(20,100)}`
    let coor = gameBox.getBoundingClientRect()
    let x = random(0, coor.width - size)
    let y = random(0, coor.height - size)

    Kua.style.width = size + 'px' 
    Kua.style.height = size + 'px'
    Kua.style.background = `rgb(${random(0,255)},${random(0,255)},${random(0,255)})`
    Kua.style.top = y + 'px'
    Kua.style.left = x + 'px'
    
    gameBox.append(Kua)
}

    function res() {
    let array = ['ball', 'Kua', 'tre'];

for(let i = 0; i < array.length; i++) {
    return array[random(0,2)]
}
gameBox.append(res())


}
console.log(res());

let re = res();
  
   

function rest() {
    let array = ['', ''];

for(let i = 0; i < array.length; i++) {
    return array[random(0,1)]
}
}
console.log();





 
