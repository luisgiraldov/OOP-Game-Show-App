/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

(function(){
    const newGame = new Game();
    const startBtn = document.getElementById("btn__reset");
    startBtn.addEventListener("click", () => {
        newGame.startGame();
    });

    const keyboard = document.getElementById("qwerty");
    keyboard.addEventListener("click", (event) => {
        newGame.handleInteraction(event);
    });
})();