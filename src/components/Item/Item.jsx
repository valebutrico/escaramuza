import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ( {libro} ) => {


  return (
    <div className='libro'>
        < img src={libro.imagen} alt={libro.titulo} />
        <div>
            <h3>{libro.titulo}</h3>
            <p>Categoría: {libro.categoria}</p>
            <p>Precio: ${libro.precio}</p>
            <Link to={`/item/${libro.id}`}>Ver más</Link>
        </div>
    </div>
  )
}
