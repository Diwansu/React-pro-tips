import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <Link to="/" style={{ margin: "25px" }}>
        Kalvium ❤️
      </Link>

      <div style={{ margin: "25px" }}>
        <Link to="/Contacts">Contact</Link>
        <Link to="/Registration" style={{ margin: "30px" }}>
          Registration Form
        </Link>
      </div>
    </>
  );
}
