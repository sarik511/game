let input = document.querySelector('input'),
    btn = document.querySelector('.btn'),
    timeOut = document.querySelector('.time'),
    box = document.querySelector('.game__box'),
    score = 0,
    time = 0,
    interval = 0;


btn.addEventListener('click', (e) => {
    e.preventDefault()
    if (input.value > 4) {
        time = input.value;
        input.value = '';
        clearInterval(interval)
        start();
        score = 0;
        let res = document.querySelector('.result');
        if (res) {
            res.style.display = 'none'
        }
    }
})



function start() {
    interval = setInterval(() => logic(), 1000);
    createBall()
    btn.style.visibility = 'hidden'
}

function logic() {
    if (time) {
        let currentTime = --time;
        currentTime = currentTime < 10 ? '0' + currentTime : currentTime;
        timeOut.innerHTML = `00:${currentTime}`
    } else {
        endGame()
        btn.style.visibility = 'visible'
    }
}

function endGame() {
    box.innerHTML = `<h2 class="result">Время окончено, вы набрали: ${score} очков</h2>`
}

function createBall() {
    let ball = document.createElement('div'),
        size = 50;
    let coor = box.getBoundingClientRect();

    let x = random(0, coor.width - size)
    let y = random(0, coor.height - size)
    console.log(x);
    ball.classList.add('ball')
    ball.style.width = size + 'px';
    ball.style.height = size + 'px';
    ball.style.position = 'absolute';
    ball.style.top = x + 'px';
    ball.style.left = y + 'px';
    ball.style.borderRadius = 50 + '%';
    ball.style.background = 'red'

    box.append(ball)

}

function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

box.addEventListener('click', (e) => {
    if (e.target.classList.contains('ball')) {
        score++;
        e.target.remove()
        createBall();
    }
})


/* ДЗ 

При клике разный цвет шарика
При клике разный размер шарика
при клике разная форма шарика


*/







