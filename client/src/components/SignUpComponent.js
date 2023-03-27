import { useState, useEffect } from 'react'
import SignUpForm from './SignUpForm'
import ErrorsAlert from './ErrorsAlert'
import { Container, Button } from 'react-bootstrap'

function SignUpComponent(){
    
    const [errors, setErrors] = useState([])
    const [authUrl, setAuthUrl] = useState("")

    // useEffect(()=>{
    //     fetch('/google_auth/login_url')
    //     .then(res => res.json())
    //     .then(urlObj => {
    //         console.log(authUrl)
    //         setAuthUrl(urlObj.authUrl)
    //     })
    // }, [])

    const handleSignIn = () => {
        fetch('/google_auth/login_url', { credentials: 'include' })
          .then((response) => response.json())
          .then((data) => {
            console.log(data)
            setAuthUrl(data.auth_url);
          })
          .catch((error) => {
            console.error(error);
          });
      };
    
    // function handleClick(){
    //     fetch('/token')
    //     .then(res=>res.json())
    //     .then(data => {
    //         fetch('/auth/google_oauth2', {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type":"application/json",
    //                 'X-CSRF-Token': data.csrf_token
    //             },
    //             body: JSON.stringify({
    //                 authenticity_token: data.csrf_token
    //               })
    //         })
    //     })
    // }

    function handleClick(){
        
    }


    return(
        <Container className="md col-md-7 col-lg-6 col-sm-10 p-3">
            <h2>Sign up</h2>
            <SignUpForm />
            {/* <a href='/google_auth/login'>Sign in with Google</a> */}
            {/* <Button onClick={handleClick}>Sign in with google</Button> */}
            {authUrl ? (
                <a href={authUrl}>Sign in with Google</a>
            ) : (
                <button onClick={handleSignIn}>Sign in with Google</button>
            )}
        </Container>
    )
}

export default SignUpComponent;