const playBtn = document.getElementById('playBtn')

function fullscreen() {
    document.documentElement.requestFullscreen()
}

playBtn.addEventListener("click", fullscreen)