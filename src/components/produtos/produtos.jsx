import React, { useState } from "react";
import "./produtos.css";
import { cadastrarProduto } from "../../services/produtoservice";
import Swal from "sweetalert2"; // import da lib

const Produtos = () => {
  const [formData, setFormData] = useState({
    id_seller: "",
    nome: "",
    preco: "",
    quantidade: "",
    imagem: "",
    status: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await cadastrarProduto(formData);
      console.log("Produto cadastrado com sucesso:", response);

      // popup de sucesso
      Swal.fire({
        title: "Sucesso!",
        text: "Produto cadastrado com sucesso!",
        icon: "success",
        confirmButtonColor: "#4CAF50",
        confirmButtonText: "OK",
      });

      // limpa o formulário
      setFormData({
        id_seller: "",
        nome: "",
        preco: "",
        quantidade: "",
        imagem: "",
        status: "",
      });
    } catch (error) {
      console.error("Erro ao cadastrar produto:", error);

      // popup de erro
      Swal.fire({
        title: "Erro!",
        text: "Não foi possível cadastrar o produto.",
        icon: "error",
        confirmButtonColor: "#d33",
        confirmButtonText: "Tentar novamente",
      });
    }
  };

  return (
    <div className="produtos-container">
      <h2>Cadastrar Produto</h2>
      <form onSubmit={handleSubmit} className="produtos-form">
        <div>
          <label>CNPJ ou CPF</label>
          <input
            type="text"
            name="id_seller"
            value={formData.id_seller}
            onChange={handleChange}
            placeholder="ex: xxx.xxx.xxx/0001-xx"
          />
        </div>

        <div>
          <label>Nome</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            placeholder="ex: Camiseta básica"
          />
        </div>

        <div>
          <label>Preço</label>
          <input
            type="number"
            step="0.01"
            name="preco"
            value={formData.preco}
            onChange={handleChange}
            placeholder="ex: 49.90"
          />
        </div>

        <div>
          <label>Quantidade</label>
          <input
            type="number"
            name="quantidade"
            value={formData.quantidade}
            onChange={handleChange}
            placeholder="ex: 10"
          />
        </div>

        <div>
          <label>Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="">Selecione</option>
            <option value="Disponivel">Disponível</option>
            <option value="Indisponivel">Indisponível</option>
          </select>
        </div>

        <button type="submit">Salvar produto</button>
      </form>
    </div>
  );
};

export default Produtos;
