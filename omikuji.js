let omikuji = ["超大吉", "大大吉", "大吉", "吉", "末吉"];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let btn = document.getElementsByClassName("btn")[0];

function text(id, text) {
  id.innerHTML = text;
}

btn.onclick = function () {
  text(btn, omikuji[getRandomInt(5)]);
};

// let omikuji0 = "大吉";
// let omikuji1 = "吉";
// let omikuji2 = "凶";

// const a = new Number();
// console.log(a.toString(getRandomInt(3)));
