const backBtn2 = document.getElementById('backBtn2')
const nextBtn = document.getElementById('nextBtn')

backBtn2.addEventListener('click', () => {
    handleDisplayClick('characterSelection', 'gameModesScreen')
})

nextBtn.addEventListener('click', () => {
    handleDisplayClick('characterSelection', 'combatTurnScreen')
})

