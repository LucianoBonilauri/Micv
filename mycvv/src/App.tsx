import { TemaProvider } from './Context/TemaContext'
import Inicio from './Pages/Inicio'

// App: envuelve toda la página con el TemaProvider.
// Así cualquier componente de adentro puede leer el tema con useContext.
function App() {
  return (
    <TemaProvider>
      <Inicio />
    </TemaProvider>
  )
}

export default App
