// Change page theme
const html = document.querySelector("html");
let themeTrueFalse = true;
let sunIcon = "";

const switchThemeBtn = document.querySelector("#switchTheme");
switchThemeBtn.addEventListener("click", () => {
  if (themeTrueFalse) {
    html.dataset.theme = `theme-dark`;
    themeTrueFalse = false;
    switchThemeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    html.dataset.theme = `theme-light`;
    themeTrueFalse = true;
    switchThemeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
});
