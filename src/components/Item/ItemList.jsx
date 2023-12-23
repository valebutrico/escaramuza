import React from 'react'
import { Item } from './Item'

export const ItemList = ( {libros} ) => {
  return (
    <div className='item'>
      { libros.map((libro) => <Item libro={libro} key={libro.id}/>)}
    </div>
  )
}
