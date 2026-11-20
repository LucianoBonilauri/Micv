import { createContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'

type Tema = 'claro' | 'oscuro'

type TemaContextTipo = {
  tema: Tema
  ponerClaro: () => void
  ponerOscuro: () => void
}

export const TemaContext = createContext<TemaContextTipo>({
  tema: 'claro',
  ponerClaro: () => {},
  ponerOscuro: () => {},
})

export function TemaProvider({ children }: { children: ReactNode }) {
  const [tema, setTema] = useState<Tema>('claro')

  useEffect(() => {
    document.body.className = tema
  }, [tema])

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
