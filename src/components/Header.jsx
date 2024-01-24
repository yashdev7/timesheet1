import { useState } from "react";
import { Navbar, Nav, NavbarText, Button, Col } from "react-bootstrap";
import { faCog, faUser, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Offcanvas from "react-bootstrap/Offcanvas";
import SideBar from "./Sidebar";
import { useNavigate } from "react-router-dom";

function Header() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();
  const handleSettings = () => {
    navigate("/settings");
  };

  const handleProfileview = () => {
    navigate("/profileview");
  };

  return (
    <Navbar
      className=" bg-light p-0 d-flex align-items-center justify-content-between"
      expand="lg"
    >
      <div className="d-flex align-items-center">
      
        {/* Navbar brand (logo) */}
        <Navbar.Brand href="/">
          <img
            src="/timesheets_logo.png"
            style={{ width: "100%", maxWidth: "120px" }}
            alt=""
          />
        </Navbar.Brand>

        <div>
          {/* Navbar items */}

          <Nav className="ml-auto">
            {/* Dropdown */}
            <Button variant="" onClick={handleShow} size="lg">
              <FontAwesomeIcon icon={faBars} />
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
              <SideBar />
            </Offcanvas>
          </Nav>
        </div>
      </div>

      <div>
        {/* Navbar text */}
        <NavbarText className="fs-4">Timesheet Management System</NavbarText>
      </div>

      <div>
        {/* Settings and Profile links */}
        <Col
          xs={12}
          md={6}
          lg={4}
          className="d-flex align-items-center justify-content-end"
        >
          <Nav.Link href="" className="m-2 p-1" onClick={handleSettings}>
            <FontAwesomeIcon icon={faCog} size="lg" />
          </Nav.Link>
          <Nav.Link href="" className="p-1" onClick={handleProfileview}>
            <FontAwesomeIcon icon={faUser} size="lg" />
          </Nav.Link>
        </Col>
      </div>
    </Navbar>
  );
}

export default Header;