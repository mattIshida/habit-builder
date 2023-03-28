import { Navbar, Container } from "react-bootstrap";

function NavBarStatic(){

    return(
        <>
        <Navbar bg="dark" variant="dark" className='sticky-top'>
            <Container>
            <Navbar.Brand href="/">
                HabitBuilder
            </Navbar.Brand>
            </Container>
        </Navbar>
        </>
    )
}

export default NavBarStatic;