function calcularCredito() {
  const monto = parseFloat(document.getElementById("monto").value);
  const plazo = parseInt(document.getElementById("plazo").value);
  const tasa = 0.05;

  if (isNaN(monto) || isNaN(plazo)) {
    alert("Por favor, ingresa valores válidos");
    return;
  }

  const pagoMensual = (monto * tasa) / (1 - Math.pow(1 + tasa, -plazo));
  document.getElementById(
    "resultado"
  ).textContent = `Tu pago mensual sería de $${pagoMensual.toFixed(2)}`;
}
