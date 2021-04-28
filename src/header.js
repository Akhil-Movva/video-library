const Header = () => {
  return (
    <header>
      <div className="logo">
        Video <i className="fas fa-video"></i> Station
      </div>

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
