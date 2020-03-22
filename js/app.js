/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

(function(){
    const newGame = new Game();
    const newAnimation = new Animation();
    const startBtn = document.getElementById("btn__reset");
    startBtn.addEventListener("click", () => {
        newGame.resetKeyboard();
        newGame.resetHearts();
        //giving time to reset keys
        setTimeout(() => {
            let done = false;
            newGame.startGame();
            newAnimation.typeWriter(document.querySelectorAll(".js-hidden"));
        }, 150);
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
    // console.log(typeof newAnimation);
    newAnimation.typeWriter(document.querySelector("#overlay h2"));
})();