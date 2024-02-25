import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logoSVG from "../../assets/sky-light-default.svg";

import "./Header.scss";

function Header() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="#Header" className="p-2">
          <Image src={logoSVG} width={84} height={32} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="p-2" />
        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
