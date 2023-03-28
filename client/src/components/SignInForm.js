
import { Container, Button, Form, Alert } from 'react-bootstrap'
import { useState } from 'react'
import { useHistory} from 'react-router-dom'
import { useSignInMutation } from '../app/services/userAPI'
import { useSelector } from 'react-redux'

function SignInForm() {

    const history = useHistory()
    const [formData, setFormData] = useState({username: "", password: "", utc_offset: -(new Date().getTimezoneOffset())})
    const [signIn, {
        data, 
        isLoading, 
        isSuccess, 
        isError, 
        error}] = useSignInMutation()

    function handleFormChange(e){
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function handleFormSubmit(e){
        e.preventDefault()
        signIn(formData)
        // history.push('/home')        
    }

    let content
    // if(isSuccess) history.push('/home')
    if(isError) {
        content = error.data.errors.map(e => <Alert className='mt-3' variant="danger">{e}</Alert>)
    }  
    
    return (
        <Container >
            <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="signInUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="username" placeholder="Enter username" name="username" value={formData?.username} onChange={handleFormChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="signInPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" value={formData?.password} onChange={handleFormChange} />
            </Form.Group>

            <Button variant="primary" type="submit" >Sign in</Button>

            </Form>
            {content}
        </Container>
    );
}

export default SignInForm;