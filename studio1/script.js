const form = document.querySelector("form");
form.addEventListener("submit", function(event) {
  event.preventDefault();
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
  const loveScore = Math.floor(Math.random() * 100) + 1;
  document.getElementById("result").innerHTML = `Your love score is: ${loveScore}%`;
});