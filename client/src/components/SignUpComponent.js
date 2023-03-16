import { useState } from 'react'
import SignUpForm from './SignUpForm'
import ErrorsAlert from './ErrorsAlert'

function SignUpComponent({ setUser }){
    
    const [errors, setErrors] = useState([])
    
    return(
        <div>
            <h2>Sign up</h2>
            <SignUpForm setErrors={setErrors} setUser={setUser}/>
            {errors?.length>0 ? <ErrorsAlert errors={errors}/> : null}
        </div>
    )
}

export default SignUpComponent;