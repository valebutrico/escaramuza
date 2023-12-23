import React, { useContext, useState } from 'react';
import ItemCount from "./ItemCount";
import { CartContext } from '../Context/CartContext';

const ItemDetail = ( {item} ) => {

  const { carrito, agregarAlCarrito } = useContext(CartContext);
  console.log(carrito);

  const [cantidad, setCantidad] = useState(1);

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1)
  } 

  const handleSumar = () => {
    cantidad < item.stock && setCantidad(cantidad + 1)
  }
 
  
  return (
    <div>
        <div>
            <img src={item.imagen} alt={item.titulo}/>
            <div>
                <h3>{item.titulo}</h3>
                <p>{item.categoria}</p>
                <p>{item.descripcion}</p>
                <p>{item.precio}</p>
                <ItemCount cantidad={cantidad} handleRestar={handleRestar} handleSumar={handleSumar} handleAgregar={() => { agregarAlCarrito(item, cantidad)}}/>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail