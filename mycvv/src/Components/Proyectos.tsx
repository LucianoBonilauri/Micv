import { useEffect, useState } from 'react'
import TarjetaProyecto from './TarjetaProyecto'
import type { Proyecto } from './TarjetaProyecto'
import './Proyectos.css'

function Proyectos() {
  // ESTADO: la lista de proyectos. Empieza vacía hasta que llega el JSON.
  const [proyectos, setProyectos] = useState<Proyecto[]>([])

  // FETCH: traemos public/proyectos.json y guardamos los datos en el estado.
  // El [] del final hace que esto se ejecute una sola vez, cuando aparece el componente.
  useEffect(() => {
    fetch('/proyectos.json')
      .then((respuesta) => respuesta.json())
      .then((datos) => setProyectos(datos))
  }, [])

  return (
    <section className="proyectos contenedor">
      <div className="encabezado">
        <p className="etiqueta">Proyectos</p>
        <h2 className="proyectos-titulo">Realizados durante el secundario</h2>
      </div>

      <div className="proyectos-grilla">
        {/* MAP: por cada proyecto creamos una TarjetaProyecto.
            La key (el id del proyecto) le sirve a React para distinguir cada card. */}
        {proyectos.map((proyecto) => (
          <TarjetaProyecto key={proyecto.id} proyecto={proyecto} />
        ))}
      </div>
    </section>
  )
}

export default Proyectos
