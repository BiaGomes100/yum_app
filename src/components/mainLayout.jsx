import React, { useState } from "react";
import Menu from "../components/home/components/menu";
import Cart from "../components/home/components/carrinho";
import Perfil from "../components/home/components/perfil";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Outlet } from "react-router-dom";
import "./mainLayout.css";

function MainLayout() {
  const [search, setSearch] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showPerfil, setShowPerfil] = useState(false);

  const user = {
    nome: "João Silva",
    cnpj: "12.345.678/0001-90",
    email: "joao@email.com",
    celular: "(11) 98765-4321",
    senha: "••••••••",
    status: "Ativo",
  };

  return (
    <div className="main-layout">
      <Menu />

      <div className="content">
        {/* Header fixo */}
        <div className="header">
          <div className="search-bar">
            <SearchOutlinedIcon />
            <input
              type="text"
              placeholder="Pesquisar..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="header-icons">
            <button
              className="profile-btn"
              onClick={() => setShowPerfil((prev) => !prev)}
            >
              <AccountCircleOutlinedIcon fontSize="medium" />
            </button>

            <div className="cart-container-button">
              <button
                className="cart-btn"
                onClick={() => setShowCart((prev) => !prev)}
              >
                <ShoppingCartOutlinedIcon fontSize="medium" />
                {cartItems.length > 0 && (
                  <span className="cart-badge">{cartItems.length}</span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* O conteúdo que muda (Home, Produtos, etc.) */}
        <div className="page-content">
          <Outlet context={{ cartItems, setCartItems }} />
        </div>
      </div>

      {/* Painéis deslizantes */}
      <Cart
        items={cartItems}
        onClose={() => setShowCart(false)}
        onRemove={(id) =>
          setCartItems((prev) => prev.filter((item) => item.id !== id))
        }
        visible={showCart}
      />

      <Perfil
        visible={showPerfil}
        onClose={() => setShowPerfil(false)}
        user={user}
      />
    </div>
  );
}

export default MainLayout;
