import { useSelector } from "react-redux";
import { getCart } from "./cartSlice";

import { CartItem } from "../cart/cartSlice";
import CartItems from "./CartItems";

const Cart = () => {
  const cart = useSelector(getCart);
  console.log(cart);

  return (
    <div>
      {cart.map((food: CartItem) => (
        <CartItems key={food.foodId} food={food} />
      ))}
    </div>
  );
};

export default Cart;
