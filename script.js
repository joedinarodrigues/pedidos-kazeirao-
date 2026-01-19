const proteinas = [
  { nome: "Frango", preco: 25 },
  { nome: "Carne", preco: 27 },
  { nome: "Peixe", preco: 28 }
];

const acompanhamentos = [
  "Arroz", "Arroz temperado", "Espaguete",
  "Feijão", "Purê"
];

const saladas = [
  "Salada russa", "Mix", "Beterraba", "Cenoura"
];

let proteinaEscolhida = null;
let acompsEscolhidos = [];
let saladasEscolhidas = [];

const divProt = document.getElementById("proteinas");
const divAcomps = document.getElementById("acomps");
const divSaladas = document.getElementById("saladas");

proteinas.forEach(p => {
  let d = document.createElement("div");
  d.className = "card";
  d.innerText = `${p.nome}\nR$ ${p.preco},00`;
  d.onclick = () => escolherProteina(p, d);
  divProt.appendChild(d);
});

function escolherProteina(p, el) {
  proteinaEscolhida = p;
  document.querySelectorAll("#proteinas .card")
    .forEach(c => c.classList.remove("active"));
  el.classList.add("active");
  document.getElementById("boxAcomps").classList.remove("hidden");
}

acompanhamentos.forEach(a => {
  let d = document.createElement("div");
  d.className = "card";
  d.innerText = a;
  d.onclick = () => toggleItem(a, d, acompsEscolhidos, 6);
  divAcomps.appendChild(d);
});

saladas.forEach(s => {
  let d = document.createElement("div");
  d.className = "card";
  d.innerText = s;
  d.onclick = () => toggleItem(s, d, saladasEscolhidas, 2);
  divSaladas.appendChild(d);
});

function toggleItem(item, el, lista, max) {
  if (lista.includes(item)) {
    lista.splice(lista.indexOf(item), 1);
    el.classList.remove("active");
  } else {
    if (lista.length >= max) return;
    lista.push(item);
    el.classList.add("active");
  }

  if (acompsEscolhidos.length >= 2) {
    document.getElementById("boxSaladas").classList.remove("hidden");
  }
}

function enviarPedido() {
  if (!proteinaEscolhida || acompsEscolhidos.length < 2 || saladasEscolhidas.length < 1) {
    alert("Complete o pedido corretamente");
    return;
  }

  let nome = document.getElementById("nome").value;
  let endereco = document.getElementById("endereco").value;
  let obs = document.getElementById("obs").value;

  let msg =
`*Pedido Kazeirão*

1x Refeição completa – R$ ${proteinaEscolhida.preco},00

Proteína: ${proteinaEscolhida.nome}
Acompanhamentos: ${acompsEscolhidos.join(", ")}
Saladas: ${saladasEscolhidas.join(", ")}

Cliente: ${nome}
Endereço: ${endereco}
Obs: ${obs}

Forma de pagamento?`;

  window.open(`https://wa.me/559884168590?text=${encodeURIComponent(msg)}`);
}
