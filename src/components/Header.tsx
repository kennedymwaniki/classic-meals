import { useSelector } from "react-redux";
import "../index.css";
import { getCart } from "../cart/cartSlice";
import { HiShoppingCart } from "react-icons/hi2";

const Header = () => {
  const cart = useSelector(getCart);
  console.log(cart);
  const quantity = cart.length;
  return (
    <div className="header">
      <div className="logo">
        <img src="/images/logo.jpg" alt="" className="img" />
        <p className="meals">Classic meals restaurant</p>
      </div>
      <p className="cart">
        <HiShoppingCart />({quantity})
      </p>
    </div>
  );
};

export default Header;
