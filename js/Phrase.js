/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }

    /***
    * `addPhraseToDisplay` method
    * adds letter placeholders to the display when the game starts. Each letter is presented by an empty box, one li element for each letter.
    * modified to add js-hidden class to give animation to the phrase
    ***/

    addPhraseToDisplay() {
        const divPhrase = document.getElementById("phrase");
        const ul = divPhrase.firstElementChild;
        const phraseArray = this.phrase.split("");
        phraseArray.map( character => {
            const li = document.createElement("LI");
            li.textContent = character;
            if(character !== " "){
                li.setAttribute("class", `js-hidden hide letter ${character}`);  
            } else {
                li.setAttribute("class", "js-hidden space");
            }
            ul.appendChild(li);
        });
    }

    
    /***
    * `checkLetter` function
    * @return  {Array} An array of matched elements
    * @param {String} selected - holds letter that the user has selected
    * checks to see if the letter selected by the player matches a letter in the phrase.
    ***/
    checkLetter(selected) {
        const letters = Array.prototype.slice.call(document.querySelectorAll(".letter"));
        const matchedLetters = letters.filter( letter => letter.textContent === selected.toLowerCase() ); 
        return matchedLetters;
    }

    /***
    * `showMatchedLetter` method
    * @param {Array} match - holds the array of elements that matched the user's letter 
    * reveals the letter(s) on the board that matches the player's selection.
    ***/
    showMatchedLetter(match) {
        match.map( li => {
            if(li.classList.contains("hide")){
                li.classList.remove("hide");
                li.classList.add("show");
            }
        });
    }

    /***
    * `showMatchedLetter` method
    * Remove all li elements from the Phrase ul element.
    ***/
    removePhrase(){
        const ul = document.querySelector("#phrase > ul");
        ul.innerHTML = "";
    }
} //end Phrase
