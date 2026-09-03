import { Link } from 'react-router-dom'

function NaoEncontrada() {
  return (
    <section>
      <h1>404 — Página não encontrada</h1>
      <Link to="/">Voltar para o início</Link>
    </section>
  )
}

export default NaoEncontrada