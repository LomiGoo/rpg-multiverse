# Project: RPG Multiverse

## Goal
A turn-based RPG web game featuring characters from various universes featuring PvC & PvP

---

## MVP Features

### UI
- [x] Main Menu Screen 
- [x] Game Mode Selection Screen
- [x] Character Selection Screen 
- [x] Turn Selection Screen 
- [x] Starting Round Screen
- [ ] Battlefield Screen 
- [ ] Game Over Banner 

### Logic
- [x] Screen switching and navigation management
- [x] Fullscreen enter and exit controls
- [x] CPU opponent randomizer on character selection
- [x] Starting round countdown timer
- [ ] Blunt-Wrap-Cut turn initiative resolution and tie rule
- [ ] Combat action handling 
- [ ] Damage calculations 
- [ ] Skill cooldown management
- [ ] CPU combat decision making 
- [ ] Game state and Win/Lose detection

### Data
- [x] Character roster dataset
- [x] Player state models 
- [x] Game mode state tracking 
- [ ] Live combat state 

---

## Future Features

### UI
- [ ] Animated visual HP bars
- [ ] Special visual effects for skills and ultimates
- [ ] Sound effects and background music

### Logic
- [ ] Ultimate skill execution and turn 6 unlock cooldown
- [ ] Coin Bet combat turn initiative system
- [ ] Ultimate damage calculation
- [ ] Player vs Player (PvP) mode

### Data
- [ ] User accounts and authentication data
- [ ] Progression system and leaderboard records

---

## Gameplay Loop

1. Main Menu -> Click Play
2. Game Mode -> Select Player vs CPU
3. Character Selection -> Pick a character (CPU randomly selected)
4. Turn Style Selection -> Choose Blunt-Wrap-Cut
5. Starting Round -> Matchup preview and 4-second countdown
6. Battlefield Initiative -> Player and CPU choose a Blunt, Wrap, or Cut option
7. Action Phase -> Winner of initiative executes Attack, Defend, or Skill
8. Round Evaluation -> Apply damage, update HP, and check for 0 HP
9. Game Over -> Announce winner/loser and offer restart option


