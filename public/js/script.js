window.addEventListener("scroll", () => {
  const header = document.querySelector("#header-home");
  header.classList.toggle("menu-scroll", window.scrollY > 0);
});
