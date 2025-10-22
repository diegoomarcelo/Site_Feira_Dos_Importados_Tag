// Ativar botão selecionado (.pill)
document.addEventListener("DOMContentLoaded", () => {
    const pills = document.querySelectorAll('.pill');
  
    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        // Remove a seleção de todos
        pills.forEach(p => p.classList.remove('is-active'));
  
        // Marca o clicado
        pill.classList.add('is-active');
      });
    });
  });
  