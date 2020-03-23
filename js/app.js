/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/***
* Instantiate a new game object
* Instantiate a new animation object
***/
(function(){
    const newGame = new Game();
    const newAnimation = new Animation();
    const startBtn = document.getElementById("btn__reset");
    const keyboard = document.getElementById("qwerty");
    const body = document.getElementsByTagName("body")[0];
    /***
    * Add event listener to the start button
    ***/    
    startBtn.addEventListener("click", () => {
        newGame.resetKeyboard();
        newGame.resetHearts();
        //giving time to reset keys
        setTimeout(() => {
            newGame.startGame();
            newAnimation.typeWriter(document.querySelectorAll(".js-hidden"));
        }, 150);
    });

    /***
    * Add event listener to the keyboard parent (event delegation)
    ***/ 
    keyboard.addEventListener("click", (event) => {
        if(event.target.tagName === "BUTTON"){
            newGame.handleInteraction(event);
        } 
    });

    /***
    * Add event listener to the body (event delegation)
    ***/ 
    body.addEventListener("keydown", event => {
        if(event.keyCode >= 65 && event.keyCode <= 90 && newGame.playing){
            newGame.handleInteraction(event)
        }
    });
    
    //Calls the typeWriter animation on the title
    newAnimation.typeWriter(document.querySelector("#overlay h2"));
})();