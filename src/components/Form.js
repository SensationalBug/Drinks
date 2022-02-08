import React, { useContext } from "react";
import { CategoriasContext } from "./CategoriasContext";

export const Form = () => {
  const { categorias } = useContext(CategoriasContext);
  return (
    <form className="form row mt-5">
      <div className="col-md-4">
        <input type="text" name="nombre" className="form-control" />
      </div>
      <div className="col-md-4">
        <select className="form-control">
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
          type="button"
          className="form-control bg-info text-white"
          value="Buscar"
        />
      </div>
    </form>
  );
};
