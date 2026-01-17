# Rock Paper Scissors Mini Project
This is a simple **Rock–Paper–Scissors game** implemented in **JavaScript** as part of the Foundations course in [The Odin Project](https://www.theodinproject.com/).  
The game runs entirely in the browser **console**, where the user can input their choice using a prompt, and the computer randomly selects its choice. The game keeps track of scores over **5 rounds** and declares a winner at the end.

---
## 🎮 How to Play
1. Open `index.html` in your browser.  
2. Open the **developer console** (e.g., `F12` or `Ctrl + Shift + I`).  
3. The game will prompt you to **enter your choice**:  
   - `rock`  
   - `paper`  
   - `scissors`  
4. The game will display:
   - The computer’s choice
   - Result of the round (win, lose, tie)  
5. Repeat for **5 rounds**.  
6. At the end, the **final score** and overall winner are displayed.
---
## 🛠️ Features

- **Random computer choice** using `Math.random()`.  
- **Case-insensitive** input from the user.  
- **Score tracking** for 5 rounds.  
- **Console-based interaction** — no HTML buttons or inputs required.  
- Uses **functions** to organize code:
  - `getComputerChoice()` → generates computer’s choice  
  - `getHumanChoice()` → prompts user for input  
  - `playRound()` → plays a single round  
  - `playGame()` → plays 5 rounds and calculates the winner  

---

## 🗂️ File Structure
rockpaperscissors/
├── index.html # Main HTML file linking to script.js
├── script.js # JavaScript file containing the game logic
└── README.md # Project documentation

---

## ⚡ Learning Goals

- Practice **basic JavaScript** concepts:
  - Functions
  - Conditional statements (`if/else`)
  - Loops (`for`)
  - User input with `prompt`
  - Console output with `console.log`
- Understand **game logic** and **score tracking**
- Learn how to structure a small JavaScript project

---

## 💡 Notes

- This is a **console-based project** for learning purposes.  
- User input is assumed to always be valid (`rock`, `paper`, or `scissors`).  
- No arrays or advanced data structures are used in this project.  
---
## 📌 License

This project is for **educational purposes** as part of The Odin Project.
