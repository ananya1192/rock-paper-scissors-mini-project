This is a Rock–Paper–Scissors game built with HTML, CSS, and JavaScript as part of the Foundations course in The Odin Project
.

Unlike the earlier console-based version, this implementation features a fully interactive browser UI where the player selects their move by clicking buttons. The game tracks scores dynamically and declares a winner when either the player or the computer reaches 5 points.

🎮 How to Play

Open index.html in your browser.

Click one of the buttons:

- Rock

- Paper

- Scissors

Each click plays one round against the computer.

The game displays:

- The result of the round

- The running score for both player and computer

The game ends when either the player or the computer reaches 5 points, and a winner is announced.

🛠️ Features

🎯 Button-based UI (no prompts or console input)

🤖 Random computer choice

📊 Live score tracking

🏆 Automatic winner announcement at 5 points

🖱️ Event-driven gameplay using DOM events

🔄 Game logic separated into reusable functions

🧠 JavaScript Concepts Used

- DOM manipulation (querySelector, textContent)

- Event handling (addEventListener)

- Functions and parameters

- Conditional logic (if / else)

- Randomization using Math.random()

- Use of data-* attributes for cleaner event handling

🗂️ File Structure
rockpaperscissors/
├── index.html   # Game UI structure
├── script.js    # Game logic and DOM interaction
└── README.md    # Project documentation

⚡ Learning Goals

- Transition from console-based JavaScript to interactive UI-based applications

- Understand event-driven programming

- Practice DOM manipulation

- Learn how to refactor existing code for new requirements

- Use Git branches for feature development (rps-ui)

💡 Notes

- This project was refactored from a console-based version to a UI-based version.

- The game stops accepting input once a winner is declared.

- Styling is intentionally minimal to focus on JavaScript fundamentals.

📌 License

This project is for educational purposes as part of The Odin Project curriculum.
