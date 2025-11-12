import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // 👈 importa navegação e localização
import "./menu.css";
import logo from "../../../assets/logoBlack.png";

// Ícones
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

function Menu() {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation(); // 👈 para saber a rota atual

  const toggleSidebar = () => setIsOpen(!isOpen);
  const handleLogout = () => alert("Logout clicado!");

  // Lista de itens do menu + rotas correspondentes
  const menuItems = [
    { name: "Home", icon: <HomeOutlinedIcon fontSize="medium" />, path: "home" },
    { name: "Produtos", icon: <Inventory2OutlinedIcon fontSize="medium" />, path: "/produtos" },
    { name: "Settings", icon: <SettingsOutlinedIcon fontSize="medium" />, path: "/settings" },
    { name: "Help", icon: <HelpOutlineOutlinedIcon fontSize="medium" />, path: "/help" },
  ];

  return (
    <div className={isOpen ? "sidebar open" : "sidebar"}>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <button className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? "⏴" : "⏵"}
      </button>

      <ul className="menu-list">
        {menuItems.map((item, index) => {
          const isActive = location.pathname === item.path; // 👈 rota atual
          return (
            <li
              key={index}
              className={isActive ? "active" : ""}
              onClick={() => navigate(item.path)} // 👈 navegação
            >
              <span className="icon">{item.icon}</span>
              {isOpen && <span className="text">{item.name}</span>}
            </li>
          );
        })}
      </ul>

      <div className="sidebar-footer" onClick={handleLogout}>
        <LogoutOutlinedIcon fontSize="medium" />
        {isOpen && <span className="text">Log Out</span>}
      </div>
    </div>
  );
}

export default Menu;
