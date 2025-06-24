document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const sidebar = document.querySelector(".sidebar");
  const body = document.body;

  if (menuToggle && sidebar) {
    menuToggle.addEventListener("click", function () {
      sidebar.classList.toggle("hidden");
      body.classList.toggle("menu-open");
    });
  } else {
    console.error("Botão ou sidebar não encontrado.");
  }
});