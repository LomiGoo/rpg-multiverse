const playButton = document.getElementById('play-button')

playButton.addEventListener('click', () => {
    enterFullscreen()
    switchScreen('main-menu-screen', 'game-mode-screen')
})
