import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "./components/Form";
import CategoriasProvider from "./components/CategoriasContext";
import "./App.css";

function App() {
  return (
    <CategoriasProvider>
      <div className="justify-content-center container">
        <header className="bg-info text-center py-2 text-white">
          Buscador de Bebidas
        </header>
        <Form />
      </div>
    </CategoriasProvider>
  );
}

export default App;
