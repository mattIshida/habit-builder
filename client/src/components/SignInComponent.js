import { useState } from 'react'
import SignInForm from './SignInForm'
import ErrorsAlert from './ErrorsAlert'

function SignInComponent({ setUser }){
    
    const [errors, setErrors] = useState([])
    
    return(
        <div>
            <h2>Sign In</h2>
            <SignInForm setErrors={setErrors} setUser={setUser}/>
            {errors.length>0 ? <ErrorsAlert errors={errors}/> : null}
        </div>
    )
}

export default SignInComponent;