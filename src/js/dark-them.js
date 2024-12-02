const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

if (localStorage.getItem('dark-mode') === 'enabled') {
  body.classList.add('dark-mode');
  themeToggle.checked = true;
} else {
  body.classList.remove('dark-mode');
  themeToggle.checked = false;
}

themeToggle.addEventListener('change', () => {
  if (themeToggle.checked) {
    body.classList.add('dark-mode');
    localStorage.setItem('dark-mode', 'enabled');
  } else {
    body.classList.remove('dark-mode');
    localStorage.setItem('dark-mode', 'disabled');
  }
});
