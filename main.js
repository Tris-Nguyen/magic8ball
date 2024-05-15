// Saving HTML elements as variables
var askBtnEl = document.getElementById("ask-btn");
var ansOutEl = document.getElementById("ans-out");
var questionIn = document.getElementById("question");

// Button event listener
askBtnEl.addEventListener("click", getAnswer);

// Event function for getting answer
function getAnswer() {
  var userQuestion = questionIn.value;

  // Empty question
  if (userQuestion == "") {
    ansOutEl.innerHTML = "Please ask a question...";
  } else {
    // Specific question
    if (userQuestion == "Does a magic 8 ball actually work?") {
      ansOutEl.innerHTML = "How dare you doubt me!";
    } else {
      // Random number 1-5 to determine the answer
      var ranNum = Math.floor(Math.random() * 5 + 1);

      if (ranNum == 1) {
        ansOutEl.innerHTML = "Without a Doubt.";
      } else if (ranNum == 2) {
        ansOutEl.innerHTML = "As I see it, yes.";
      } else if (ranNum == 3) {
        ansOutEl.innerHTML = "Concentrate and ask again.";
      } else if (ranNum == 4) {
        ansOutEl.innerHTML = "Don't count on it.";
      } else if (ranNum == 5) {
        ansOutEl.innerHTML = "Outlook not so good.";
      }
    }
  }

  ansOutEl.style.color = "green";
}
