const backBtn = document.getElementById('backBtn')
const pvcBtn = document.getElementById('pvcBtn')

backBtn.addEventListener("click", () => {
    exitFullscreen()
    handleDisplayClick('gameModesScreen', 'gameMenuScreen')
})

pvcBtn.addEventListener('click', () => {
    handleDisplayClick('gameModesScreen', 'characterSelection')
})