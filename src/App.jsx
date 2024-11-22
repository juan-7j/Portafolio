import React from 'react'
import Navbar from './componentes/Navbar'
import Hist from './componentes/Hist'
import About from './componentes/About'
import Tecnologias from './componentes/Tecnologias'
import Experiencia from './componentes/Experiencia'
import Proyectos from './componentes/Proyectos'
import Contacto from './componentes/Contacto'


const App = () => {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 '>
      <div className='fixed top-0 -z-10 h-full w-full'>
        <div className='absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'></div>
      </div>
      <div className='container mx-auto px-8'>
        <Navbar />
        <Hist />
        <About />
        <Tecnologias />
        <Experiencia />
        <Proyectos />
        <Contacto />

      </div>

    </div>
  )
}

export default App
