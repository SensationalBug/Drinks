import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "./components/Form";
import "./App.css";

import CategoriasProvider from "./context/CategoriasContext";
import RecetasProvider from "./context/RecetasContext";

function App() {
  return (
    <CategoriasProvider>
      <RecetasProvider>
        <div className="justify-content-center container">
          <header className="bg-info text-center py-2 text-white">
            Buscador de Bebidas
          </header>
          <Form />
        </div>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
