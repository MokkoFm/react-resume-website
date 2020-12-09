const { default: Heading } = require("./Heading")

const Header = () => {
    return (
      <div className="app-header-wrapper">
        <header className="header-wrapper">
          <div>
            <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" className="logo"></img>
          </div>
          <nav className="nav">
            <ul className="nav-wrapper">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Work</li>
              <li>Clients</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </nav>
          <div className="burger-menu">
            <a href="#">Burger</a>
          </div>
        </header>
        <Heading/>
      </div>
    );
};

export default Header;