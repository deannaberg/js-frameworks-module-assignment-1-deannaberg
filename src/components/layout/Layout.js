import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Outlet, Link } from 'react-router-dom';

function NavLayout() {
    return (<>
        <Navbar bg="light" variant="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Container>
                    <Nav className="mr-auto">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="portfolio" className="nav-link">Portfolio</Link>
                        <Link to="about" className="nav-link">About</Link>
                        <Link to="contact" className="nav-link">Contact</Link>
                    </Nav>
                </Container>
            </Navbar.Collapse>

        </Navbar>
        <Container className="pt-4">
            <Outlet />
        </Container>
    </>

    );
}

export default NavLayout;