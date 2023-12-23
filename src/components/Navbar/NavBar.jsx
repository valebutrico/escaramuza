import { Link } from "react-router-dom";
import "./navbar.css";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div>
        <Link className="marca" to="/">Escaramuza</Link>
      </div>
      
      <div className="menu">
        <ul className="menu-lista">
          <li><Link className="button" to="/libros">Libros</Link></li>
          <li><Link className="button" to="/gastronomia">Gastronomía</Link></li>
          <li><Link className="button" to="/talleres">Talleres</Link></li>
          <li><Link className="button" to="/agenda">Agenda</Link></li>
        </ul>
        <div className="cart">
          <CartWidget />    
        </div>
      </div>
    </nav>
  )
}

export default NavBar