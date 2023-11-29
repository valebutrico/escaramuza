import 'bulma/css/bulma.min.css';
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer';
import NavBar from "./components/NavBar";
import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Libros from './components/Libros';
import Talleres from './components/Talleres';
import Agenda from './components/Agenda';
import Gastronomia from './components/Gastronomia';

function App() {
  return (
    
      <BrowserRouter>

        <NavBar />
      
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/item" element={<ItemDetailContainer itemId={2}/>} />
          <Route path="/libros" element={<Libros />} />
          <Route path="/gastronomia" element={<Gastronomia />} />
          <Route path="/talleres" element={<Talleres />} />
          <Route path="/agenda" element={<Agenda />} />
        </Routes>
        
        
      </BrowserRouter>
      
    
  );
}

export default App;