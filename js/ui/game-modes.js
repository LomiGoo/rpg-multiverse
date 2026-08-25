const modeBackButton = document.getElementById('mode-back-button')
const pvcButton = document.getElementById('pvc-button')

modeBackButton.addEventListener('click', () => {
    exitFullscreen()
    switchScreen('game-mode-screen', 'main-menu-screen')
})

pvcButton.addEventListener('click', () => {
    populateCharacters()

    const character = characters[0]
    renderSelectedCharacter(character)

    gameMode = 'pvc'
    switchScreen('game-mode-screen', 'character-selection-screen')
})
