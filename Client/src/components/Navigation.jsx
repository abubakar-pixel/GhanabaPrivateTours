import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
      <div className="navigation">
        <input
          type="checkbox"
          className="navigation__checkbox"
          id="navi-toggle"
        ></input>

        <label for="navi-toggle" className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
        </label>

        <div className="navigation__background">&nbsp;</div>

        <nav className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item">
              <NavLink to="/" className="navigation__link">
                <span>01</span>Home
              </NavLink>
            </li>
            <li className="navigation__item">
              <NavLink to="/about" className="navigation__link">
                <span>02</span>about ghanaba
              </NavLink>
            </li>
            <li className="navigation__item">
              <NavLink to="/services" className="navigation__link">
                <span>03</span>our services
              </NavLink>
            </li>
            <li className="navigation__item">
              <NavLink to="/bestTours" className="navigation__link">
                <span>04</span>best tours
              </NavLink>
            </li>
            <li className="navigation__item">
              <NavLink to="/booking" className="navigation__link">
                <span>05</span>book now!
              </NavLink>
            </li>
            <li className="navigation__item">
              <NavLink to="/RegisterLogin" className="navigation__link">
                <span>06</span>Register/LOGIN
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
};

export default Navigation;