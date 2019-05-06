document.addEventListener('DOMContentLoaded', () => {
  let parallax = document.querySelectorAll('.parallax');
  M.Parallax.init(parallax, {});
  let accordion = document.querySelectorAll('.collapsible');
  M.Collapsible.init(accordion, {
    accordion: false
  });
});