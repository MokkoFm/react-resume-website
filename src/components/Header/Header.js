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
          <NavLink exact to="/" activeClassName={style.active}><li>Home</li></NavLink>
          <NavLink to="/services" activeClassName={style.active}><li>Services</li></NavLink>
          <NavLink to="/abouts" activeClassName={style.active}><li>About</li></NavLink>
          <a href="#"><li>Work</li></a>
          <NavLink to="/clients" activeClassName={style.active}><li>Clients</li></NavLink>
          <NavLink to="/blog" activeClassName={style.active}><li>Blog</li></NavLink>
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