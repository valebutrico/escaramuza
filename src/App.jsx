import ItemListContainer from "./components/Item/ItemListContainer";
import ItemDetailContainer from './components/Item/ItemDetailContainer';
import NavBar from "./components/Navbar/NavBar";
import Talleres from './components/Talleres/Talleres';
import Agenda from './components/Agenda/Agenda';
import Gastronomia from './components/Gastronomia/Gastronomia';
import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import InicioContainer from './components/Inicio/InicioContainer';
import { useState } from "react";
import { CartContext } from "./components/Context/CartContext";
import CartWidget from "./components/CartWidget/CartWidget";

function App() {

  const [carrito, setCarrito] = useState([]);
  const agregarAlCarrito = (item, cantidad) => {
    const itemAgregado = {...item, cantidad};
    const nuevoCarrito = [...carrito];
    const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id)

    if (estaEnElCarrito) {
      estaEnElCarrito.cantidad += cantidad;
      setCarrito(nuevoCarrito);
    } else {
      nuevoCarrito.push(itemAgregado);
    }
    setCarrito( [...carrito, itemAgregado] );    
  }

  const cantidadCarrito = () => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
  }

  
  return (
      <CartContext.Provider value={ {carrito, agregarAlCarrito, cantidadCarrito} }>
        <BrowserRouter>

          <NavBar />
        
          <Routes>
            <Route path="/" element={<InicioContainer greeting={"Bienvenido a Escaramuza - Tu librería online"} />}/>
            <Route path="/escaramuza" element={<InicioContainer greeting={"Bienvenido a Escaramuza - Tu librería online"} />}/>
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/libros" element={<ItemListContainer />} />
            <Route path="/gastronomia" element={<Gastronomia />} />
            <Route path="/talleres" element={<Talleres />} />
            <Route path="/agenda" element={<Agenda />} />
          </Routes>
          
          
        </BrowserRouter>
      </CartContext.Provider>
    
  );
}

export default App;