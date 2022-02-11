import { React, useContext, useState } from "react";
import { ModalContext } from "../context/ModalContext";
import { Modal, ModalBody, ModalHeader } from "reactstrap";

export const Drink = ({ receta }) => {
  const { setIdReceta, ingredientes, setIngredientes } =
    useContext(ModalContext);
  const [isOn, setIsOn] = useState(false);

  const toggle = () => {
    if (isOn) {
      setIdReceta(null);
      setIngredientes({});
      setIsOn(false);
    } else {
      setIsOn(true);
    }
  };

  const mostrarIngredientes = (ingredientes) => {
    let listaIngredientes = [];
    for (let i = 0; i < 16; i++) {
      if (ingredientes[`strIngredient${i}`]) {
        listaIngredientes.push(
          <li>
            {ingredientes[`strIngredient${i}`]} {ingredientes[`strMeasure${i}`]}
          </li>
        );
      }
    }
    return listaIngredientes;
  };

  return (
    <div className="card col-md-6 col-lg-4 col-12 mt-2">
      <h6 className="card-header text-center w-100">{receta.strDrink}</h6>
      <img className="card-img-top" alt="..." src={receta.strDrinkThumb} />
      <div className="card-body">
        <button
          className="btn btn-block btn-info text-white"
          onClick={() => {
            setIdReceta(receta.idDrink);
            toggle();
          }}
        >
          Ver Receta
        </button>
      </div>
      <Modal isOpen={isOn} toggle={toggle} className="recetaModal">
        <ModalHeader toggle={toggle}>{ingredientes.strDrink}</ModalHeader>
        <ModalBody>
          <h2>Instructions</h2>
          <p>{ingredientes.strInstructions}</p>
          <img
            className="card-img-top"
            src={ingredientes.strDrinkThumb}
            alt="..."
          />
          <h3>Ingredients</h3>
          <ul>{mostrarIngredientes(ingredientes)}</ul>
        </ModalBody>
      </Modal>
    </div>
  );
};
