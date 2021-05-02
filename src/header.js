import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link className="header__link" to="/">
        <div className="logo">
          Video <i className="fas fa-video"></i> Station
        </div>
      </Link>

      <div className="search-container">
        <input
          className="search-container__search-box"
          type="text"
          placeholder="Search"
        />
        <button className="search-container__button">
          <i className="fas fa-search"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
