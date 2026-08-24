const modeBackButton = document.getElementById('modeBackButton')
const pvcButton = document.getElementById('pvcButton')

modeBackButton.addEventListener('click', () => {
    exitFullscreen()
    switchScreen('gameModeScreen', 'mainMenuScreen')
})

pvcButton.addEventListener('click', () => {
    populateCharacters()

    const character = characters[0]
    renderSelectedCharacter(character)

    gameMode = 'pvc'
    switchScreen('gameModeScreen', 'characterSelectionScreen')
})
