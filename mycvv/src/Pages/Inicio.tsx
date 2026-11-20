import Navbar from '../Components/Navbar'
import Proyectos from '../Components/Proyectos'
import './Inicio.css'

function Inicio() {
  return (
    <>
      <Navbar />

      <main className="contenido">
        <div className="curriculum contenedor">
          <div className="encabezado">
            <p className="etiqueta">Currículum vitae</p>
            <h1 className="nombre">Luciano Bonilauri</h1>
          </div>

          <div className="curriculum-fila">
            <section className="panel">
              <div className="sobre-mi">
                <h2 className="subtitulo">Sobre mí</h2>
                <p className="sobre-mi-texto">
                  Estoy en 5to año del secundario, con orientación en programación. Me
                  especializo en front-end y me apasiona crear páginas web claras y
                  fáciles de usar. También me interesa la ciberseguridad.
                </p>
              </div>

              <div className="bloques">
                <article className="bloque">
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

                <article className="bloque">
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

            <figure className="foto">
              <svg width="88" height="88" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="8.5" r="4" />
                <path d="M4.5 20.5c1.2-3.7 4.1-5.6 7.5-5.6s6.3 1.9 7.5 5.6" />
              </svg>
            </figure>
          </div>
        </div>

        <Proyectos />
      </main>
    </>
  )
}

export default Inicio
