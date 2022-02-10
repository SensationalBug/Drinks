import { React } from "react";

export const Drink = ({ receta }) => {
  return (
    <div className="card col-md-4 col-12 mt-2">
      <h5 className="card-header border text-center w-100">{receta.strDrink}</h5>
      <div className="card-body">
        <img style={{ width: "18rem" }} alt="..." src={receta.strDrinkThumb} />
      </div>
    </div>
  );
};
