import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const produtos = [
  { id: 1, nome: "Camisa Adidas", imagem: "https://via.placeholder.com/300", marca: "adidas" },
  { id: 2, nome: "Camisa Puma", imagem: "https://via.placeholder.com/300", marca: "puma" },
  { id: 3, nome: "Camisa Nike", imagem: "https://via.placeholder.com/300", marca: "nike" },
  // Adicione mais produtos conforme necessário
];

function App() {
  const [produtosFiltrados, setProdutosFiltrados] = useState(produtos);
  
  // Contador independente para cada produto
  const [contadores, setContadores] = useState(
    produtos.reduce((acc, produto) => {
      acc[produto.id] = 0; // Inicializando contador como 0 para cada produto
      return acc;
    }, {})
  );

  // Funções para aumentar ou diminuir o contador de um produto
  const handleIncrement = (id) => {
    setContadores({
      ...contadores,
      [id]: contadores[id] + 1,
    });
  };

  const handleDecrement = (id) => {
    if (contadores[id] > 0) {
      setContadores({
        ...contadores,
        [id]: contadores[id] - 1,
      });
    }
  };

  const filterByMarca = (marca) => {
    setProdutosFiltrados(produtos.filter(produto => produto.marca === marca));
  };

  return (
    <Router>
      <div>
        {/* Navbar */}
        <div className="navbar">
          <a href="/" onClick={() => setProdutosFiltrados(produtos)}>Todos</a>
          <a href="/adidas" onClick={() => filterByMarca("adidas")}>Adidas</a>
          <a href="/puma" onClick={() => filterByMarca("puma")}>Puma</a>
          <a href="/nike" onClick={() => filterByMarca("nike")}>Nike</a>
        </div>

        {/* Cards */}
        <div className="cards-container">
          {produtosFiltrados.map(produto => (
            <div className="card" key={produto.id}>
              <img src={produto.imagem} alt={produto.nome} />
              <h3>{produto.nome}</h3>
              <p>Marca: {produto.marca}</p>
              <div className="counter">
                <button onClick={() => handleDecrement(produto.id)}>-</button>
                {contadores[produto.id]}
                <button onClick={() => handleIncrement(produto.id)}>+</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Router>
  );
}

export default App;
