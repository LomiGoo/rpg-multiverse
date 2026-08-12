function hideScreen(screenName) {
    document.querySelector('#' + screenName).style.display = 'none'
}

function showScreen(screenName) {
    document.querySelector('#' + screenName).style.display = 'flex'
}

function fullscreen() {
    document.documentElement.requestFullscreen()
}

function exitFullscreen() {
    document.exitFullscreen()
}

function handleDisplayClick(hide, show) {
    hideScreen(hide)
    showScreen(show)  
}