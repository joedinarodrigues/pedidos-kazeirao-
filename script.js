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
  "Salada russa", "Beterraba", "Cenoura", "Mix"
];

let protSelecionada = null;
let acompsSel = [];
let saladasSel = [];

const divProt = document.getElementById("proteinas");
const divAcomps = document.getElementById("acomps");
const divSaladas = document.getElementById("saladas");

proteinas.forEach(p => {
  let d = document.createElement("div");
  d.className = "card";
  d.innerText = `${p.nome} – R$ ${p.preco},00`;
  d.onclick = () => selecionarProteina(p, d);
  divProt.appendChild(d);
});

function selecionarProteina(p, el) {
  protSelecionada = p;
  document.querySelectorAll("#proteinas .card").forEach(c => c.classList.remove("active"));
  el.classList.add("active");
  document.getElementById("acompsBox").classList.remove("hidden");
}

acompanhamentos.forEach(a => {
  let d = document.createElement("div");
  d.className = "card";
  d.innerText = a;
  d.onclick = () => toggleItem(a, d, acompsSel, 2, 6, "saladasBox");
  divAcomps.appendChild(d);
});

saladas.forEach(s => {
  let d = document.createElement("div");
  d.className = "card";
  d.innerText = s;
  d.onclick = () => toggleItem(s, d, saladasSel, 1, 2);
  divSaladas.appendChild(d);
});

function toggleItem(item, el, lista, min, max, showNext) {
  if (lista.includes(item)) {
    lista.splice(lista.indexOf(item), 1);
    el.classList.remove("active");
  } else {
    if (lista.length >= max) return;
    lista.push(item);
    el.classList.add("active");
  }

  if (lista.length >= min && showNext) {
    document.getElementById(showNext).classList.remove("hidden");
  }
}

function enviarPedido() {
  if (!protSelecionada || acompsSel.length < 2 || saladasSel.length < 1) {
    alert("Complete as escolhas");
    return;
  }

  let nome = document.getElementById("nome").value;
  let end = document.getElementById("endereco").value;
  let obs = document.getElementById("obs").value;
  let pag = document.getElementById("pagamento").value;

  let msg =
`*Pedido Kazeirão*

1 Refeição completa – R$ ${protSelecionada.preco},00

Proteína: ${protSelecionada.nome}
Acompanhamentos: ${acompsSel.join(", ")}
Saladas: ${saladasSel.join(", ")}

Cliente: ${nome}
Endereço: ${end}
Obs: ${obs}

Forma de pagamento: ${pag}

Total: R$ ${protSelecionada.preco},00`;

  window.open(`https://wa.me/559884168590?text=${encodeURIComponent(msg)}`);
    }
