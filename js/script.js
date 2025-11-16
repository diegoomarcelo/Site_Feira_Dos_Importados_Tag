document.addEventListener("DOMContentLoaded", function () {
  // =========================
  // CARROSSEL - Lojas Favoritas
  // =========================
  const pills = document.querySelectorAll(".pill");
  const slides = document.querySelectorAll(".slider-page");
  const dots = document.querySelectorAll("#favDots .dot");

  function mostrarSlide(indice) {
    if (slides.length === 0) return;

    if (indice < 0) indice = 0;
    if (indice >= slides.length) indice = slides.length - 1;

    slides.forEach(function (slide, i) {
      slide.classList.toggle("is-active", i === indice);
    });

    pills.forEach(function (pill, i) {
      pill.classList.toggle("is-active", i === indice);
    });

    dots.forEach(function (dot, i) {
      dot.classList.toggle("is-active", i === indice);
    });
  }

  pills.forEach(function (pill, i) {
    pill.addEventListener("click", function () {
      mostrarSlide(i);
    });
  });

  dots.forEach(function (dot) {
    dot.addEventListener("click", function () {
      const indice = Number(dot.dataset.i);
      mostrarSlide(indice);
    });
  });

  // =========================
  // MODAL de boas-vindas
  // =========================
  const modal = document.getElementById("welcome-modal");
  const overlay = document.getElementById("modal-overlay");
  const closeBtn = document.getElementById("modal-close-btn");
  const enterBtn = document.getElementById("enter-site-btn");

  if (modal && overlay && closeBtn && enterBtn) {
    function abrirModal() {
      modal.classList.add("show");
      overlay.classList.add("show");
    }

    function fecharModal() {
      modal.classList.remove("show");
      overlay.classList.remove("show");
    }

    closeBtn.addEventListener("click", fecharModal);
    enterBtn.addEventListener("click", fecharModal);
    overlay.addEventListener("click", fecharModal);

    // Abre o modal 1 segundo depois da página carregar
    setTimeout(abrirModal, 1000);
  }


  // =========================
  // Botão "Voltar ao topo"
  // =========================
  const backToTopBtn = document.getElementById("back-to-top");

  if (backToTopBtn) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add("show");
      } else {
        backToTopBtn.classList.remove("show");
      }
    });

    backToTopBtn.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  // =========================
  // Validação simples do formulário de busca (Home)
  // =========================
  const heroForm = document.querySelector(".hero__search");

  if (heroForm) {
    heroForm.addEventListener("submit", function (event) {
      const input = heroForm.querySelector("input[name='q']");

      if (input && input.value.trim() === "") {
        event.preventDefault();
        alert("Por favor, preencha o campo de busca antes de pesquisar.");
        input.focus();
      }
    });
  }

  // =========================
  // Validação da busca - Página LOJAS
  // =========================
  const lojaSearchInput = document.querySelector(".searchband #q");

  if (lojaSearchInput) {
    lojaSearchInput.addEventListener("keydown", function (event) {
      if (event.key === "Enter" && lojaSearchInput.value.trim() === "") {
        event.preventDefault();
        alert("Por favor, preencha o campo de busca antes de pesquisar.");
        lojaSearchInput.focus();
      }
    });
  }

});
