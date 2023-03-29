import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import { useAutoLogInQuery, useGetAttemptsQuery, usePostTipMutation } from '../app/services/userAPI'
import { updateFlow } from '../features/flowSlice'
import { useDispatch } from 'react-redux'

const initialFormData = {text: "", image: ""}

function TipForm(){

    const [formData, setFormData] = useState(initialFormData)
    const {data: user, isSuccess} = useAutoLogInQuery()
    const {data: attempts, isSuccess: attemptsIsSuccess} = useGetAttemptsQuery()
    const [postTip, {isSuccess: isSuccessPost}] = usePostTipMutation()
    const dispatch = useDispatch()

    function handleFormChange(e){
        const newData = {...formData, [e.target.name]: e.target.value}
        if(isSuccess & attemptsIsSuccess){
            setFormData({...newData, user_id: user.id, attempt_id: attempts.find(a=>a.current).id})
        } 
    }

    function handleFormSubmit(e){
        e.preventDefault()
        postTip(formData)
    }

    if(isSuccessPost) dispatch(updateFlow('submittedTip'))

    return(
        <div className="intentionForm">
            <Form onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" >
                    <Form.Label>What helped you complete this challenge?</Form.Label>
                    <Form.Control type="username" placeholder="finding a quiet place, e.g." name="text" value={formData.text} onChange={handleFormChange}/>
                </Form.Group>

                {/* <Form.Group className="mb-3" >
                    <Form.Label>What will you read?</Form.Label>
                    <Form.Control type="username" placeholder="Middlemarch, Carrie, etc." name="what" value={formData.what} onChange={handleFormChange}/>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>When will you read?</Form.Label>
                    <Form.Control type="username" placeholder="8am, after dinner, etc." name="when" value={formData.when} onChange={handleFormChange}/>
                </Form.Group> */}

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

export default TipForm;