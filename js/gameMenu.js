const playBtn = document.getElementById('playBtn')

function fullscreen() {
    document.documentElement.requestFullscreen()
}

function showScreen(screenName) {
    document.querySelector('#' + screenName).style.display = 'flex'
}

function hideScreen(screenName) {
    document.querySelector('#' + screenName).style.display = 'none'
}

function handleDisplayClick() {
    fullscreen()
    hideScreen('gameMenuScreen')
    showScreen('gameModesScreen')
    
}

playBtn.addEventListener("click", handleDisplayClick)
