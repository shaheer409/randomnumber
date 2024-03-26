const randomButton = document.getElementById("randomButton");
const randomNumberDisplay = document.getElementById("randomNumber");

randomButton.addEventListener("click", () => {
  const randomNum = Math.floor(Math.random() * 100);
  alert(randomNum);
});