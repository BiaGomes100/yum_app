// src/api/produtosService.js
import api from "./apiClient";

export async function listarProdutos() {
  const response = await api.get("/produtos");
  return response.data;
}

export async function cadastrarProduto(produto) {
  // produto: { nome, preco, quantidade, imagem, status }
  const response = await api.post("/produtos", produto);
  return response.data;
}
