/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {

    constructor() {
        this.missed = 0;
        this.phrases = ["Think Less Do More", "Do All Things With Love", "Think Deeply", "Speak Gently", "Love Much", "Laugh A Lot", "Work Hard", "Be Kind"];
        this.activePhrase = null;
    }

    /***
    * `getRandomPhrase` method
    * @return  {String} random phrase
    * this method randomly retrieves one of the phrases stored in the phrases array and returns it.
    ***/
    getRandomPhrase() {
        const randomNumber = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomNumber]; 
    }

    /***
    * `startGame` method
    * hides the start screen overlay, calls the getRandomPhrase() method, and sets the activePhrase property with the chosen phrase. 
    * It also adds that phrase to the board by calling the addPhraseToDisplay() method on the active Phrase object.
    ***/
    startGame() {
        const overlayScreen = document.getElementById("overlay");
        overlayScreen.style.display = "none";
        this.activePhrase = new Phrase(this.getRandomPhrase());
        this.activePhrase.addPhraseToDisplay();
    }

    /***
    * `gameOver` method
    * @param {String} message - holds the message that it will show when the game is over
    * this method displays the original start screen overlay, and depending on the outcome of the game, updates the 
    * overlay h1 element with a friendly win or loss message, and replaces the overlay’s start CSS class with either the win or lose CSS class..
    ***/
    gameOver(message){
        const overlayScreen = document.getElementById("overlay");
        const gameOverMessage = document.getElementById("game-over-message");
        overlayScreen.style.display = "";
        gameOverMessage.textContent = message;
        if(message === "You Win!"){
            overlayScreen.className = "win";
        } else if(message === "You Lost!") {
            overlayScreen.className = "lose";
        }
    }

    /***
    * `removeLife` method
    * this method removes a life from the scoreboard, by replacing one of the liveHeart.png images with a lostHeart.png image
    * and increments the missed property. If the player has five missed guesses (i.e they're out of lives), then end the game by calling the gameOver() method.
    ***/
    removeLife() {
        const img_Scoreboard = document.querySelectorAll("li.tries > img");
        img_Scoreboard[this.missed].setAttribute("src", "images/lostHeart.png");
        this.missed += 1;
        if(this.missed === 5){
            this.gameOver("You Lost!");
        }
    }

    /***
    * `checkForWin` method
    * @return  {Boolean} holds a boolean value indicating if the players has won
    * this method checks to see if the player has revealed all of the letters in the active phrase.
    ***/
    checkForWin() {
        const phrase = this.activePhrase.phrase.replace(/\s/g, "");
        const matches = document.querySelectorAll("li.show");
        if(phrase.length === matches.length){
            return true;
        } else {
            return false;
        }
    }

    /***
    * `handleInteraction` method
    * @param {Object} event - holds the event that was fired with the click
    * this method controls most of the game logic. It checks to see if the button clicked by the player matches 
    * a letter in the phrase, and then directs the game based on a correct or incorrect guess
    ***/
    handleInteraction(event) {
        if(event.target.tagName === "BUTTON"){
            const matches = this.activePhrase.checkLetter(event.target.textContent);
            event.target.setAttribute("disable", true);
            if(matches.length > 0){
                event.target.setAttribute("class", "chosen");
                this.activePhrase.showMatchedLetter(matches);
                if(this.checkForWin()){
                    this.gameOver("You Win!");
                }
            } else {
                event.target.setAttribute("class", "wrong");
                this.removeLife();
            }
        }
    } //end handleInteraction


}

const probando = new Game();
probando.startGame();
