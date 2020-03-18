# OOP-Game-Show-App
 Browser-based, word guessing game: "Phrase Hunter."

In this project, you'll create a browser-based, word guessing game: "Phrase Hunter." You’ll use JavaScript and OOP (Object-Oriented Programming) to select a random, hidden phrase, which a player tries to guess, by clicking letters on an onscreen keyboard.

Using JavaScript, you’ll create two JavaScript classes with specific properties and methods. You'll create a Game class for managing the game, and a Phrase class to help with creating an array of Phrase objects.

Your code will choose a random phrase, split the phrase into letters, and put those letters onto the gameboard.

Each time the player guesses a letter, the program compares the letter the player has chosen with the random phrase. If the letter is in the phrase, the gameboard displays the chosen letters on the screen.

A player continues to select letters until they guess the phrase (and win), or make five incorrect guesses (and lose).

If the player completes the phrase before they run out of guesses, a winning screen appears. If the player guesses incorrectly five times, a losing screen appears.

A player can guess a letter only once. After they’ve guessed a letter, your programming will need to disable that letter on the onscreen keyboard.

Understand the rules of the game:
The player’s goal is to guess all the letters in a hidden, random phrase. At the beginning, the player only sees the number of letters and words in the phrase, represented by blank boxes on the screen.
The player clicks an onscreen keyboard to guess letters in the phrase.
The letter is disabled on the onscreen keyboard and a player can't select that letter again.
If the selected letter is in the phrase at least once, the letter and its position in the phrase is highlighted on screen. All instances of the letter are made visible (so if there are 3 A's, all of the A's in the phrase appear at once).
If the selected letter is not in the phrase, one of the player's hearts in the scoreboard is changed from a "live" heart to a "lost" heart.
The player keeps choosing letters until they reveal all the letters in the phrase, or they make five incorrect guesses.