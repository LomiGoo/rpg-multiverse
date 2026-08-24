document.getElementById('selectionBackButton').addEventListener('click', () => {
    switchScreen('characterSelectionScreen', 'gameModeScreen')
})

document.getElementById('selectionNextButton').addEventListener('click', () => {
    switchScreen('characterSelectionScreen', 'turnSelectionScreen')
})

function populateCharacters() {
    const roster = document.getElementById('roster')
    
    for (const character of characters) {
        if (roster.children.length === characters.length) break
         
        const rosterImage = document.createElement('img')

        rosterImage.classList.add('rosterCharacterImage')

        rosterImage.src = character.imageUrl
        rosterImage.alt = character.imageAlt

        roster.appendChild(rosterImage)

        rosterImage.addEventListener('click', () => {
            renderSelectedCharacter(character)
        })
    }
}

function renderSelectedCharacter(character) {
    const characterImage = document.querySelector('#characterInfo img')
    const descriptionPanel = document.getElementById('characterDescription')
    const descriptionText = document.querySelector('#characterDescription p')
    const characterName = document.getElementById('characterName')
    const attackValue = document.getElementById('attackValue')
    const defenseValue = document.getElementById('defenseValue')
    const firstSkill = document.getElementById('firstSkill')
    const secondSkill = document.getElementById('secondSkill')
    const thirdSkill = document.getElementById('thirdSkill')
    const ultimateSkill = document.getElementById('ultimateSkill')

    characterImage.src = character.imageUrl
    characterImage.alt = character.imageAlt
    descriptionText.textContent = character.description
    descriptionPanel.scrollTop = 0
    characterName.textContent = character.name
    attackValue.textContent = 'Attack: ' + character.attack
    defenseValue.textContent = 'Defense: ' + character.defense
    firstSkill.textContent = '1st Skill: ' + character.skillOne
    secondSkill.textContent = '2nd Skill: ' + character.skillTwo
    thirdSkill.textContent = '3rd Skill: ' + character.skillThree
    ultimateSkill.textContent = 'Ultimate: ' + character.ultimateSkill
    
    if (gameMode === 'pvc') {
        selectCharacter(character, randomizedCharacter())
    }
}
