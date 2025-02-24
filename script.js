window.addEventListener('load', () => {
  const animazioneBenvenuti = document.getElementById('animazione-benvenuti');
  const mainContent = document.getElementById('main-content');
  mainContent.style.display = 'block';
  mainContent.style.opacity = 1; // Mostra il contenuto con una transizione
  setTimeout(() => {
    animazioneBenvenuti.style.opacity = 0;
    setTimeout(() => {
      animazioneBenvenuti.style.display = 'none';
      mainContent.style.display = 'block';
    }, 1000);
  }, 3000);
});
