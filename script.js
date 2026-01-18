let pedido = {};
let total = 0;

document.querySelectorAll(".card").forEach(card => {
  const nome = card.dataset.nome;
  const preco = Number(card.dataset.preco);
  const qtdSpan = card.querySelector(".qtd");

  card.querySelector(".mais").onclick = () => {
    pedido[nome] = (pedido[nome] || 0) + 1;
    qtdSpan.textContent = pedido[nome];
    calcular();
  };

  card.querySelector(".menos").onclick = () => {
    if (pedido[nome] > 0) {
      pedido[nome]--;
      qtdSpan.textContent = pedido[nome];
      if (pedido[nome] === 0) delete pedido[nome];
      calcular();
    }
  };
});

document.getElementById("bairro").onchange = calcular;

function calcular() {
  const lista = document.getElementById("lista");
  const totalSpan = document.getElementById("total");
  const taxa = Number(document.getElementById("bairro").value);

  lista.innerHTML = "";
  total = 0;

  for (let item in pedido) {
    const qtd = pedido[item];
    const card = document.querySelector(`[data-nome="${item}"]`);
    const preco = Number(card.dataset.preco);

    total += qtd * preco;

    const li = document.createElement("li");
    li.textContent = `${item} x${qtd}`;
    lista.appendChild(li);
  }

  total += taxa;
  totalSpan.textContent = total;
}

document.getElementById("btnWhats").onclick = () => {
  if (!Object.keys(pedido).length) {
    alert("Adicione itens ao pedido");
    return;
  }

  let msg = "🍽️ Pedido Kazeirão\n\n";

  for (let item in pedido) {
    msg += `${item} x${pedido[item]}\n`;
  }

  msg += `\nTotal: R$ ${total}`;

  window.open(
    "https://wa.me/559884168590?text=" + encodeURIComponent(msg),
    "_blank"
  );
};
