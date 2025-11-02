import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { formatNumber } from '../utils/format.js';

const NavbarComponent = () => {
    const total = 25000;
    const token = false;

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand>Pizzería Mamma Mia</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">🍕 Home</Nav.Link>
                    </Nav>
                    {token ? (
                        <Nav>
                            <Nav.Link href="/menu">🔓 Profile</Nav.Link>
                            <Nav.Link href="/contacto">🔓 Logout</Nav.Link>
                        </Nav>
                    ) : <Nav>
                        <Nav.Link href="/menu">🔐 Login</Nav.Link>
                        <Nav.Link href="/contacto">🔐 Register</Nav.Link>
                    </Nav>}
                    {total > 0 && (
                        <Nav>
                            <Nav.Link href="/cart">🛒 Total: $ {formatNumber(total)}</Nav.Link>
                        </Nav>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default NavbarComponent;
