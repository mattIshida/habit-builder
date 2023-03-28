import { useState } from 'react'
import SignInForm from './SignInForm'
import ErrorsAlert from './ErrorsAlert'
import { Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function SignInComponent(){
    
    // const [errors, setErrors] = useState([])
    
    return(
        <Container className="md col-md-7 col-lg-6 col-sm-10 p-3" >
            <Container >
            <h2>Sign In</h2>
            <SignInForm style={{position: "absolute"}}/>
            <Container className="text-center p-2">
                <NavLink to='/signup'>Don't have an account?</NavLink>
            </Container>
            </Container >
        </Container>
    )
}

export default SignInComponent;