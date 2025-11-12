// src/api/pedidosService.js
import api from "./apiClient";

export async function criarPedido(pedido) {
  // pedido: { produtos: [...], valorTotal, idCliente, etc. }
  const response = await api.post("/pedidos", pedido);
  return response.data;
}
