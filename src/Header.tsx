import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div id="header">
      <Link to="/projects">Projects</Link>
    </div>
  );
}
