# Project: RPG Multiverse

## Goal
A turn-based RPG web game featuring characters from various universes

---

## MVP Features

### UI
- [x] Main Menu Screen (Play button and fullscreen toggle)
- [x] Game Mode Selection Screen
- [x] Character Selection Screen (Roster display, portraits, descriptions, stats)
- [x] Turn Selection Screen (Combat turn style choice)
- [x] Starting Round Screen (Versus matchup display and countdown timer)
- [ ] Battlefield Screen (Live HP text display, character portraits, turn indicator)
- [ ] Game Over Banner (Winner and loser announcement, play again button)

### Logic
- [x] Screen switching and navigation management
- [x] Fullscreen enter and exit controls
- [x] CPU opponent randomizer on character selection
- [x] Starting round countdown timer
- [ ] Rock-Paper-Scissors turn initiative resolution and tie rule
- [ ] Combat action handling (Attack, Defend, Skill buttons)
- [ ] Damage calculations (Attack vs Defense formulas and damage reduction)
- [ ] Skill cooldown management (Track turns until usable again)
- [ ] CPU combat decision making (Randomized RPS and action selection)
- [ ] Game state and Win/Lose detection (0 HP check)

### Data
- [x] Character roster dataset (Joker, Rimuru, Regulus stats and skills)
- [x] Player state models (Base HP 5000, Attack, Defense, Skill definitions)
- [x] Game mode state tracking (Player vs CPU)
- [ ] Live combat state (Current HP, active turn, turn count, cooldown counters)

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
4. Turn Style Selection -> Choose Rock-Paper-Scissors
5. Starting Round -> Matchup preview and 4-second countdown
6. Battlefield Initiative -> Player and CPU choose RPS option
7. Action Phase -> Winner of initiative executes Attack, Defend, or Skill
8. Round Evaluation -> Apply damage, update HP, and check for 0 HP
9. Game Over -> Announce winner/loser and offer restart option


