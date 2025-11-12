import React from "react";
import Swal from "sweetalert2";
import "./carrinho.css";
import { criarPedido } from "../../../services/pedidoservice";

function Cart({ items, onClose, onRemove, visible, setCartItems }) {
  const total = items.reduce((acc, item) => acc + item.price * item.quantidade, 0);

  const handleFinalize = async () => {
    if (items.length === 0) {
      Swal.fire({
        icon: "error",
        title: "Carrinho vazio",
        text: "Adicione produtos antes de finalizar o pedido.",
      });
      return;
    }

    try {
      await criarPedido(items);
      Swal.fire({
        icon: "success",
        title: "Pedido realizado!",
        text: "Seu pedido foi feito com sucesso.",
      });
      setCartItems([]); // limpa carrinho
      onClose();
    } catch (error) {
      console.error("Erro ao realizar pedido:", error);
      Swal.fire({
        icon: "error",
        title: "Erro",
        text: "Não foi possível realizar o pedido. Tente novamente.",
      });
    }
  };

  return (
    <div className={`cart-container ${visible ? "show" : ""}`}>
      <div className="cart">
        <div className="cart-header">
          <h3>Carrinho</h3>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        {items.length === 0 ? (
          <p className="empty">Seu carrinho está vazio</p>
        ) : (
          <ul className="cart-items">
            {items.map((item, index) => (
              <li key={index}>
                <span>{item.title}</span>
                <span>R$ {item.price.toFixed(2)} x {item.quantidade}</span>
                <button className="remove-btn" onClick={() => onRemove(item.id)}>
                  Remover
                </button>
              </li>
            ))}
          </ul>
        )}

        <div className="cart-footer">
          <div className="cart-total">
            <span>Valor final:</span>
            <span className="cart-total-value">R$ {total.toFixed(2)}</span>
          </div>
          <button className="finalize-btn" onClick={handleFinalize}>
            Finalizar compra
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
