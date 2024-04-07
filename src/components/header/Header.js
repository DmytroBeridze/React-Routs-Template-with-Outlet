import { Link } from "react-router-dom";
import "./header.css";
export const Header = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="about">
              About
            </Link>
          </li>
          <li>
            <Link className="link" to="users">
              Users
            </Link>
          </li>
          <li>
            <Link className="link" to="contacts">
              Contacts
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
