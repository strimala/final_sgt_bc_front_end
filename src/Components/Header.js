import { Nav, Navbar } from 'react-bootstrap';

function Header() {
    return (
        <Navbar bg="light" expand="lg" className="mb-3">
            <Navbar.Brand href="/">R A S O L S</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Galvenā</Nav.Link>
                    <Nav.Link href="articles">Raksti</Nav.Link>
                    <Nav.Link href="chat">Viesu grāmata</Nav.Link>
                    <Nav.Link href="registration">Reģistrācija</Nav.Link>
                    <Nav.Link href="about-us">Par mums</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;
