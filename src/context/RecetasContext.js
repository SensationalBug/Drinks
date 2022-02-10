import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const RecetasContext = createContext();

const RecetasProvider = (props) => {
  const [recetas, setRecetas] = useState([]);
  const [busqueda, setBusqueda] = useState({
    nombre: "",
    categoria: "",
  });
  const [consutar, setConsultar] = useState(false);

  const { nombre, categoria } = busqueda;

  useEffect(() => {
    if (consutar) {
      const obtenerRecetas = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;
        const result = await axios.get(url);
        setRecetas(result.data.drinks)
      };

      obtenerRecetas();
    }
  }, [busqueda]);

  return (
    <RecetasContext.Provider value={{ setBusqueda, setConsultar, recetas }}>
      {props.children}
    </RecetasContext.Provider>
  );
};

export default RecetasProvider;
