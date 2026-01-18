let pedido = [];
let total = 0;

document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    const nome = card.dataset.nome;
    const preco = Number(card.dataset.preco);

    pedido.push(`${nome} - R$ ${preco}`);
    total += preco;

    atualizar();
  });
});

function atualizar() {
  const lista = document.getElementById("lista");
  const totalSpan = document.getElementById("total");

  lista.innerHTML = "";
  pedido.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    lista.appendChild(li);
  });

  totalSpan.textContent = total;
}

document.getElementById("btnWhats").addEventListener("click", () => {
  if (!pedido.length) {
    alert("Adicione itens ao pedido");
    return;
  }

  const msg = encodeURIComponent(
    "🍽️ Pedido Kazeirão\n\n" +
    pedido.join("\n") +
    "\n\nTotal: R$ " + total
  );

  window.open(
    "https://wa.me/559884168590?text=" + msg,
    "_blank"
  );
});
