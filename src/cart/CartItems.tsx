import{ CartItem }from "./cartSlice";


interface CartItemsProps {
  food: CartItem;
}

const CartItems = ({ food }:CartItemsProps) => {
  return (
    <div>
      <ol>
        <li>{food.name}</li>
        <li>{food.price}</li>
        <li>{food.quantity}</li>
      </ol>
    </div>
  );
};

export default CartItems;
