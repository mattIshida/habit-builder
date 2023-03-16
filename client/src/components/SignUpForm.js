import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react'

function SignUpForm({ setUser, setErrors }){
    const [formData, setFormData] = useState({username: "", password: "", password_confirmation: ""})

    function handleFormChange(e){
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function handleFormSubmit(e){
        e.preventDefault()
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(r => {
            if(r.ok){
                r.json().then(res => setUser(res))
            } else {
                r.json().then(res => setErrors(res.errors))
            }
        })
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

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password_confirmation" value={formData?.password_confirmation} onChange={handleFormChange} />
        </Form.Group>
        
        <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>
    );
}
export default SignUpForm;