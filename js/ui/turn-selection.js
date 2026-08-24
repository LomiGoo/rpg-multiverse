const turnBackButton = document.getElementById('turnBackButton')
const rpsButton = document.getElementById('rpsButton')

turnBackButton.addEventListener('click', () => {
    switchScreen('turnSelectionScreen', 'characterSelectionScreen')
})

rpsButton.addEventListener('click', () => {
    renderStartingRound()
    timerStart()
    switchScreen('turnSelectionScreen', 'startingRoundScreen')
})
