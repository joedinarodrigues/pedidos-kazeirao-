* { box-sizing: border-box; font-family: Arial, sans-serif; }

body {
  margin: 0;
  background: #111;
  color: #fff;
}

header {
  background: #d32f2f;
  padding: 20px;
  text-align: center;
}

.categoria {
  padding: 15px;
}

.categoria h2 {
  border-bottom: 1px solid #444;
  padding-bottom: 5px;
}

.item {
  background: #1e1e1e;
  padding: 15px;
  margin: 10px 0;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}

.item:active {
  background: #333;
}

.pedido {
  background: #000;
  padding: 15px;
}

.whatsapp {
  width: 90%;
  margin: 15px auto;
  display: block;
  padding: 15px;
  background: #25d366;
  color: #000;
  font-size: 18px;
  border: none;
  border-radius: 30px;
}

.print {
  width: 90%;
  margin: 10px auto;
  padding: 12px;
  border-radius: 30px;
  border: none;
}

footer {
  text-align: center;
  font-size: 14px;
  padding: 10px;
  background: #000;
}

@media print {
  .whatsapp, .print, #editar {
    display: none;
  }
    }
