const backBtn3 = document.getElementById('backBtn3')
const rpsBtn = document.getElementById('rpsBtn')

backBtn3.addEventListener("click", () => {
    handleDisplayClick('combatTurnScreen', 'characterSelection')
})

rpsBtn.addEventListener('click', () => {
    handleDisplayClick('combatTurnScreen', 'characterSelection')
})