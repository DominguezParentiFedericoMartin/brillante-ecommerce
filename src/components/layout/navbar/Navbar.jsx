import MaterialComponents from "../../common/Material/MaterialComponents";
import "./Navbar.css";
import NavButtons from "../../common/cartWidget/NavButtons";
const Navbar = () => {
  return (
    <div className="navContainer">
      <img
        src="https://res.cloudinary.com/dqpkwwzdz/image/upload/v1687389913/Brillant%C3%A9/logo_phxbl1.png"
        alt="logo"
        className="logo"
      ></img>
      <h1 className="titulo">
        Club Social y Polideportibo Brillanté: Tienda Online Oficial
      </h1>
      <NavButtons />
      <MaterialComponents />
    </div>
  );
};

export default Navbar;
