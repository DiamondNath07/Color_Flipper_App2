const colors = ["green", "blue", "red", "rgba(233,134,255,.5", "#f314A1"];
// const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const value = document.getElementById("value");

const btn = document.querySelector(".btn");
const color = document.getElementById("color");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  value.style.color = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
