import React, { useContext, useState } from "react";
import { CategoriasContext } from "../context/CategoriasContext";
import { RecetasContext } from "../context/RecetasContext";

export const Form = () => {
  const [buscar, setBuscar] = useState({
    nombre: "",
    categoria: "",
  });
  const [emptyInput, setEmptyInput] = useState("form-control my-2");
  const { categorias } = useContext(CategoriasContext);
  const { setBusqueda, setConsultar } = useContext(RecetasContext);

  const obtenerData = (e) => {
    setBuscar({
      ...buscar,
      [e.target.name]: [e.target.value],
    });
  };

  const submit = () => {
    if (buscar.nombre === "" || buscar.categoria === "") {
      setEmptyInput("form-control my-2 border border-danger");
      setTimeout(() => setEmptyInput("form-control my-2"), 1000);
    } else {
      setBusqueda(buscar);
      setConsultar(true);
    }
  };

  return (
    <form
      className="form row mt-5 container"
      onSubmit={(e) => {
        e.preventDefault();
        submit();
      }}
    >
      <div className="col-md-4">
        <input
          type="text"
          name="nombre"
          className={emptyInput}
          onChange={obtenerData}
        />
      </div>
      <div className="col-md-4">
        <select className={emptyInput} name="categoria" onChange={obtenerData}>
          <option value="">-- Seleccionar --</option>
          {categorias.map((element) => (
            <option key={element.strCategory} value={element.strCategory}>
              {element.strCategory}
            </option>
          ))}
        </select>
      </div>
      <div className="col-md-4">
        <input
          type="submit"
          className="form-control bg-info text-white my-2"
          value="Buscar"
        />
      </div>
    </form>
  );
};
