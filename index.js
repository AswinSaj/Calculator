const screeDisplay = document.querySelector(".screen");
const buttons = document.querySelectorAll("button");

let calculation = [];
let accumilativeCalculations;

function calculate(button) {
  const value = button.textContent;

  if (value === "CLEAR") {
    calculation = [];
    screeDisplay.textContent = "0";
  } else if (value === "=") {
    screenDisplay.textContent = eval(accumilativeCalculations);
    calculation = [];
    accumilativeCalculations = "";
  } else {
    calculation.push(value);
    accumilativeCalculations = calculation.join("");
    screeDisplay.textContent = accumilativeCalculations;
  }
}

buttons.forEach((button) =>
  button.addEventListener("click", () => calculate(button))
);
