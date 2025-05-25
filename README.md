# 🧠 Blink Tac Toe

A fun twist on the classic Tic Tac Toe game built using pure HTML, CSS, and JavaScript — with emojis and a vanishing rule!

---

## 🎯 Objective

Build a 2-player game that uses:
- Emoji categories instead of Xs and Os
- A “vanishing emoji” rule (each player can have only 3 emojis on the board)
- FIFO logic for emoji removal
- Win condition based on emoji placement
- Fun, interactive, and responsive UI

---

## 🚀 Live Demo

👉 [Play the game here](https://your-live-link.com)  
(*Replace with your deployed link after upload*)

---

## 🛠 Tech Stack

- **HTML** – for structure  
- **CSS** – for styling and layout  
- **Vanilla JavaScript** – for game logic and interactivity  

---

## 🎮 Game Rules

1. Game is played on a **3x3 grid**.
2. Each player is randomly assigned emojis from different categories:
   - Player 1: 🐶 🐱 🐵 🐰
   - Player 2: 🍕 🍟 🍔 🍩
3. On each turn, a random emoji is chosen for the current player.
4. Each player can have **only 3 emojis on the board**.
   - When a 4th emoji is placed, the oldest one **vanishes** (FIFO rule).
   - You **cannot place a new emoji** where your oldest one was.
5. The game is won by aligning 3 of your emojis **horizontally, vertically, or diagonally**.
6. The background turns green when someone wins.
7. Click **"Play Again"** to reset the board.

---

## 🔄 Vanishing Rule Explained

- Each player has a limit of 3 emojis on the board.
- When a player places a 4th emoji:
  - The **first-placed emoji disappears** (FIFO logic).
  - The **cell it was on becomes empty again**.
  - The new emoji **cannot overwrite the removed cell**.

---

## 🧰 Features

- ✅ Turn-based play
- ✅ Random emoji generation
- ✅ Vanishing rule enforcement
- ✅ Win condition detection
- ✅ Visual feedback on win (background turns green)
- ✅ Help popup for first-time users
- ✅ Fully responsive layout

---

## 🔧 How to Run

1. Download or clone the repository.
2. Open the `index.html` file in your browser.
3. Start playing!

---

