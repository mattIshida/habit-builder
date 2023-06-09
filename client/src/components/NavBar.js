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
import { Image } from 'react-bootstrap';

function NavBar() {

    const [logOut, {data, isLoading, isSuccess, isError, error}] = useLogOutMutation()
    const {data: user, isSuccess: isSuccessUser, isError: isErrorUser, refetch} = useAutoLogInQuery()
    const history = useHistory()
    const dispatch = useDispatch()

    if(isSuccessUser) console.log('user',user.image)

    function handleLogout(){
        logOut()
        // refetch()
        // dispatch(clearUser())
        history.push('/')
    }

    //if(isErrorUser) return <NavBarStatic />
    let content

    if(isSuccessUser) content = (
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
                HabitBuilder{user.tier>0 ? " Premium": null} 
            </Navbar.Brand>
            <Nav className="justify-content-end">
                {/* <Nav.Link href="/signup">Sign Up</Nav.Link> */}
                {/* <Nav.Link href="/home">Home</Nav.Link> */}
                {/* <Nav.Link href="/timer">Timer</Nav.Link> */}
                {/* <Nav.Link href="/checkout">Checkout</Nav.Link> */}
                {/* <Nav.Link href="/upgrade">Upgrade</Nav.Link> */}
                {/* <Nav.Link href="/share">Share</Nav.Link> */}
                {/* <Nav.Link href="/readers">Browse</Nav.Link> */}
                <Nav.Link href="/">Home</Nav.Link>
            </Nav>
            

            <Navbar.Collapse id="navbar-dark-example" className="justify-content-end">
            {isSuccessUser ? <>
                <Navbar.Text className="mx-3 navbarPoints">
                        {`Points: ${user.points}`}
                </Navbar.Text>
                <Navbar.Text className="mx-3 navbarPoints">
                        {`Streak: ${user.streak}`}
                </Navbar.Text>
            </>: null}
            <Nav>
                <NavDropdown
                id="nav-dropdown-dark-example"
                title="Account"
                menuVariant="dark"
                >
                
                <NavDropdown.Item href="/feed">Feed</NavDropdown.Item>

                <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                {user.tier == 0 ? <NavDropdown.Item href="/upgrade">
                    Upgrade
                </NavDropdown.Item> : null}
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

    return content
}

export default NavBar;