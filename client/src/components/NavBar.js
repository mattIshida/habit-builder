import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap/esm/NavLink';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useAutoLogInQuery, useLogOutMutation } from '../app/services/userAPI';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearUser } from '../features/userSlice';
import NavBarStatic from './NavBarStatic';
import { userApi } from '../app/services/userAPI';

function NavBar() {

    const [logOut, {data, isLoading, isSuccess, isError, error}] = useLogOutMutation()
    const {data: user, isSuccess: isSuccessUser, isError: isErrorUser, refetch} = useAutoLogInQuery()
    const history = useHistory()
    const dispatch = useDispatch()

    function handleLogout(){
        logOut()
        // refetch()
        // dispatch(clearUser())
        // history.push('/')
    }

    //if(isErrorUser) return <NavBarStatic />

    return (
        <>
        <Navbar bg='dark' variant="dark" className="my-navbar">
            <Container >
            <Navbar.Brand href="/">
                {/* <img
                alt=""
                src="/logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
                />{' '} */}
                HabitBuilder
            </Navbar.Brand>
            <Nav className="justify-content-end">
                {/* <Nav.Link href="/signup">Sign Up</Nav.Link> */}
                {/* <Nav.Link href="/home">Home</Nav.Link> */}
                {/* <Nav.Link href="/timer">Timer</Nav.Link> */}
                {/* <Nav.Link href="/checkout">Checkout</Nav.Link> */}
                {/* <Nav.Link href="/upgrade">Upgrade</Nav.Link> */}
                {/* <Nav.Link href="/share">Share</Nav.Link> */}
                <Nav.Link href="/readers">Browse</Nav.Link>
                <Nav.Link href="/feed">Feed</Nav.Link>
            </Nav>
            

            <Navbar.Collapse id="navbar-dark-example" className="justify-content-end">
            {isSuccessUser ? <>
                <Navbar.Text className="mx-3">
                        {`Points: ${user.points}`}
                </Navbar.Text>
                <Navbar.Text className="mx-3">
                        {`Streak: ${user.streak}`}
                </Navbar.Text>
            </>: null}
            <Nav>
                <NavDropdown
                id="nav-dropdown-dark-example"
                title="Account"
                menuVariant="dark"
                >
                <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                <NavDropdown.Item href="/upgrade">
                    Upgrade
                </NavDropdown.Item>
                <NavDropdown.Item href="/readers">Add friends</NavDropdown.Item>
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