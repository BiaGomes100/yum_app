import api from "./apiClient";

export async function login(email, senha) {
    try {
        const response = await api.post("/login", {
            email,
            senha,
        });

        // supondo que o backend retorne { token: "..." }
        const token = response.data.token;
        localStorage.setItem("token", token); // salva o token localmente

        return token;
    } catch (error) {
        console.error("Erro no login:", error);
        throw error.response?.data || "Erro ao tentar logar.";
    }
}