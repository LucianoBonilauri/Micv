import { createContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'

// TIPO: el tema solo puede valer "claro" u "oscuro"
type Tema = 'claro' | 'oscuro'

// TIPO: lo que el contexto comparte con los componentes
type TemaContextTipo = {
  tema: Tema
  ponerClaro: () => void
  ponerOscuro: () => void
}

// CONTEXT: creamos el contexto del tema.
// Estos valores son solo de relleno: los valores reales los pone el TemaProvider.
export const TemaContext = createContext<TemaContextTipo>({
  tema: 'claro',
  ponerClaro: () => {},
  ponerOscuro: () => {},
})

// PROVIDER: envuelve toda la app (ver App.tsx) y le pasa el tema
// a todos los componentes que estén adentro.
export function TemaProvider({ children }: { children: ReactNode }) {
  // ESTADO: el tema actual. Empieza en "claro".
  const [tema, setTema] = useState<Tema>('claro')

  // Cada vez que cambia el tema, lo ponemos como clase del <body>:
  // <body class="claro"> o <body class="oscuro">. El CSS (index.css) usa esa clase.
  useEffect(() => {
    document.body.className = tema
  }, [tema])

  // Funciones que usan los botones de la Navbar
  function ponerClaro() {
    setTema('claro')
  }

  function ponerOscuro() {
    setTema('oscuro')
  }

  return (
    <TemaContext.Provider value={{ tema, ponerClaro, ponerOscuro }}>
      {children}
    </TemaContext.Provider>
  )
}
