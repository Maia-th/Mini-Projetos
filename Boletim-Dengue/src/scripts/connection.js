// Inicia a função para buscar os dados ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  getDataFromSheet();
});

// Função para buscar os dados da planilha
function getDataFromSheet() {
  fetch("")
    .then((response) => response.json())
    .then((data) => {
      const lastRow = data.values[data.values.length - 1];

      document.getElementById("DataAt").textContent = lastRow[0];
      document.getElementById("GeralNotif").textContent = Number(
        lastRow[1]
      ).toLocaleString("pt-BR", { maximumFractionDigits: 0 });
      document.getElementById("GeralPosit").textContent = Number(
        lastRow[2]
      ).toLocaleString("pt-BR", { maximumFractionDigits: 0 });
      document.getElementById("GeralInvet").textContent = Number(
        lastRow[3]
      ).toLocaleString("pt-BR", { maximumFractionDigits: 0 });
      document.getElementById("GeralObitosIn").textContent = Number(
        lastRow[4]
      ).toLocaleString("pt-BR", { maximumFractionDigits: 0 });
      document.getElementById("GeralObitosCo").textContent = Number(
        lastRow[5]
      ).toLocaleString("pt-BR", { maximumFractionDigits: 0 });
      document.getElementById("GeralInter").textContent = Number(
        lastRow[6]
      ).toLocaleString("pt-BR", { maximumFractionDigits: 0 });
    })
    .catch((error) =>
      console.error("Erro ao buscar dados da planilha:", error)
    );
}
