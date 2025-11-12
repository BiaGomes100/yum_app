import React, { useEffect, useState } from "react";
import Card from "../home/components/card";
import { useOutletContext } from "react-router-dom";
import { listarProdutos } from "../../services/produtoservice";
import "./Home.css";

function Home() {
  const { setCartItems } = useOutletContext();
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const carregarProdutos = async () => {
      try {
        const dados = await listarProdutos();
        setProdutos(dados);
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
      } finally {
        setLoading(false);
      }
    };
    carregarProdutos();
  }, []);

  const handleAddToCart = (item) => {
  setCartItems((prev) => {
    
    const existingIndex = prev.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingIndex >= 0) {
     
      const updatedCart = [...prev];
    
      updatedCart[existingIndex].quantidade += item.quantidade;
      return updatedCart;
    } else {
    
      return [...prev, item];
    }
  });
};

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Carregando produtos...</p>
      </div>
    );
  }

  if (produtos.length === 0) {
    return (
      <div className="empty-container">
        <p>Nenhum produto cadastrado.</p>
      </div>
    );
  }

  return (
    <div className="cards-grid">
      {produtos.map((produto) => (
        <Card
          key={produto.id}
          title={produto.nome}
          price={produto.preco}
          quantidade={produto.quantidade}
          status={produto.status}
          onAdd={() => handleAddToCart(produto)}
        />
      ))}
    </div>
  );
}

export default Home;
