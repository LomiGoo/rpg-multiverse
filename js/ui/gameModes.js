const backBtn = document.getElementById('backBtn')
const pvcBtn = document.getElementById('pvcBtn')

backBtn.addEventListener('click', () => {
    exitFullscreen()
    handleDisplayClick('gameModesScreen', 'gameMenuScreen')
})

pvcBtn.addEventListener('click', () => {
  populateCharacters()

  const character = characters[0]
    displaySelected(
    character.image,
    character.alt,
    character.description,
    character.name,
    character.attack,
    character.defense,
    character.skill_1,
    character.skill_2,
    character.skill_3,
    character.ultimate
  )

   handleDisplayClick('gameModesScreen', 'characterSelection')
})