// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    const targetId = location.state?.target; // 👈 lo que mandamos desde el navbar

    if (targetId) {
      // damos un pequeño tiempo para que el home se renderice
      setTimeout(() => {
        const section = document.getElementById(targetId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        } else {
          // si no encuentra la sección, al menos sube hasta arriba
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 200);
    } else {
      // navegación normal sin objetivo → al inicio
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return null;
}
