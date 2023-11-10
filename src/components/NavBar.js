import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand is-flex is-justify-content-center is-align-items-center">
        <h3 className="title is-3">Escaramuza</h3>
      </div>
      
      <div className="navbar-menu is-flex is-justify-content-center is-align-items-center">
        <button className="button">Libros</button>
        <button className="button">Gastronomía</button>
        <button className="button">Talleres</button>
        <button className="button">Agenda</button>
      </div>
      <CartWidget />    
    </nav>
  )
}

export default NavBar