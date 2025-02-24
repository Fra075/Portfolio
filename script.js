window.addEventListener('load', () => {
  const animazioneBenvenuti = document.getElementById('animazione-benvenuti');
  const mainContent = document.getElementById('main-content');

  setTimeout(() => {
    animazioneBenvenuti.style.opacity = 0;
    setTimeout(() => {
      animazioneBenvenuti.style.display = 'none';
      mainContent.style.display = 'block';
    }, 1000);
  }, 3000);
});