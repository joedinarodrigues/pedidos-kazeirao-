document.addEventListener("DOMContentLoaded", function () {

  let pedido = [];
  let total = 0;

  window.add = function (nome, preco) {
    pedido.push(nome + " - R$ " + preco);
    total += preco;
    atualizar();
  }

  function atualizar() {
    const lista = document.getElementById("lista");
    const totalSpan = document.getElementById("total");

    if (!lista || !totalSpan) return;

    lista.innerHTML = "";
    pedido.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      lista.appendChild(li);
    });

    totalSpan.textContent = total;
  }

  window.enviar = function () {
    if (pedido.length === 0) {
      alert("Adicione itens ao pedido");
      return;
    }

    const texto = encodeURIComponent(
      "🍽️ Pedido Kazeirão\n\n" +
      pedido.join("\n") +
      "\n\nTotal: R$ " + total
    );

    window.open(
      "https://wa.me/559884168590?text=" + texto,
      "_blank"
    );
  }

});
