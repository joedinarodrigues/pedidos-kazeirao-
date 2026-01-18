* {
  box-sizing: border-box;
  font-family: 'Segoe UI', Arial, sans-serif;
}

body {
  margin: 0;
  background: #f2e8dc;
  color: #3b2f2f;
}

.topo {
  background: linear-gradient(135deg, #5a3e2b, #3e2723);
  color: #fff;
  padding: 28px 20px;
  text-align: center;
}

.topo p {
  opacity: 0.9;
}

main {
  padding: 15px;
}

.categoria h2 {
  margin: 25px 0 12px;
  color: #4e342e;
}

.card {
  background: #fffaf3;
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 12px rgba(0,0,0,.12);
  cursor: pointer;
  transition: transform .1s;
}

.card:active {
  transform: scale(0.98);
}

.card small {
  color: #6d4c41;
}

.card span {
  font-weight: bold;
  color: #5d4037;
}

.pedido {
  background: #fffaf3;
  padding: 16px;
  border-radius: 16px;
  margin-top: 25px;
}

.total {
  margin-top: 12px;
  font-size: 18px;
  font-weight: bold;
}

.whatsapp {
  position: fixed;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  width: 92%;
  padding: 18px;
  border-radius: 40px;
  border: none;
  font-size: 18px;
  background: #25d366;
  color: #1b5e20;
  font-weight: bold;
  box-shadow: 0 6px 16px rgba(0,0,0,.25);
}

footer {
  text-align: center;
  padding: 22px 10px 90px;
  font-size: 14px;
  color: #5d4037;
}

@media print {
  .whatsapp {
    display: none;
  }
  }
