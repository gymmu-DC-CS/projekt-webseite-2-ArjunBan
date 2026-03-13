// ================================
// 1. FILTER BUTTONS — Tools Section
// ================================
const filterBtns = document.querySelectorAll('.filter');
const toolCards = document.querySelectorAll('.tool-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {

    // Remove active from all buttons, add to clicked one
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const selected = btn.getAttribute('data-filter');

    toolCards.forEach(card => {
      const category = card.getAttribute('data-category');

      if (selected === 'all' || category === selected) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

// ================================
// 2. COPY PROMPT BUTTONS — Tips Section
// ================================
function copyText(btn) {
  const promptText = btn.previousElementSibling.textContent;

  navigator.clipboard.writeText(promptText).then(() => {
    btn.textContent = '✅ Copied!';
    btn.classList.add('copied');

    setTimeout(() => {
      btn.textContent = 'Copy Prompt';
      btn.classList.remove('copied');
    }, 2000);
  });
}

// ================================
// 3. SMOOTH SCROLL for nav links
// ================================
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});