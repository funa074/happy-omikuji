let omikuji = ["超大吉", "大大吉", "大吉", "吉", "末吉"];
let btn = document.querySelector(".btn");
btn.setAttribute("onclick", "omikuiOnclick()");
let omikuji_class = document.querySelector(".omikuji");

function omikuiOnclick() {
  console.log(omikuji[getRandomInt(5)]);
  omikuji_class.textContent = omikuji[getRandomInt(5)];
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
