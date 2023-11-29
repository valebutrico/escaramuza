import 'bulma/css/bulma.min.css';
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer';
import NavBar from "./components/NavBar";
import Talleres from './components/Talleres';
import Agenda from './components/Agenda';
import Gastronomia from './components/Gastronomia';
import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import InicioContainer from './components/InicioContainer';

function App() {
  return (
    
      <BrowserRouter>

        <NavBar />
      
        <Routes>
          <Route path="/" element={<InicioContainer greeting={"Bienvenido a Escaramuza - Tu librería online"} />}/>
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/libros" element={<ItemListContainer />} />
          <Route path="/gastronomia" element={<Gastronomia />} />
          <Route path="/talleres" element={<Talleres />} />
          <Route path="/agenda" element={<Agenda />} />
        </Routes>
        
        
      </BrowserRouter>
      
    
  );
}

export default App;