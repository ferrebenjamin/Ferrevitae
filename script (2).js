// Efecto de "terminal typing" para el nombre en el hero.
// Respeta prefers-reduced-motion: si el usuario lo prefiere, muestra el texto directo.

const NAME = "Lautaro Benjamín Ferré";
const target = document.getElementById("typed-name");

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

if (!target) {
  // no-op
} else if (prefersReducedMotion) {
  target.textContent = NAME;
} else {
  let i = 0;
  const typeSpeed = 55;

  function typeNext() {
    if (i <= NAME.length) {
      target.textContent = NAME.slice(0, i);
      i++;
      setTimeout(typeNext, typeSpeed);
    }
  }

  typeNext();
}
