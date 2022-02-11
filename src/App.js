import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Form } from "./components/Form";
import { ListaRecetas } from "./components/ListaRecetas";

import CategoriasProvider from "./context/CategoriasContext";
import ModalProvider from "./context/ModalContext";
import RecetasProvider from "./context/RecetasContext";

function App() {
  return (
    <CategoriasProvider>
      <RecetasProvider>
        <ModalProvider>
          <div className="App justify-content-center container">
            <header className="bg-info text-center py-2 text-white">
              Buscador de Bebidas
            </header>
            <Form />
          </div>
          <ListaRecetas />
        </ModalProvider>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
