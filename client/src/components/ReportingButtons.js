import { useGetAttemptsQuery, useReportAttemptMutation } from "../app/services/userAPI";
import SpinnerLoading from "./SpinnerLoading";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateFlow } from "../features/flowSlice";

function ReportingButtons(){
    
    const {data: attempts, isSuccess} = useGetAttemptsQuery()
    const [reportAttempt] = useReportAttemptMutation()
    const dispatch = useDispatch()
    
    let currentAttempt, content
    
    if(isSuccess){
        currentAttempt = attempts.find((a)=>a.current)

        function handleClickReport(e){
            if(e.target.value == 'success') dispatch(updateFlow('reportSuccess'))
            else dispatch(updateFlow('reportFail'))
            reportAttempt({id: currentAttempt.id, success: e.target.value === 'success'})
        }

        content = (
            <Card>
                <Card.Body>

                
                <Card.Text>Were you successful?</Card.Text>
                <Button className='mx-3' value='success' onClick={handleClickReport}>Yes</Button>
                <Button value='redo' onClick={handleClickReport}>No</Button>
                </Card.Body>
            </Card>
        )   
    } else content = <SpinnerLoading />

    return(
        <div>
            {content}
        </div>
    )
}

export default ReportingButtons;