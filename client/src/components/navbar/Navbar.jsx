import "./navbar.css";
import logo from '../../asset/logo-new.png';
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login"); 
  };

  const handleRegisterClick = () => {
    navigate("/login");
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" className="logoLink">
          <img src={logo} alt="Logo" className="logoImage" />
          moetours
        </Link>

        {user ? (
          <span>Welcome, {user.username}</span>
        ) : (
          <div className="navItems">
            <button className="navButton" onClick={handleRegisterClick}>
              Register
            </button>
            <button className="navButton" onClick={handleLoginClick}>
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
