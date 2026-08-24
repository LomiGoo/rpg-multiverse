# Project: RPG Multiverse

## Goal
A turn-based RPG web game featuring characters from various universes battling in Player vs. CPU combat.

---

## MVP Features

### Completed
- [x] Main Menu Screen (Play button and fullscreen toggle)
- [x] Game Mode Selection Screen (Player vs CPU mode)
- [x] Character Selection Screen (Roster display, portraits, descriptions, stats)
- [x] Turn Selection Screen (Combat turn style choice)
- [x] Starting Round Screen (Versus matchup display and countdown timer)
- [x] Character roster data (Joker, Rimuru, Regulus)
- [x] Player data structures (Base HP 5000, Attack, Defense, Skills)
- [x] CPU opponent randomizer

### To Be Built
- [ ] Battlefield Screen UI (Live HP display, character info, turn indicator)
- [ ] Combat Turn System (Rock-Paper-Scissors initiative selection and tie rule)
- [ ] Battle Actions (Attack, Defend, Skill buttons)
- [ ] Skill Cooldown System (Tracking turns until skills can be used again)
- [ ] Damage Calculation (Attack vs Defense formulas and damage reduction)
- [ ] CPU Combat AI (Randomized RPS and action selection)
- [ ] Game Over State (0 HP detection, winner/loser announcement, play again)

---

## Future Features

- [ ] Animated visual HP bar
- [ ] Ultimate skill action and turn 6 unlock cooldown
- [ ] Ultimate damage calculation and special effects
- [ ] Coin Bet combat turn style
- [ ] Sound effects and background music
- [ ] Player vs Player (PvP) mode
- [ ] User accounts and authentication
- [ ] Progression system and leaderboards

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

