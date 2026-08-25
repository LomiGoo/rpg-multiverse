function timerStart() {
    let time = 4
    const timerText = document.getElementById('timer-text')

    const timer = setInterval(() => {
        timerText.textContent = 'Starting in ' + time

        --time
        
        if (time < 0) {
            clearInterval(timer)
            renderBattlefield()
            switchScreen('starting-round-screen', 'battlefield-screen')
        }
    }, 1000)
}

function renderStartingRound() {
    const player1Image = document.querySelector('.character-container #player-1-char')
    const player1CharName = document.querySelector('.character-container #player-1-char-name')
    const player2Image = document.querySelector('.character-container #player-2-char')
    const player2CharName = document.querySelector('.character-container #player-2-char-name')

    player1Image.src = players[0].imageUrl
    player1CharName.textContent = players[0].name
    player2Image.src = players[1].imageUrl
    player2CharName.textContent = players[1].name
}
