import React from 'react';

const ItemDetail = ( {item} ) => {
  
  return (
    <div>
        <div>
            <img src={item.imagen} alt={item.titulo}/>
            <div>
                <h3>{item.titulo}</h3>
                <p>{item.categoria}</p>
                <p>{item.descripcion}</p>
                <p>{item.precio}</p>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail