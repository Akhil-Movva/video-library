export const NavigationBar = () => {
  return (
    <div className="navigation-bar">
      <div className="navigation-bar__item">
        <i className="icon fas fa-home"></i>Home
      </div>

      <div className="navigation-bar__item">
        <i className="icon fas fa-compass"></i>Explore
      </div>
      <hr style={{ margin: "0.5rem 0" }} />

      <div className="navigation-bar__item">
        <i className="icon fas fa-photo-video"></i>Library
      </div>

      <div className="navigation-bar__item">
        <i className=" icon fas fa-history"></i>History
      </div>

      <div className="navigation-bar__item">
        <i className="icon fas fa-clock"></i>Watch later
      </div>

      <div className="navigation-bar__item">
        <i className="icon fas fa-thumbs-up"></i>Liked videos
      </div>

      <hr style={{ margin: "0.5rem 0" }} />
    </div>
  );
};
