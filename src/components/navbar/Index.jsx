import React from "react";
import { Button, Navbar, NavbarBrand } from "reactstrap";
import Logo from "../../assets/images/logo/logo.svg";
import { Link } from "react-router-dom";
function Index(props) {


  return (
    <nav>
      <Navbar className={"my-2 navbar-container"} color="dark" dark>
        <div className="navbar-context-field">
          <NavbarBrand
            href="/"
            style={{
              display: "flex",
              justifyContent: "center !important",
            }}
          >
            <img
              alt="logo"
              src={Logo}
              style={{
                maxHeight: "99px",
                background: "white",
                borderRadius: "5px",
              }}
            />
          </NavbarBrand>
          <div>
            <span className="navbar-filed-UI-content p-3">
              <Link to="/login">
                <Button
                 className={"btn-dark"}
                 >
                  Giriş Yap
                
                </Button>
              </Link>
            </span>
          </div>
        </div>
      </Navbar>
    </nav>
  );
}

export default Index;
