const players = [
    {
        id: null,
        name: null,
        hp: 5000,
        attack: null,
        defense: null,
        skills: [null, null, null],
        ultimateSkill: null,
        imageUrl: null
    },
    {
        id: null,
        name: null,
        hp: 5000,
        attack: null,
        defense: null,
        skills: [null, null, null],
        ultimateSkill: null,
        imageUrl: null
    }
]

function selectCharacter(player1, player2) {
    const chosenCharacter = [player1, player2]

    for (let i = 0; i < players.length; i++) {
        players[i].id = chosenCharacter[i].characterId
        players[i].name = chosenCharacter[i].name
        players[i].attack = chosenCharacter[i].attack
        players[i].defense = chosenCharacter[i].defense
        players[i].skills[0] = chosenCharacter[i].skills[0]
        players[i].skills[1] = chosenCharacter[i].skills[1]
        players[i].skills[2] = chosenCharacter[i].skills[2]
        players[i].ultimateSkill = chosenCharacter[i].ultimateSkill
        players[i].imageUrl = chosenCharacter[i].imageUrl
    }
}

function randomizedCharacter() {
    const randomObjCharacter = Math.floor(Math.random() * characters.length)

    const selectedCharacter = characters[randomObjCharacter]
    
    return selectedCharacter
}