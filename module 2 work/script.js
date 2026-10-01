const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  const moreText = card.querySelector('.more-text');
  const toggleBtn = card.querySelector('.toggle-btn');

  toggleBtn.addEventListener('click', () => {
    moreText.classList.toggle('hidden');

    if (moreText.classList.contains('hidden')) {
      toggleBtn.textContent = 'Show More';
    } else {
      toggleBtn.textContent = 'Show Less';
    }
  });
});
