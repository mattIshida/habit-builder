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
        <div className="intentionForm">
            <Form onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" >
                    <Form.Label>Where will you read?</Form.Label>
                    <Form.Control type="username" placeholder="on the bus, the couch, etc." name="where" value={formData.where} onChange={handleFormChange}/>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>What will you read?</Form.Label>
                    <Form.Control type="username" placeholder="Middlemarch, Carrie, etc." name="what" value={formData.what} onChange={handleFormChange}/>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>When will you read?</Form.Label>
                    <Form.Control type="username" placeholder="8am, after dinner, etc." name="when" value={formData.when} onChange={handleFormChange}/>
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