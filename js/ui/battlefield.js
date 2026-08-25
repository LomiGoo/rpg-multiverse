document.getElementById('skills-button').addEventListener('click', () => {
    displaySkills()
    renderSkills()
})
document.getElementById('return-button').addEventListener('click', hideSkills)

function renderBattlefield() {
    document.querySelector('#player-1 .player-character').src = players[0].imageUrl
    document.querySelector('#player-2 .player-character').src = players[1].imageUrl

    document.querySelector('#player-1-info .player-name').textContent = 'User ' + '(' + players[0].name + ')'
    document.querySelector('#player-2-info .player-name').textContent = '(' + players[1].name + ') ' + 'User'

    document.querySelector('#player-1-info .health-status').textContent = 'HP : ' + players[0].hp + ' / 5000'
    document.querySelector('#player-2-info .health-status').textContent = '5000 / ' + players[1].hp + ' : HP'

    document.querySelector('#decision-menu #ultimate-skill').textContent = 'ULTIMATE : ' + players[0].ultimateSkill
}

function displaySkills() {
    document.getElementById('decision-menu').style.display = 'none'
    document.getElementById('skills').style.display = 'grid'
}

function hideSkills() {
    document.getElementById('skills').style.display = 'none'
    document.getElementById('decision-menu').style.display = 'grid'
}

function renderSkills() {
    document.querySelectorAll('#skills .skill').forEach((skill, index) => {
        skill.textContent = players[0].skills[index]
    })
}
