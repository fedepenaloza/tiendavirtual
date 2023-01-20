/* IMPORTACIONES */

//Modulos
import { Link } from 'react-router-dom'

//Estilos
import './NavBar.css'
//Componentes
import CardWidget from '../cardWidget/CardWidget.js'
//Core

/* LOGICA */
const NavBar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link to="/">MaesDrink</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/productos">Productos</Link></li>
            <li><Link to="/promos">Promos</Link></li>
          </ul>
          <span href="#a"><CardWidget cantidad="1" /></span>
        </div>
      </div>
    </nav>
    </header>

  )
}
/* EXPORTACION */

export default NavBar