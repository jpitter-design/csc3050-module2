
const moreText = document.getElementById('more-text');
const toggleBtn = document.getElementById('toggle-btn');

toggleBtn.addEventListener('click', () => {
  moreText.classList.toggle('hidden');
  if (moreText.classList.contains('hidden')) {
    toggleBtn.textContent = 'Show More';
  } else {
    toggleBtn.textContent = 'Show Less';
  }
});
