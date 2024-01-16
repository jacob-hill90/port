import guin from "/guin.png";
import "./style.css";

const Nav = () => {
  return (
    <>
      <div className="nav-wrapper">
        <div className="nav-logo">
          <a href="#">
            <img src={guin} className="guin"></img>
          </a>
        </div>
        <div className="nav-item-container">
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;
