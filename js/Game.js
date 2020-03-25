/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {

    constructor() {
        this.missed = 0;
        this.phrases = ["Think Less Do More", "Do All Things With Love", "Think Deeply", "Speak Gently", "Love Much", "Laugh A Lot", "Work Hard", "Be Kind"];
        this.activePhrase = null;
        this.playing = false;
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
        this.activePhrase.removePhrase();
        this.activePhrase.addPhraseToDisplay();
        this.playing = true;
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
            if(gameOverMessage.classList.contains("loseColor")){
                gameOverMessage.classList.remove("loseColor");
            }
            gameOverMessage.classList.add("winColor");
        } else if(message === "You Lost!") {
            overlayScreen.className = "lose";
            if(gameOverMessage.classList.contains("winColor")){
                gameOverMessage.classList.remove("winColor");
            }
            gameOverMessage.classList.add("loseColor");
        }

        //reveal block effect
        gameOverMessage.classList.add("reveal-block");
        this.playing = false;
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
        let target = null,
            matches = null;
        if(event.type === "keydown"){
            //event.code.replace("Key", "").toLowerCase(); gets the KeyCode, replace the "key" from the string and lowercase the letter
            const letterPressed = event.code.replace("Key", "").toLowerCase();
            target = document.querySelector(`[data-key="${letterPressed}"]`);
            matches = this.activePhrase.checkLetter(letterPressed);
        }

        if(event.type === "click"){
            target = event.target;
            matches = this.activePhrase.checkLetter(target.textContent);
        }

        if(matches && matches.length > 0){
            target.setAttribute("class", "chosen");
            this.activePhrase.showMatchedLetter(matches);
            if(this.checkForWin()){
                this.gameOver("You Win!");
            }
        } else {
            if(!target.hasAttribute("disabled")){
                target.setAttribute("class", "wrong");
                this.removeLife();
            }
        }

        target.setAttribute("disabled", true);
    } //end handleInteraction

    /***
    * `resetKeyBoard` method
    * this method iterates over every key to reset its class and to remove the disabled attribute
    ***/
    resetKeyboard() {
        const buttons = Array.prototype.slice.call(document.querySelectorAll("[data-key]"));
        buttons.map( button => {
            button.className = "key";
            if(button.hasAttribute("disabled")){
                button.removeAttribute("disabled");
            }
        });
    }

    /***
    * `resetHearts` method
    * this method iterates over each heart image to change it to liveHeart.png
    * this method resets the missed variable
    ***/
    resetHearts() {
        const img_Scoreboard = document.querySelectorAll("li.tries > img");
        img_Scoreboard.forEach( img => img.setAttribute("src", "images/liveHeart.png"));
        this.missed = 0;
    }

} //end Game
