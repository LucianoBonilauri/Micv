import { useEffect, useState } from 'react'
import TarjetaProyecto from './TarjetaProyecto'
import type { Proyecto } from './TarjetaProyecto'
import './Proyectos.css'

function Proyectos() {
  const [proyectos, setProyectos] = useState<Proyecto[]>([])

  
  useEffect(() => {
    fetch('/proyectos.json')
      .then((respuesta) => respuesta.json())
      .then((datos) => setProyectos(datos))
  }, [])

  return (
    <section className="proyectos contenedor">
      <div className="encabezado">
        <p className="etiqueta">Proyectos realizados durante el secundario</p>
      </div>

      <div className="proyectos-grilla">
        {proyectos.map((proyecto) => (
          <TarjetaProyecto key={proyecto.id} proyecto={proyecto} />
        ))}
      </div>
    </section>
  )
}

export default Proyectos
