import { Route, Routes } from "react-router-dom";
import "./App.css";
 import Navbar from "./Components/navbar";
import Contacts from "./Pages/Contacts";
import Home from "./Pages/Home";
import Registration from "./Pages/Registration";

export default function App() {
  return (
    <section className="container">

      <nav className="navBar">
        <Navbar />
      </nav>
      <Routes>
        <Route exact path="/"  element={<Home />}  />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/Registration" element={<Registration />} />
      </Routes>
    </section>
  );
}


