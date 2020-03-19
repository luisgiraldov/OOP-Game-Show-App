/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }

    /***
 	* Generates 2D array of spaces. 
    * @return  {Array}     An array of space objects
    ***/
   /***
    * `addPhraseToDisplay` method
    * Returns boolean value to check if the validation passed or not 
    * @param {Object} eventOrElement - holds the object that fired the event or the element we need to validate
    * adds letter placeholders to the display when the game starts. Each letter is presented by an empty box, one li element for each letter.
    ***/

    /***
    * `addPhraseToDisplay` method
    * adds letter placeholders to the display when the game starts. Each letter is presented by an empty box, one li element for each letter.
    ***/

    addPhraseToDisplay() {
        const divPhrase = document.getElementById("phrase");
        const ul = divPhrase.firstElementChild;
        const phraseArray = this.phrase.split("");
        phraseArray.map( character => {
            const li = document.createElement("LI");
            li.textContent = character;
            if(character !== " "){
                li.setAttribute("class", `hide letter ${character}`);  
            } else {
                li.setAttribute("class", "space");
            }
            ul.appendChild(li);
        });
        divPhrase.appendChild(ul);
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
}

// const prueba = new Phrase("How Are You");
// prueba.addPhraseToDisplay();

// prueba.showMatchedLetter(prueba.checkLetter("o"));
