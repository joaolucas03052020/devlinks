// Alterna entre o tema claro e o escuro
function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");
}

document.querySelector("#switch button").addEventListener("click", toggleMode);
