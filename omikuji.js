let omikuji = ["超大吉", "大大吉", "大吉", "吉", "末吉"];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let btn = document.getElementsByClassName("btn")[0];

btn.onclick = function() {
  text(btn, omikuji[getRandomInt(5)])
}

function text(id, text) {
  id.innerHTML = text
}
