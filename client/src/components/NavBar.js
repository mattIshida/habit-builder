import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap/esm/NavLink';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useLogOutMutation } from '../app/services/userAPI';

function NavBar() {

    const [logOut, {data, isLoading, isSuccess, isError, error}] = useLogOutMutation()

    function handleLogout(){
        logOut()
    }

    return (
        <>
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">
                {/* <img
                alt=""
                src="/logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
                />{' '} */}
                Habit Builder
            </Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="/signup">Sign Up</Nav.Link>
                <Nav.Link href="/signin">Sign In</Nav.Link>
                <Nav.Link href="/home">Home</Nav.Link>
            </Nav>
            <Navbar.Collapse id="navbar-dark-example">
            <Nav>
                <NavDropdown
                id="nav-dropdown-dark-example"
                title="Account"
                menuVariant="dark"
                >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="/signin">
                    Signin
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogout}>
                    Logout
                </NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    );
}

export default NavBar;