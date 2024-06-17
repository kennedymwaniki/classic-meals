import React from "react";
import { Meal } from "./Menu";

interface MenuItemProps {
  meal: Meal;
}

const MenuItem: React.FC<MenuItemProps> = ({ meal }) => {
  return (
    <div>
      <div className="mealcard">
        <img src={meal.image} alt="" className="meal-image" />
        <div className="info">
          <h2>{meal.name}</h2>
          <p className="price">Price: ${meal.price}</p>
          <p>{meal.description}</p>
          <div className="button">
            <button className="btn">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
