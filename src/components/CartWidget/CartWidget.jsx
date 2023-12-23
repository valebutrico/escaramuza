import { Link } from "react-router-dom";
import canasto from "./img/shopping-cart5929.jpg";
import "./carrito.css";
import React, {useContext} from "react";
import { CartContext } from "../Context/CartContext";

const CartWidget = () => {

  const { cantidadCarrito } = useContext(CartContext);

  return (
    <div>
      <Link className="cart" to="/carrito">
      <img src={canasto} alt="canasto-widget" className="cart-image"/>
      <span>( {cantidadCarrito()} )</span>
      </Link>
    </div>
  )
}

export default CartWidget;