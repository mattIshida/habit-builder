import { useState } from 'react'
import SignUpForm from './SignUpForm'
import ErrorsAlert from './ErrorsAlert'

function SignUpComponent(){
    
    const [errors, setErrors] = useState([])
    
    return(
        <div>
            <h2>Sign up</h2>
            <SignUpForm />
        </div>
    )
}

export default SignUpComponent;