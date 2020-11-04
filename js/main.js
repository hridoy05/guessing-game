let btn_start = document.getElementById("start")
let btn_reset = document.getElementById("reset")
let btn_check = document.getElementById("check")

let main_div = document.getElementById("main-div")

let guess_box = document.getElementById("guess-box")

let all_guesses = document.getElementById("all-guesses")

let high_or_low = document.getElementById("high-or-low")

let random_num = Math.floor(Math.random() * 100) + 1

let count_guess = 1;

function start() {
    main_div.style.visibility = "visible"
}

function checkGuess() {

    let your_guess = Number(guess_box.value)

    if (count_guess < 5) {

        if (your_guess < random_num) {
            all_guesses.textContent += your_guess + " "
            high_or_low.textContent = "Your Guess is Low"
            high_or_low.classList.add("wrong")
            count_guess++;
            guess_box.value = ''
        }
        else if (your_guess > random_num) {
            all_guesses.textContent += your_guess + " "
            high_or_low.textContent = "Your Guess is High"
            high_or_low.classList.add("wrong");
            count_guess++
            guess_box.value = " "
        }
        else {
            all_guesses.textContent += your_guess + " "
            high_or_low.textContent = "Congratulation! Your Guess is right"
            high_or_low.classList.add("sucess")
            guess_box.value = " "
            gameOver()
        }


    }
    else {

        all_guesses.textContent += your_guess +" ";
        high_or_low.textContent = "Game Over! Sorry, your chances are over.";
        high_or_low.classList.add("wrong");
        guess_box.value = ' ';
        gameOver()
    }


}

function gameOver() {
    btn_check.disabled = true;
    guess_box.disabled = true
}
