import { Routes, Route, Link } from 'react-router-dom'
import Inicio from './paginas/Inicio.jsx'
import Informatica from './paginas/Informatica.jsx'
import Alimentos from './paginas/Alimentos.jsx'
import Apicultura from './paginas/Apicultura.jsx'
import NaoEncontrada from './paginas/NaoEncontrada.jsx'

function App() {
  return (
    <>
      <nav className="menu">
        <ul>
          <li><Link to="/">Início</Link></li>
          <li><Link to="/informatica">Informática</Link></li>
          <li><Link to="/alimentos">Alimentos</Link></li>
          <li><Link to="/apicultura">Apicultura</Link></li>
        </ul>
      </nav>

      <main className="conteudo">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/informatica" element={<Informatica />} />
          <Route path="/alimentos" element={<Alimentos />} />
          <Route path="/apicultura" element={<Apicultura />} />
          <Route path="*" element={<NaoEncontrada />} />
        </Routes>
      </main>
    </>
  )
}

export default App