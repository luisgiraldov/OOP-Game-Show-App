/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {

    constructor() {
        this.missed = 0;
        this.phrases = ["Think Less Do More", "Do All Things With Love", "Think Deeply", "Speak Gently", "Love Much", "Laugh A Lot", "Work Hard", "Be Kind"];
        this.activePhrase = null;
    }

    getRandomPhrase() {
        const randomNumber = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomNumber]; 
    }

    startGame() {
        const overlayScreen = document.getElementById("overlay");
        overlayScreen.style.display = "none";
        this.activePhrase = new Phrase(this.getRandomPhrase());
        this.activePhrase.addPhraseToDisplay();
    }

    handleInteraction(){
        
    }
}

const probando = new Game();
probando.startGame();