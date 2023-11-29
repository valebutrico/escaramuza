import React from 'react'

export const Item = ( {libro} ) => {


  return (
    <div>
        < img src={libro.imagen} alt={libro.titulo} />
        <div>
            <h3>{libro.titulo}</h3>
            <p>Categoría: {libro.categoria}</p>
            <p>Precio: ${libro.precio}</p>
            <a href={`/item/${libro.id}`}>Ver más</a>
        </div>

    </div>
  )
}
