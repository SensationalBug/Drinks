import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ModalContext = createContext();

const ModalProvider = (props) => {
  const [idReceta, setIdReceta] = useState(null);
  const [ingredientes, setIngredientes] = useState({});

  useEffect(() => {
    const obtenerIngredientes = async () => {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`;
      const result = await axios.get(url);
      setIngredientes(result.data.drinks[0]);
    };
    if (idReceta) {
      obtenerIngredientes();
    }
  }, [idReceta]);

  return (
    <ModalContext.Provider
      value={{
        setIdReceta,
        setIngredientes,
        ingredientes,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
