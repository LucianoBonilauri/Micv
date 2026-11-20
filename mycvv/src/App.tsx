import { TemaProvider } from './Context/TemaContext'
import Inicio from './Pages/Inicio'

function App() {
  return (
    <TemaProvider>
      <Inicio />
    </TemaProvider>
  )
}

export default App
