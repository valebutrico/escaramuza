import 'bulma/css/bulma.min.css';
import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"Bienvenido a Escaramuza - Tu librería online"} />
    </div>
  );
}

export default App;