import { Navbar, Container } from "react-bootstrap";

function NavBarStatic(){

    return(
        <>
        <Navbar bg="dark" variant="dark">
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