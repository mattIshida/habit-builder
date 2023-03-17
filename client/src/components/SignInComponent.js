import { useState } from 'react'
import SignInForm from './SignInForm'
import ErrorsAlert from './ErrorsAlert'

function SignInComponent(){
    
    // const [errors, setErrors] = useState([])
    
    return(
        <div>
            <h2>Sign In</h2>
            <SignInForm />
            {/* {errors.length>0 ? <ErrorsAlert errors={errors}/> : null} */}
        </div>
    )
}

export default SignInComponent;