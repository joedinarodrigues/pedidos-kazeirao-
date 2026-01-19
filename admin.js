function salvar() {
  localStorage.setItem("precos", JSON.stringify({
    frango: precoFrango.value,
    carne: precoCarne.value,
    peixe: precoPeixe.value
  }));
  alert("Salvo!");
}
