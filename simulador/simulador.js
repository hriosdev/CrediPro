const periodText = document.querySelector("p#period-text");

const periodInputElement = document.querySelector("input#period");
const amountInputElement = document.querySelector("input#amount");
const amountTextElement = document.querySelector("h3#amount-text");

periodInputElement.addEventListener("input", function () {
  calculateCreditAmount();
});
amountInputElement.addEventListener("input", function () {
  calculateCreditAmount();
});

document.querySelector("form#calculator-form").addEventListener("submit", function (event) {
  event.preventDefault();
});

const calculateCreditAmount = () => {
  try {
    const mount = parseFloat(amountInputElement.value);
    const time = parseInt(periodInputElement.value);

    const rate = 0.05;

    if (isNaN(mount) || isNaN(time)) throw new Error("Por favor, ingresa valores válidos.");

    const resultInputElement = document.querySelector("p#resultado");
    const payment = (mount * rate) / (1 - Math.pow(1 + rate, -time));
    const textContext = `Tu pago mensual sería de <strong>$${payment.toFixed(2)}</strong>`;

    amountTextElement.innerHTML = "$ " + amountInputElement.value + ".00";
    resultInputElement.innerHTML = textContext;
    periodText.innerHTML = periodInputElement.value + " quincenas";
  } catch (error) {
    window.alert(error.message);
  }
};

document.addEventListener("DOMContentLoaded", updatePeriodText);
