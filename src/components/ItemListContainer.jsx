import { useEffect, useState } from "react";
import { pedirDatos } from "./helpers/pedirDatos";
import { ItemList } from "./ItemList";

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
      <ItemList libros={libros}/>
    </section>
  );
};

export default ItemListContainer;
