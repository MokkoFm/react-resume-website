import style from './Header.module.css'
const NavLink = require("react-router-dom").NavLink;


const Header = () => {
  return (
    <header className={style.header_wrapper}>
      <div>
        <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" className={style.logo}></img>
      </div>
      <nav className="nav">
        <ul className={style.nav_wrapper}>
          <NavLink to="/"><li>Home</li></NavLink>
          <NavLink to="/services"><li>Services</li></NavLink>
          <NavLink to="/abouts"><li>About</li></NavLink>
          <li>Work</li>
          <li>Clients</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className={style.burger_menu}>
        <a href="#">Burger</a>
      </div>
    </header>
  );
};

export default Header;