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




// // Ativar botão selecionado (.pill)
// document.addEventListener("DOMContentLoaded", () => {
//     const pills = document.querySelectorAll('.pill');
  
//     pills.forEach(pill => {
//       pill.addEventListener('click', () => {
//         // Remove a seleção de todos
//         pills.forEach(p => p.classList.remove('is-active'));
  
//         // Marca o clicado
//         pill.classList.add('is-active');
//       });
//     });
//   });
  

//   document.addEventListener("DOMContentLoaded", () => {
//   const pills  = document.querySelectorAll(".pill");
//   const slides = document.querySelectorAll(".slider-page");
//   const dots   = document.querySelectorAll("#favDots .dot");

//   function goTo(index) {
//     // segurança
//     if (index < 0) index = 0;
//     if (index >= slides.length) index = slides.length - 1;

//     // limpa tudo
//     pills.forEach(p => p.classList.remove("is-active"));
//     slides.forEach(s => s.classList.remove("is-active"));
//     dots.forEach(d => d.classList.remove("is-active"));

//     // ativa selecionados
//     pills[index]?.classList.add("is-active");
//     slides[index]?.classList.add("is-active");
//     dots[index]?.classList.add("is-active");
//   }

//   // clique nas pílulas (categorias)
//   pills.forEach((pill, i) => {
//     pill.addEventListener("click", () => goTo(i));
//   });

//   // clique nas bolinhas (se quiser usar)
//   dots.forEach((dot, i) => {
//     dot.addEventListener("click", () => goTo(i));
//   });

//   // estado inicial: mostra a 1ª página
//   goTo(0);
// });

