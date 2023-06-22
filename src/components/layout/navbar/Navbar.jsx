import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navContainer">
      <img
        src="https://res.cloudinary.com/dqpkwwzdz/image/upload/v1687389913/Brillant%C3%A9/logo_phxbl1.png"
        alt="logo"
        className="logo"
      ></img>

      <ul className="containerCategories">
        <li>Todas</li>
        <li>Deportivas</li>
        <li>Urbanas</li>
      </ul>

      <CartWidget />
    </div>
  );
};

export default Navbar;
