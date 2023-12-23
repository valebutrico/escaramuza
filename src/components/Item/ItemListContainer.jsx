import { useEffect, useState } from "react";
import { pedirDatos } from "../data/pedirDatos";
import { ItemList } from "./ItemList";
import "./libros.css";

const ItemListContainer = ( ) => {

  const [libros, setLibros] = useState([]);
  console.log(libros);

  useEffect(() => {
    pedirDatos()
      .then((res) => {
        setLibros(res);
    })
  }, [])
  

  return (
    <section className="section">
      <div className="item-container">
        <ItemList libros={libros}/>
      </div>
    </section>
  );
};

export default ItemListContainer;
