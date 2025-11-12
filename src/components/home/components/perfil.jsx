import React from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import "./perfil.css";

function Perfil({ visible, onClose, user }) {
  return (
    <div className={`perfil-container ${visible ? "show" : ""}`}>
      <div className="perfil">
        <div className="perfil-header">
          <div className="perfil-title">
            <AccountCircleOutlinedIcon style={{ marginRight: "8px", color: "#20A37E" }} />
            <h2>Perfil</h2>
          </div>
          <button className="close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="perfil-info">
          <p><strong>Nome:</strong> {user.nome}</p>
          <p><strong>CNPJ:</strong> {user.cnpj}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Celular:</strong> {user.celular}</p>
          <p><strong>Senha:</strong> {user.senha}</p>
         <p><strong>Status:</strong> {user.status}</p>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
