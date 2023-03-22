import { useState } from 'react'
import SignUpForm from './SignUpForm'
import ErrorsAlert from './ErrorsAlert'
import { Container } from 'react-bootstrap'

function SignUpComponent(){
    
    const [errors, setErrors] = useState([])
    
    return(
        <Container className="md col-md-7 col-lg-6 col-sm-10 p-3">
            <h2>Sign up</h2>
            <SignUpForm />
        </Container>
    )
}

export default SignUpComponent;