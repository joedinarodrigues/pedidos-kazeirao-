const telefone = "559884168590";

const bairros = {
  "Escolha o bairro": 0,
  "Anjo da Guarda": 5,
  "Centro": 6,
  "Liberdade": 7,
  "Cohab": 10,
  "Outro": 12
};

const produtos = [
  { nome:"Prato Feito", preco:15, img:"https://via.placeholder.com/300" },
  { nome:"Frango Assado", preco:30, img:"https://via.placeholder.com/300" },
  { nome:"Refrigerante", preco:5, img:"https://via.placeholder.com/300" }
];

let carrinho = [];
let taxaEntrega = 0;

const cardapio = document.getElementById("cardapio");
const bairroSelect = document.getElementById("bairro");

for (let b in bairros) {
  bairroSelect.innerHTML += `<option value="${bairros[b]}">${b}</option>`;
}

produtos.forEach((p,i)=>{
  cardapio.innerHTML += `
  <div class="card">
    <img src="${p.img}">
    <h3>${p.nome}</h3>
    <p>R$ ${p.preco.toFixed(2)}</p>
    <button onclick="add(${i})">Adicionar</button>
  </div>`;
});

function add(i){
  carrinho.push(produtos[i]);
  calcular();
}

bairroSelect.onchange = function(){
  taxaEntrega = Number(this.value);
  calcular();
};

function calcular(){
  let total = carrinho.reduce((s,p)=>s+p.preco,0) + taxaEntrega;
  document.getElementById("taxa").innerText = `Taxa: R$ ${taxaEntrega.toFixed(2)}`;
  document.getElementById("total").innerText = `Total: R$ ${total.toFixed(2)}`;
}

function finalizarPedido(){
  if(carrinho.length===0){
    alert("Adicione itens ao carrinho");
    return;
  }
  let msg = "Pedido:%0A";
  carrinho.forEach(p=> msg += `- ${p.nome} R$${p.preco}%0A`);
  msg += `Taxa: R$${taxaEntrega}%0A`;
  msg += `Obs: ${document.getElementById("obs").value}`;
  window.open(`https://wa.me/${telefone}?text=${msg}`);
                          }
