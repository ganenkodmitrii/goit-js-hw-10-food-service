const refs = {
    toggleTheme: document.querySelector('#theme-switch-toggle')
}

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs.toggleTheme.addEventListener('change', onToggleChangeTheme)
updateTheme();
function onToggleChangeTheme() {
  if (refs.toggleTheme.checked) {
    document.body.classList.add(Theme.DARK);
    document.body.classList.remove(Theme.LIGHT);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    document.body.classList.add(Theme.LIGHT);
    document.body.classList.remove(Theme.DARK);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

function updateTheme() {
  const storageTheme = localStorage.getItem('theme');
  if (storageTheme === Theme.DARK) {
    document.body.classList.add(Theme.DARK);
    refs.toggleTheme.checked = true;
  }
}


