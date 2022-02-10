import React, { useContext } from "react";
import { RecetasContext } from "../context/RecetasContext";
import { Drink } from "./Drink";

export const ListaRecetas = () => {
  const { recetas } = useContext(RecetasContext);

  return (
    <div className="ListaRecetas container">
      <h1 className="text-center py-3">Listado de Recetas</h1>
      <div className="row">
        {recetas.map((element) => (
          <Drink key={element.strDrink} receta={element} />
        ))}
      </div>
    </div>
  );
};
