const playButton = document.getElementById('playButton')

playButton.addEventListener('click', () => {
    enterFullscreen()
    switchScreen('mainMenuScreen', 'gameModeScreen')
})
