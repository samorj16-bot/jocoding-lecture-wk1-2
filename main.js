const toggleButton = document.querySelector("[data-theme-toggle]");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

const applyTheme = (theme) => {
  document.body.classList.toggle("dark", theme === "dark");
  if (!toggleButton) {
    return;
  }
  toggleButton.setAttribute("aria-pressed", theme === "dark");
  toggleButton.textContent = theme === "dark" ? "Light mode" : "Dark mode";
};

const storedTheme = localStorage.getItem("theme");
const initialTheme = storedTheme || (prefersDark.matches ? "dark" : "light");
applyTheme(initialTheme);

if (toggleButton) {
  toggleButton.addEventListener("click", () => {
    const nextTheme = document.body.classList.contains("dark") ? "light" : "dark";
    localStorage.setItem("theme", nextTheme);
    applyTheme(nextTheme);
  });
}
