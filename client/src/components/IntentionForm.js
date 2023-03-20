import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import { useAutoLogInQuery, useGetAttemptsQuery, usePostIntentionMutation } from '../app/services/userAPI'

const initialFormData = {where: "", what: "", when: ""}

function IntentionForm(){

    const [formData, setFormData] = useState(initialFormData)
    const {data: user, isSuccess} = useAutoLogInQuery()
    const {data: attempts, isSuccess: attemptsIsSuccess} = useGetAttemptsQuery()
    const [postIntention, {isSuccess: isSuccessPost}] = usePostIntentionMutation()
    console.log('formData', formData)
    function handleFormChange(e){
        const newData = {...formData, [e.target.name]: e.target.value}
        if(isSuccess & attemptsIsSuccess){
            setFormData({...newData, user_id: user.id, attempt_id: attempts.find(a=>a.current).id})
        } 
    }

    function handleFormSubmit(e){
        e.preventDefault()
        postIntention(formData)
    }

    return(
        <div>
            <h2>Set an intention to help you complete your next challenge</h2>
            <Form onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" >
                    <Form.Label>Where will I read?</Form.Label>
                    <Form.Control type="username" placeholder="Enter email" name="where" value={formData.where} onChange={handleFormChange}/>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>What will I read?</Form.Label>
                    <Form.Control type="username" placeholder="Enter email" name="what" value={formData.what} onChange={handleFormChange}/>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>When will I read?</Form.Label>
                    <Form.Control type="username" placeholder="Enter email" name="when" value={formData.when} onChange={handleFormChange}/>
                </Form.Group>

                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Post to my public feed" />
                </Form.Group> */}
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                {/* {content} */}
            </Form>
        </div>
    )
}

export default IntentionForm;