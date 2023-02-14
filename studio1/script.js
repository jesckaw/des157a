(function() {
  "use strict";
  console.log("reading js");

  let calculationCount = 0;
  const form = document.querySelector("form");
  const resultFrame = document.getElementById("result");

  form.addEventListener("submit", function(event) {
    const name1 = document.getElementById("name1").value;
    const name2 = document.getElementById("name2").value;
    const color1 = document.getElementById("color1").value;
    const color2 = document.getElementById("color2").value;
    const song1 = document.getElementById("song1").value;
    const song2 = document.getElementById("song2").value;
    const food1 = document.getElementById("food1").value;
    const food2 = document.getElementById("food2").value;
    const sign1 = document.getElementById("sign1").value;
    const sign2 = document.getElementById("sign2").value;
    event.preventDefault();
    
    if (!name1 || !name2 || !color1 || !color2 || !song1 || !song2 || !food1 || !food2 || !sign1 || !sign2) {
      const resultFrame = document.getElementById("result");
      resultFrame.style.backgroundImage = 'url(images/warning.png)'
      resultFrame.className = "overlay";
      return;
    }

    if (calculationCount >= 1) {
      document.getElementById("result").innerHTML = "you can only calculate once.";
      return;
    }
  
    calculationCount += 1;
    const loveScore = Math.floor(Math.random() * 100) + 1;

    resultFrame.innerHTML = '';

    if (loveScore >= 70) {
      console.log(loveScore);
      resultFrame.style.backgroundImage = 'url(images/good-score.png)';
    } else if (loveScore >= 40) {
      console.log(loveScore);
      resultFrame.style.backgroundImage = 'url(images/avg-score.png)';
    } else {
      console.log(loveScore);
      resultFrame.style.backgroundImage = 'url(images/bad-score.png)';
    }

    resultFrame.className = "overlay";

    // Create a new paragraph element to display the love score as text
    const loveScoreText = document.createElement('p');
    loveScoreText.innerHTML = `${loveScore}%`;

    // Add the text to the resultFrame
    resultFrame.appendChild(loveScoreText);

    
    const overlay = document.getElementById("result");
    overlay.addEventListener('click', function() {
      location.reload();
    });

  });

})();
