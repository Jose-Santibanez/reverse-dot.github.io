import { animate, stagger, spring } from "@motionone/dom";

// Selecciona todos los elementos que quieres animar
const items = document.querySelectorAll("#box");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Aplica la animación solo cuando el elemento es visible
      animate(
        entry.target,
        { y: [100, 0], opacity: [0, 1] }, // Animación de aparición y desplazamiento
        {
          duration: 1,
          delay: stagger(0.1, { start: 0.1 }), // Escalonado entre elementos, retraso inicial
          easing: spring(),
        }
      );
      // Deja de observar el elemento después de que se haya animado
      observer.unobserve(entry.target);
    }
  });
});

// Observa cada elemento de la lista
items.forEach((item) => observer.observe(item));
