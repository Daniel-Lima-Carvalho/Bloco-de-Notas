import { Navbar } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { NavDropdown } from 'react-bootstrap'

const Menu = () => {
    return (
        <Navbar className='menu' variant="dark">
            <Container>
                <Navbar.Brand href="#home">Bloco de Notas</Navbar.Brand>
                <Nav className="ms-auto">
                    <NavDropdown title="MENU" id="basic-nav-dropdown" drop='start'>
                        <NavDropdown.Item href="#action/3.1">Backup</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.2">Restore</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Container>
        </Navbar>
    );
}
 
export default Menu;

