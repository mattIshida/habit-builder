import { Card } from "react-bootstrap";
import SpinnerLoading from "./SpinnerLoading";
import { useGetAttemptsQuery } from "../app/services/userAPI";

function ChallengeToday(){
    
    const {data: attempts, isSuccess} = useGetAttemptsQuery()
    let content   
    console.log('attempts', attempts)
    if(isSuccess){
        const attemptToday = attempts.find(a => Date.parse(a.start_time) < Date.now() & Date.now() < Date.parse(a.end_time))
        const length = attemptToday.challenge.length

        content = (
            <Card>
                <Card.Title className="justify-content-center">Today's challenge {`${attemptToday.challenge.id}`}</Card.Title>
                <Card.Text>{`Read for ${length} ${length == 1 ? "minute" : "minutes"}`}</Card.Text>
                <Card.Text>{attemptToday.success != null ? "Attempted" : "Unattempted"}</Card.Text>
            </Card>
        )
    }
    
    return(
        <>
            {content}
        </>
    )
}

export default ChallengeToday;