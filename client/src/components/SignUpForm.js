import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useSignUpMutation } from '../app/services/userAPI'

function SignUpForm(){

    const history = useHistory()
    const [formData, setFormData] = useState({username: "", email:"", password: "", password_confirmation: "", utc_offset: -(new Date().getTimezoneOffset())})
    const [signUp, {
        data, 
        isLoading, 
        isSuccess, 
        isError, 
        error}] = useSignUpMutation()

    function handleFormChange(e){
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function handleFormSubmit(e){
        e.preventDefault()
        signUp(formData)        
    }

    let content
    if(isSuccess) {
        console.log('success')
        history.push('/upgrade')
    }
    if(isError) {
        content = error.data.errors.map(e => <Alert variant="danger">{e}</Alert>)
    }  

    return (
        <Form onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3" controlId="signUpUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="username" placeholder="Enter username" name="username" value={formData?.username} onChange={handleFormChange}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="signUpEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" value={formData?.email} onChange={handleFormChange}/>
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="signUpPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password" value={formData?.password} onChange={handleFormChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="signUpPasswordConfirmation">
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password_confirmation" value={formData?.password_confirmation} onChange={handleFormChange} />
        </Form.Group>

        <Button variant="primary" type="submit">Sign up</Button>

        {content}
        </Form>
    );
}
export default SignUpForm;