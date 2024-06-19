import React from "react";
import { Meal } from "./Menu";

interface MenuItemProps {
  meal: Meal;
}

interface cart {
  id: string;
  name: string;
  price: string;
  description: string;
}
type carts = [];

const MenuItem: React.FC<MenuItemProps> = ({ meal }) => {
  const cart: carts = [];
  const { id, name, price, description } = meal;
  const newItem: cart = {
    id,
    name,
    price,
    description,
  };

  function handleAddToCart() {
    cart.push(newItem);
    console.log(cart.length);
  }
  // console.log(cart);
  return (
    <div>
      <div className="mealcard">
        <img src={meal.image} alt="" className="meal-image" />
        <div className="info">
          <h2>{meal.name}</h2>
          <p className="price">${meal.price}</p>
          <p>{meal.description}</p>
          <div className="button">
            <button className="btn" onClick={handleAddToCart}>
              Add to cart
            </button>
          </div>
        </div>
      </div>

      <div>
        <p>Your cart has({cart.length})</p>
      </div>
    </div>
  );
};
export default MenuItem;
