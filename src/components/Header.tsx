import "../index.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="/images/logo.jpg" alt="" className="img" />
        <p className="meals">Classic meals restaurant</p>
      </div>
      <p className="cart">Cart (3)</p>
    </div>
  );
};

export default Header;
