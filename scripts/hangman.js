class Hangman {
  constructor(word, guessNum) {
    this.word = word.toLowerCase().split("");
    this.guessNum = guessNum;
    this.guessedLetters = [];
    this.status = "Playing";
  }
  get puzzle() {
    let puzzle = "";
    this.word.forEach((letter) => {
      if (this.guessedLetters.includes(letter) || letter === " ") {
        puzzle += letter;
      } else {
        puzzle += "*";
      }
    });
    return puzzle;
  }
  recStatus() {
    const finished = this.word.every(
      (letter) => this.guessedLetters.includes(letter) || letter === " "
    );

    const failed = this.guessNum < 1;
    if (finished) {
      this.status = "Finished";
    } else if (failed) {
      this.status = "Failed";
    } else {
      this.status = "Playing";
    }
  }

  get statusMessage() {
    if (this.status === "Finished") {
      return `Great work: you guessed the word`;
    } else if (this.status === "Failed") {
      const word = this.word.join("");
      return `Nice try! the word was "${word}"`;
    } else {
      return `Guesses Left: ${this.guessNum}`;
    }
  }
  makingGuess(guess) {
    const isUnique = !this.guessedLetters.includes(guess); //-->l -->true, l-->false
    const isBadGuess = !this.word.includes(guess); // -->l --> false-->false
    if (isUnique) {
      this.guessedLetters.push(guess);
    }
    if (isUnique && isBadGuess) {
      this.guessNum--;
    }
    this.recStatus();
  }
}
