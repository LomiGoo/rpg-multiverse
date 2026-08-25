document.getElementById('selection-back-button').addEventListener('click', () => {
    switchScreen('character-selection-screen', 'game-mode-screen')
})

document.getElementById('selection-next-button').addEventListener('click', () => {
    switchScreen('character-selection-screen', 'turn-selection-screen')
})

function populateCharacters() {
    const roster = document.getElementById('roster')
    
    for (const character of characters) {
        if (roster.children.length === characters.length) break
         
        const rosterImage = document.createElement('img')

        rosterImage.classList.add('roster-character-image')

        rosterImage.src = character.imageUrl
        rosterImage.alt = character.imageAlt

        roster.appendChild(rosterImage)

        rosterImage.addEventListener('click', () => {
            renderSelectedCharacter(character)
        })
    }
}

function renderSelectedCharacter(character) {
    const characterImage = document.querySelector('#character-info img')
    const descriptionPanel = document.getElementById('character-description')
    const descriptionText = document.querySelector('#character-description p')
    const characterName = document.getElementById('character-name')
    const attackValue = document.getElementById('attack-value')
    const defenseValue = document.getElementById('defense-value')
    const firstSkill = document.getElementById('first-skill')
    const secondSkill = document.getElementById('second-skill')
    const thirdSkill = document.getElementById('third-skill')
    const ultimateSkill = document.getElementById('ultimate-skill')

    characterImage.src = character.imageUrl
    characterImage.alt = character.imageAlt
    descriptionText.textContent = character.description
    descriptionPanel.scrollTop = 0
    characterName.textContent = character.name
    attackValue.textContent = 'Attack: ' + character.attack
    defenseValue.textContent = 'Defense: ' + character.defense
    firstSkill.textContent = '1st Skill: ' + character.skills[0]
    secondSkill.textContent = '2nd Skill: ' + character.skills[1]
    thirdSkill.textContent = '3rd Skill: ' + character.skills[2]
    ultimateSkill.textContent = 'Ultimate: ' + character.ultimateSkill
    
    if (gameMode === 'pvc') {
        selectCharacter(character, randomizedCharacter())
    }
}
