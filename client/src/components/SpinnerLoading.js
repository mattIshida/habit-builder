import { Container, Spinner } from "react-bootstrap"

function SpinnerLoading(){
    return(
        <Container className="justify-content-center m-5">
            <Spinner animation="border" role="status" style={{size: "10rem"}}>
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </Container>
    )
}

export default SpinnerLoading


