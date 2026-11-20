import { useContext } from 'react'
import { TemaContext } from '../Context/TemaContext'
import './Navbar.css'

function Navbar() {
  const { tema, ponerClaro, ponerOscuro } = useContext(TemaContext)

  return (
    <header className="navbar">
      <div className="navbar-contenido contenedor">
        <div className="logo">
          <svg width="34" height="34" viewBox="0 0 32 32" aria-hidden="true">
            <path className="logo-hoja" d="M9 2.5h10.5L27 10v16.5a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-21a3 3 0 0 1 3-3Z" />
            <path className="logo-doblez" d="M19.5 2.5V8a2 2 0 0 0 2 2H27Z" />
            <circle className="logo-dibujo" cx="12.5" cy="13" r="3" />
            <rect className="logo-dibujo" x="9.5" y="19" width="14" height="2.4" rx="1.2" />
            <rect className="logo-dibujo" x="9.5" y="23.4" width="9" height="2.4" rx="1.2" />
          </svg>
          <span className="logo-texto">
            My<span className="logo-acento">cv</span>
          </span>
        </div>

        <div className="selector-tema">
          <button
            type="button"
            className={tema === 'oscuro' ? 'boton-tema activo' : 'boton-tema'}
            onClick={ponerOscuro}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20 14.5A8 8 0 0 1 9.5 4a8.4 8.4 0 1 0 10.5 10.5Z" />
            </svg>
            Oscuro
          </button>

          <button
            type="button"
            className={tema === 'claro' ? 'boton-tema activo' : 'boton-tema'}
            onClick={ponerClaro}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4" />
            </svg>
            Claro
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
