import "../styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navBar">
      <ul>
        <li>
          <Link className="navLink" to="/">Companies</Link>
        </li>
        <li>
          <Link className="navLink" to="/NotFound">Candidates</Link>
        </li>
        <li>
          <Link className="navLink" to="/NotFound">Assessment</Link>
        </li>
        <li>
          <Link className="navLink" to="/NotFound">Post a Job</Link>
        </li>
        <li>
          <Link className="navLink" to="/NotFound">Career Advice</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
