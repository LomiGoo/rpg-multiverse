const backBtn2 = document.getElementById('backBtn2')
const nextBtn = document.getElementById('nextBtn')
const roster = document.getElementById('roster')
const charImg = document.querySelector('#charInfo img')
const descriptionDisplay = document.getElementById('charDescription')
const charDescript = document.querySelector('#charDescription p')
const charName = document.getElementById('charName')
const attackStat = document.getElementById('attackStat')
const defenseStat = document.getElementById('defenseStat')
const firstSkill = document.getElementById('firstSkill')
const secondSkill = document.getElementById('secondSkill')
const thirdSkill = document.getElementById('thirdSkill')
const ultimateSkill = document.getElementById('ultimateSkill')

backBtn2.addEventListener('click', () => {
    handleDisplayClick('characterSelection', 'gameModesScreen')
})

nextBtn.addEventListener('click', () => {
    handleDisplayClick('characterSelection', 'combatTurnScreen')
})

function populateCharacters() {
    for (const character of characters) {
        if (roster.children.length === characters.length) break
         
        const char = document.createElement('img')

        char.classList.add('charImage')

        char.src = character.image
        char.alt = character.alt 
        
        roster.appendChild(char)

        char.addEventListener('click', () => {
            displaySelected(character.image, character.alt, character.description, character.name, character.attack, character.defense, character.skill_1, character.skill_2, character.skill_3, character.ultimate)
        })
    }
}

function displaySelected(image, alt, description, name, attack, defense, skill_1, skill_2, skill_3, ultimate) {
    charImg.src = image
    charImg.alt = alt
    charDescript.textContent = description
    descriptionDisplay.scrollTop = 0
    charName.textContent = name
    attackStat.textContent = 'Attack: ' + attack
    defenseStat.textContent = 'Defense: ' + defense
    firstSkill.textContent = '1st Skill: ' + skill_1
    secondSkill.textContent = '2nd Skill: ' + skill_2
    thirdSkill.textContent = '3rd Skill: ' + skill_3
    ultimateSkill.textContent = 'Ultimate: ' + ultimate
}