export default function Footer() {
  return (
    <footer id="contacto" className="bg-dark text-light mt-5 pt-4 pb-4">
      <div className="container d-flex flex-column flex-md-row justify-content-between gap-3">
        
        {/* --- Datos de contacto --- */}
        <div>
          <h5 className="text-uppercase mb-3">Contacto</h5>
          <p className="mb-1">Tel: (722) 572-0866</p>
          <p className="mb-1">atlacomulcomontreal@gmail.com</p>
          <p className="mb-0">Calle Circuito de los Maestros No. 26, Col. Las Fuentes, Atlacomulco, Edo. Méx.</p>
        </div>

        {/* --- Redes Sociales --- */}
        <div>
          <h5 className="text-uppercase mb-3">Redes</h5>
          <ul className="list-unstyled mb-0">
            <li>
              <a
                className="link-light text-decoration-none"
                href="https://www.facebook.com/Montrealatlacomulcocert/?_rdr"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* --- Créditos --- */}
      <div className="text-center mt-3 small border-top pt-3">
        © 2025 <strong>Montreal: Idiomas, Tecnología y Cultura Atlacomulco</strong>.  
        Todos los derechos reservados.
      </div>
    </footer>
  );
}

