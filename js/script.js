// Espera o HTML carregar completamente antes de rodar o código
document.addEventListener("DOMContentLoaded", () => {
  const pills  = document.querySelectorAll(".pill");
  const slides = document.querySelectorAll(".slider-page");
  const dots   = document.querySelectorAll("#favDots .dot");

// Função responsável por mostrar o slide certo e atualizar o botão ativo
  function goTo(index) {
    if (index < 0) index = 0;
    if (index >= slides.length) index = slides.length - 1;

    // Função responsável por mostrar o slide certo e atualizar o botão ativo
    pills.forEach(p => p.classList.remove("is-active"));
    slides.forEach(s => s.classList.remove("is-active"));
    dots.forEach(d => d.classList.remove("is-active"));

    // Adiciona o estado "ativo" apenas no botão, slide e bolinha correspondentes ao índice clicado
    pills[index]?.classList.add("is-active");
    slides[index]?.classList.add("is-active");
    dots[index]?.classList.add("is-active");
  }

  pills.forEach((pill, i) => pill.addEventListener("click", () => goTo(i)));
  dots.forEach((dot, i)  => dot.addEventListener("click",  () => goTo(i)));

  // mostra a primeira página antes de qualquer clique
  goTo(0);
});
/* --- JavaScript para controlar o Modal --- */

// Espera o documento inteiro carregar (boa prática)
document.addEventListener('DOMContentLoaded', () => {

    // 1. Seleciona os elementos do DOM
    const modal = document.getElementById('welcome-modal');
    const overlay = document.getElementById('modal-overlay');
    const closeBtn = document.getElementById('modal-close-btn');
    const enterBtn = document.getElementById('enter-site-btn');

    // 2. Função para ABRIR o modal
    const openModal = () => {
        modal.classList.add('show');
        overlay.classList.add('show');
    };

    // 3. Função para FECHAR o modal
    const closeModal = () => {
        modal.classList.remove('show');
        overlay.classList.remove('show');
    };

    // 4. Adiciona os "escutadores" de eventos
    closeBtn.addEventListener('click', closeModal); // Clicar no 'X'
    enterBtn.addEventListener('click', closeModal); // Clicar em 'Entrar'
    overlay.addEventListener('click', closeModal);  // Clicar no fundo

    // 5. ABRE O MODAL AUTOMATICAMENTE
    // Espera 1 segundo (1000ms) após a página carregar para mostrar o modal
    setTimeout(openModal, 1000);

});