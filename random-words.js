function randomWord() {
  var words = ["hello", "world", "how", "are", "you"];
  return words[Math.floor(Math.random() * 5)];
}

function randomSentence() {
  var words = ["hello", "world", "how", "are", "you"];
  var sentence = "";
  for (var i = 0; i < 5; i++) {
    sentence += words[Math.floor(Math.random() * 5)] + " ";
  }
  return sentence;
}

window.onload = function() {
  var word = randomWord();
  var sentence = randomSentence();

  document.getElementById("word").innerHTML = word;
  document.getElementById("sentence").innerHTML = sentence;
};
