import './TarjetaProyecto.css'

export type Proyecto = {
  id: number
  titulo: string
  año: string
  tipo: string
  rol: string
  descripcion: string
  imagen: string
}

function TarjetaProyecto({ proyecto }: { proyecto: Proyecto }) {
  return (
    <article className="tarjeta">
      <div className="tarjeta-logo">
        <img src={proyecto.imagen} alt={'Logo de ' + proyecto.titulo} />
      </div>

      <div className="tarjeta-cuerpo">
        <div className="tarjeta-cabecera">
          <h3 className="tarjeta-titulo">{proyecto.titulo}</h3>
          <span className="pastilla">{proyecto.año}</span>
        </div>

        <dl className="tarjeta-datos">
          <dt>Tipo de proyecto</dt>
          <dd>{proyecto.tipo}</dd>
          <dt>Rol cumplido</dt>
          <dd>{proyecto.rol}</dd>
        </dl>

        <div className="tarjeta-descripcion">
          <p className="tarjeta-rotulo">Descripción</p>
          <p className="tarjeta-texto">{proyecto.descripcion}</p>
        </div>
      </div>
    </article>
  )
}

export default TarjetaProyecto
