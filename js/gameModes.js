const backBtn = document.getElementById('backBtn')

function exitFullscreen() {
    document.exitFullscreen()
}

function showScreen(screenName) {
    document.querySelector('#' + screenName).style.display = 'flex'
}

function hideScreen(screenName) {
    document.querySelector('#' + screenName).style.display = 'none'
}

function handleDisplayClick() {
    exitFullscreen()
    hideScreen('gameModesScreen')
    showScreen('gameMenuScreen')
}

backBtn.addEventListener("click", handleDisplayClick)
