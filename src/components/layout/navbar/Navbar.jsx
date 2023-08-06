import MaterialComponents from "../../common/Material/MaterialComponents";
import "./Navbar.css";
import NavButtons from "../../common/cartWidget/NavButtons";
import { Link } from "react-router-dom";

const Navbar = () => {
  let userRol = "admin";
  return (
    <div>
      <div className="navContainer">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dqpkwwzdz/image/upload/v1687389913/Brillant%C3%A9/logo_phxbl1.png"
            alt="logo"
            className="logo"
          ></img>
        </Link>
        <h1 className="titulo">
          Club Social y Polideportibo Brillanté: Tienda Online Oficial
        </h1>
        <NavButtons />
        {userRol === "admin" && <Link to={"/dashboard"}>Admin</Link>}
        <MaterialComponents />
      </div>
    </div>
  );
};

export default Navbar;
