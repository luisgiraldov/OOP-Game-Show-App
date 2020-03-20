/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

(function(){
    const newGame = new Game();
    const startBtn = document.getElementById("btn__reset");
    startBtn.addEventListener("click", () => {
        newGame.resetKeyboard();
        newGame.resetHearts();
        newGame.startGame();
    });

    const keyboard = document.getElementById("qwerty");
    keyboard.addEventListener("click", (event) => {
        if(event.target.tagName === "BUTTON"){
            newGame.handleInteraction(event);
        } 
    });
    const body = document.getElementsByTagName("body")[0];
    body.addEventListener("keydown", event => {
        if(event.keyCode >= 65 && event.keyCode <= 90 && newGame.playing){
            newGame.handleInteraction(event)
        }
    });
})();