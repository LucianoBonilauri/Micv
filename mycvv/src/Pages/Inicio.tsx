import Navbar from '../Components/Navbar'
import Proyectos from '../Components/Proyectos'
import './Inicio.css'

// Página de inicio: arma toda la página.
// El currículum está escrito directo acá (es estático).
function Inicio() {
  return (
    <>
      <Navbar />

      <main className="contenido">
        {/* ========== CURRÍCULUM ========== */}
        <div className="curriculum contenedor">
          {/* Nombre */}
          <div className="encabezado">
            <p className="etiqueta">Currículum vitae</p>
            <h1 className="nombre">Luciano Bonilauri</h1>
          </div>

          <div className="curriculum-fila">
            <section className="panel">
              {/* Sobre mí */}
              <div className="sobre-mi">
                <h2 className="subtitulo">Sobre mí</h2>
                <p className="sobre-mi-texto">
                  Estoy en 5to año del secundario, con orientación en programación. Me
                  especializo en front-end y me apasiona crear páginas web claras y
                  fáciles de usar. También me interesa la ciberseguridad.
                </p>
              </div>

              <div className="bloques">
                {/* Cursos y certificaciones */}
                <article className="bloque">
                  <span className="bloque-icono">
                    {/* Ícono de medalla */}
                    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                      <circle cx="12" cy="9" r="6" />
                      <path d="M8.6 13.9 7 22l5-3 5 3-1.6-8.1" />
                    </svg>
                  </span>
                  <h2 className="bloque-titulo">Cursos y certificaciones</h2>
                  <ul className="lista">
                    <li className="curso">
                      <div>
                        <p className="curso-nombre">Ciberseguridad básica</p>
                        <p className="curso-lugar">Cisco Networking Academy</p>
                      </div>
                      <span className="pastilla">2025</span>
                    </li>
                    <li className="curso">
                      <div>
                        <p className="curso-nombre">Inglés nivel B2</p>
                        <p className="curso-lugar">Cambridge English</p>
                      </div>
                      <span className="pastilla">2025</span>
                    </li>
                    <li className="curso">
                      <div>
                        <p className="curso-nombre">JavaScript moderno</p>
                        <p className="curso-lugar">freeCodeCamp</p>
                      </div>
                      <span className="pastilla">2024</span>
                    </li>
                    <li className="curso">
                      <div>
                        <p className="curso-nombre">Diseño web responsive</p>
                        <p className="curso-lugar">freeCodeCamp</p>
                      </div>
                      <span className="pastilla">2024</span>
                    </li>
                  </ul>
                </article>

                {/* Características personales */}
                <article className="bloque">
                  <span className="bloque-icono">
                    {/* Ícono de carita */}
                    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M8.5 14.2c.9 1.3 2.1 1.9 3.5 1.9s2.6-.6 3.5-1.9" />
                      <path d="M9 9.5h.01M15 9.5h.01" strokeWidth="2.6" />
                    </svg>
                  </span>
                  <h2 className="bloque-titulo">Características personales</h2>
                  <ul className="lista">
                    <li className="caracteristica">Responsable y organizado</li>
                    <li className="caracteristica">Trabajo en equipo</li>
                    <li className="caracteristica">Creativo</li>
                    <li className="caracteristica">Curioso por aprender</li>
                    <li className="caracteristica">Atento a los detalles</li>
                  </ul>
                </article>
              </div>
            </section>

            {/* Foto: por ahora es un recuadro de muestra.
                Para poner tu foto, cambiá el contenido por <img src="/img/tu-foto.jpg" alt="..." /> */}
            <figure className="foto">
              <svg width="88" height="88" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="8.5" r="4" />
                <path d="M4.5 20.5c1.2-3.7 4.1-5.6 7.5-5.6s6.3 1.9 7.5 5.6" />
              </svg>
              <figcaption>[Tu foto]</figcaption>
            </figure>
          </div>
        </div>

        {/* ========== PROYECTOS ========== */}
        <Proyectos />
      </main>
    </>
  )
}

export default Inicio
