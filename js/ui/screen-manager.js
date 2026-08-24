function hideScreen(screenId) {
    document.querySelector('#' + screenId).style.display = 'none'
}

function showScreen(screenId) {
    document.querySelector('#' + screenId).style.display = 'flex'
}

function enterFullscreen() {
    document.documentElement.requestFullscreen()
}

function exitFullscreen() {
    document.exitFullscreen()
}

function switchScreen(screenToHide, screenToShow) {
    hideScreen(screenToHide)
    showScreen(screenToShow)
}
