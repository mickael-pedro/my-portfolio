import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
        <Navbar variant="dark" expand="md" fixed="top" className="shadow-sm p-3" style={{backgroundColor: "#262534"}}>
            <Container>
                <Navbar.Brand>
                    <b>Mickaël De Jesus Pedro</b>
                </Navbar.Brand>
                <Navbar.Toggle>
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse>
                    <Nav className="ms-auto">
                        <NavLink
                            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                            to="/"
                        >
                            Accueil
                        </NavLink>                        
                        <NavLink 
                            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                            to="/resume"
                        >
                            CV
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                            to="/projects"
                        >
                            Projets
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}