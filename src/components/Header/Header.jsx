const Header = ({toggleModale}) => {
  return (
    <nav className="navbar bg-dark mb-3">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1 text-success">Navbar</span>
        <button onClick={toggleModale} className="btn btn-outline-success">
          Open Modalll
        </button>
      </div>
    </nav>
  );
};

export default Header;
