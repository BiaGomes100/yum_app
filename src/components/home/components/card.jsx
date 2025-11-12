import React from "react";
import "./Card.css";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

function Card({ title, price, quantidade, status, onAdd }) {
  const isAtivo = status?.toLowerCase() === "disponivel";

  return (
    <div className="card">
      {/* Status */}
      <div className={`card-status-container ${isAtivo ? "Disponivel" : "Indisponivel"}`}>
        <span className="card-status-text">{status}</span>
      </div>

      {/* Nome / título */}
      <h3 className="card-title">{title}</h3>

      {/* Informações adicionais */}
      <div className="card-info">
        <span className="card-quantity">Qtd: {quantidade}</span>
      </div>

      {/* Row com preço e botão */}
      <div className="card-row">
        <span className="card-price">R$ {price}</span>
        <button
          className="add-btn"
          onClick={() => onAdd({ title, price, quantidade, status })}
        >
          <AddOutlinedIcon />
        </button>
      </div>
    </div>
  );
}

export default Card;
