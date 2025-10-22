
/*
 * ===================================================================
 * ARQUIVO: js/script.js
 * DESCRIÇÃO: Scripts principais para a página inicial (index.html)
 * ===================================================================
 */

/**
 * Espera o documento HTML ser completamente carregado antes de
 * executar qualquer script...
 */
document.addEventListener('DOMContentLoaded', () => {
  // Inicializa o carrossel da seção "Lojas Favoritas"
  initFavoriteSlider();

  // Inicializa a lógica de "abas" (pílulas) da seção "Lojas Favoritas"
  initFavoritePills();
  
  // ADICIONE ESTA LINHA:
  initWelcomeModal(); 
});

/* =========================================
   CARROSSEL (SLIDER) - LOJAS FAVORITAS
========================================= */
function initFavoriteSlider() {
  // ... (o resto da sua função do slider)
}

/* =========================================
   PÍLULAS (FILTROS) - LOJAS FAVORITAS
========================================= */
function initFavoritePills() {
  // ... (o resto da sua função das pílulas)
}


/* =========================================
   NOVO: MODAL DE BOAS-VINDAS
========================================= */

/**
 * Controla a exibição e o fechamento do modal de boas-vindas.
 */
function initWelcomeModal() {
  // (Aqui fica a função que você já colou)
  const overlay = document.getElementById('welcomeOverlay');
  const closeButton = document.getElementById('closeWelcomeModal');
  
  // 1. VERIFICAÇÃO
  if (!overlay || !closeButton) {
    console.warn('Elementos do modal de boas-vindas (welcomeOverlay ou closeWelcomeModal) não foram encontrados.');
    return;
  }
  
  // 2. MOSTRAR O MODAL
  setTimeout(() => {
    overlay.classList.remove('is-hidden');
  }, 500); // Meio segundo de atraso

  
  // 3. FUNÇÃO PARA FECHAR
  const closeModal = () => {
    overlay.classList.add('is-hidden');
  };

  // 4. ADICIONA EVENTOS PARA FECHAR
  closeButton.addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      closeModal();
    }
  });
}
// ------------------------------------------------------------//
// ------------------------------------------------------------//
// ------------------------------------------------------------//
// ------------------------------------------------------------//

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
  