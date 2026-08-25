const turnBackButton = document.getElementById('turn-back-button')
const rpsButton = document.getElementById('rps-button')

turnBackButton.addEventListener('click', () => {
    switchScreen('turn-selection-screen', 'character-selection-screen')
})

rpsButton.addEventListener('click', () => {
    renderStartingRound()
    timerStart()
    switchScreen('turn-selection-screen', 'starting-round-screen')
})
