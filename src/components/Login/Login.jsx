import React, { useState } from "react";
import "./Login.css"
import { useNavigate } from "react-router-dom";
import bigLogo from "../../assets/logoBlack.png";
import smallLogo from "../../assets/minLogo.png";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  const handleLogin = async (e) => {
    e.preventDefault();

  
    if (email && password) {
      navigate("/home"); 
    } else {
      alert("Preencha os campos corretamente!");
    }
  };

  return (
    <div className="login-container">
      {/* Lado esquerdo */}
      <div className="left-side">
        <img src={bigLogo} alt="Yamme logo" className="big-logo" />
      </div>

      {/* Lado direito */}
      <div className="right-side">
        <div className="login-header">
          <h1>Login</h1>
        </div>

        <form onSubmit={handleLogin} className="login-form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <a href="#" className="reset-link">
            Redefinir Senha
          </a>

          <button type="submit" className="btn green">
            Entrar
          </button>
          <div className="divider">
            <div className="linha"></div>
            <span>ou</span>
            <div className="linha"></div>
          </div>

          <button type="button" className="btn yellow">
            Criar Conta
          </button>
        </form>

        <img src={smallLogo} alt="logo inferior" className="corner-logo" />
      </div>
    </div>
  );
}

export default Login;