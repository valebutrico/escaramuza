import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand is-flex is-justify-content-center is-align-items-center">
        <h3 className="title is-3">Escaramuza</h3>
      </div>
      
      <div className="navbar-menu is-flex is-justify-content-center is-align-items-center">
        <ul className="navbar-menu is-flex is-justify-content-center is-align-items-center">
          <li><Link className="button" to="/">Inicio</Link></li>
          <li><Link className="button" to="/libros">Libros</Link></li>
          <li><Link className="button" to="/gastronomia">Gastronomía</Link></li>
          <li><Link className="button" to="/talleres">Talleres</Link></li>
          <li><Link className="button" to="/agenda">Agenda</Link></li>
        </ul> 
      </div>
      <CartWidget />    
    </nav>
  )
}

export default NavBar