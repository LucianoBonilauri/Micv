import './TarjetaProyecto.css'

// TIPO: la forma de cada proyecto de public/proyectos.json.
// Lo exportamos porque Proyectos.tsx también lo usa.
export type Proyecto = {
  id: number
  titulo: string
  anio: string
  tipo: string
  rol: string
  descripcion: string
  imagen: string
}

// Muestra UNA card. Recibe un proyecto por props desde Proyectos.tsx
function TarjetaProyecto({ proyecto }: { proyecto: Proyecto }) {
  return (
    <article className="tarjeta">
      {/* Logo del proyecto */}
      <div className="tarjeta-logo">
        <img src={proyecto.imagen} alt={'Logo de ' + proyecto.titulo} />
      </div>

      <div className="tarjeta-cuerpo">
        {/* Título y año */}
        <div className="tarjeta-cabecera">
          <h3 className="tarjeta-titulo">{proyecto.titulo}</h3>
          <span className="pastilla">{proyecto.anio}</span>
        </div>

        {/* Lista de datos: <dt> es el nombre del dato y <dd> su valor */}
        <dl className="tarjeta-datos">
          <dt>Tipo de proyecto</dt>
          <dd>{proyecto.tipo}</dd>
          <dt>Rol cumplido</dt>
          <dd>{proyecto.rol}</dd>
        </dl>

        {/* Descripción */}
        <div className="tarjeta-descripcion">
          <p className="tarjeta-rotulo">Descripción</p>
          <p className="tarjeta-texto">{proyecto.descripcion}</p>
        </div>
      </div>
    </article>
  )
}

export default TarjetaProyecto
