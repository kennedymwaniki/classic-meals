import React from "react";
import { Meal } from "./Menu";
import { useDispatch } from "react-redux";
import { addItem } from "../cart/cartSlice";
import{ CartItem }from "../cart/cartSlice";

interface MenuItemProps {
  meal: Meal;
}

export interface cart {
  quantity: number;
  id: string;
  name: string;
  price: string;
  description: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ meal }) => {
  const dispatch = useDispatch();
  // const cart = useSelector(getCart);
  const { id, name, price, description } = meal;
  const newItem: CartItem = {
    quantity: 1,
    foodId:id,
    name,
    price,
    description,
  };

  function handleAddToCart() {
    dispatch(addItem(newItem));
  }
  // console.log("CartItems:", cart.length);
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
    </div>
  );
};
export default MenuItem;
