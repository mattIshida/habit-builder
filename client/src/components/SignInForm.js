import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react'
import { useHistory} from 'react-router-dom'
import { useSignInMutation } from '../app/services/userAPI'
import { useSelector } from 'react-redux'
import Alert from 'react-bootstrap/Alert'

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
    }

    let content
    if(isSuccess) history.push('/home')
    if(isError) {
        content = error.data.errors.map(e => <Alert variant="danger">{e}</Alert>)
    }  
    
    return (
        <Form onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="username" placeholder="Enter email" name="username" value={formData?.username} onChange={handleFormChange}/>
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password" value={formData?.password} onChange={handleFormChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
        {content}
        </Form>
    );
}

export default SignInForm;