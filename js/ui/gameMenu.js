const playBtn = document.getElementById('playBtn')

playBtn.addEventListener('click', () => {
    fullscreen()
    handleDisplayClick('gameMenuScreen', 'gameModesScreen')
})
