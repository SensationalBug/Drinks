import React, { useContext, useState } from "react";
import { CategoriasContext } from "../context/CategoriasContext";
import { RecetasContext } from "../context/RecetasContext";

export const Form = () => {
  const [buscar, setBuscar] = useState({
    nombre: "",
    categoria: "",
  });
  const { categorias } = useContext(CategoriasContext);
  const { setBusqueda } = useContext(RecetasContext);

  const obtenerData = (e) => {
    setBuscar({
      ...buscar,
      [e.target.name]: [e.target.value],
    });
  };
  return (
    <form
      className="form row mt-5"
      onSubmit={(e) => {
        e.preventDefault();
        setBusqueda(buscar);
      }}
    >
      <div className="col-md-4">
        <input
          type="text"
          name="nombre"
          className="form-control"
          onChange={obtenerData}
        />
      </div>
      <div className="col-md-4">
        <select
          className="form-control"
          name="categoria"
          onChange={obtenerData}
        >
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
          className="form-control bg-info text-white"
          value="Buscar"
        />
      </div>
    </form>
  );
};
