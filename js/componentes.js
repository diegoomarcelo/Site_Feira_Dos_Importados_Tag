function carregarComponente(caminho, seletor) {
  fetch(caminho)
    .then(response => response.text())
    .then(html => {
      document.querySelector(seletor).innerHTML = html;
    })
    .catch(error => {
      console.log("Erro ao carregar componente:", error);
    });
}

document.addEventListener("DOMContentLoaded", function () {
  carregarComponente("componentes/header.html", "#header-container");
  carregarComponente("componentes/footer.html", "#footer-container");
});
