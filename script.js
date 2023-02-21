// get all the id's

var displayText = document.getElementById("displayText");
var displayHint = document.getElementById("displayHint");
var refreshBtn = document.getElementById("refreshBtn");
var checkBtn = document.getElementById("checkBtn");
var userInput = document.getElementById("userInput");
var timeText = document.getElementById("timer");
var correctWord;
var timer;

// Timer function
function timerFunc(maxTime) {
  clearInterval(timer);

  timer = setInterval(function () {
    if (maxTime > 0) {
      maxTime--;
      // return used to clear interval
      return (timeText.innerText = maxTime);
    }
    // clearing interval
    clearTimeout(timer);
    alert("Times up" + " " + userWord + " " + "Is the correct word");
    game();
  }, 1000);
}

// game function to generate words

function game() {
  timerFunc(15);
  var wordObj = words[Math.floor(Math.random() * words.length)];
  var wordArray = wordObj.word.split("");
  var i;

  for (i = wordArray.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
  }

  // dom part
  displayText.innerHTML = wordArray.join("");
  correctWord = wordObj.word;
  userInput.value = " ";
  userInput.setAttribute("maxLength", wordArray.length);
  displayHint.innerHTML = wordObj.hint;
}

game();

// check word

function checkWord() {
  var userWord = userInput.value.toLocaleLowerCase();
  if (userWord != "") {
    if (userWord == correctWord) {
      alert("Congrats" + " " + userWord + " " + "Is the correct word");
    } else {
      alert("Opps" + " " + userWord + " " + "Is not correct word");
    }
  } else {
    alert("User Field is Empty");
  }
}

// refresh word
refreshBtn.onclick = function () {
  game();
};

// checking answer
checkBtn.onclick = function () {
  checkWord();
};
