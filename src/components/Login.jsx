import React, { useState } from "react";
import "./Login.css"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nSenha: ${password}`);
  };

  return (
    <div className="login-container">
      {/* Lado esquerdo */}
      <div className="left-side">
        <img src={bigLogo} alt="Yamme logo" className="big-logo" />
        <h1 className="brand-name">Yamme</h1>
      </div>

      {/* Lado direito */}
      <div className="right-side">
        <div className="login-header">
          <img src={smallLogo} alt="logo pequeno" className="small-logo" />
          <h2>Login</h2>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
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