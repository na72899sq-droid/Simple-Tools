// Percentage Calculator
document.addEventListener("DOMContentLoaded", () => {
  const partInput = document.getElementById("partInput");
  const totalInput = document.getElementById("totalInput");
  const calcBtn = document.getElementById("calcBtn");
  const resultDisplay = document.getElementById("result");

  calcBtn.addEventListener("click", () => {
    const part = parseFloat(partInput.value);
    const total = parseFloat(totalInput.value);

    if (isNaN(part) || isNaN(total) || total === 0) {
      alert("Please enter valid numbers (total cannot be 0)");
      return;
    }

    const percentage = (part / total) * 100;
    resultDisplay.textContent = `${percentage.toFixed(2)}%`;
  });
});
