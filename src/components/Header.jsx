import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="nav-container">
          <div className="logo">
            <img
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
              alt=""
            />
          </div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>Contact</li>
            <li>Career</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
