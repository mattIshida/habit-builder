import { useGetAttemptsQuery, useReportAttemptMutation } from "../app/services/userAPI";
import SpinnerLoading from "./SpinnerLoading";
import { Button } from "react-bootstrap";
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
            <div>
                <h4>Were you successful?</h4>
                <Button value='success' onClick={handleClickReport}>Yes</Button>
                <Button value='redo' onClick={handleClickReport}>No</Button>
            </div>
        )   
    } else content = <SpinnerLoading />

    return(
        <div>
            {content}
        </div>
    )
}

export default ReportingButtons;