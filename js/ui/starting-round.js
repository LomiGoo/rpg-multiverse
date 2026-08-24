function timerStart() {
    let time = 4
    const timerText = document.getElementById('timerText')

    const timer = setInterval(() => {
        timerText.textContent = 'Starting in ' + time

        --time
        
        if (time < 0) {
            clearInterval(timer)
            switchScreen('startingRoundScreen', 'battlefieldScreen')
        }
    }, 1000)
}

function renderStartingRound() {
    const player1Image = document.querySelector('.character-container #player1Char')
    const player1CharName = document.querySelector('.character-container #player1CharName')
    const player2Image = document.querySelector('.character-container #player2Char')
    const player2CharName = document.querySelector('.character-container #player2CharName')

    player1Image.src = players[0].imageUrl
    player1CharName.textContent = players[0].name
    player2Image.src = players[1].imageUrl
    player2CharName.textContent = players[1].name
}
