import { Card } from "react-bootstrap";
import SpinnerLoading from "./SpinnerLoading";
import { useGetAttemptsQuery } from "../app/services/userAPI";

function ChallengeToday(){
    
    const {data: attempts, isSuccess} = useGetAttemptsQuery()
    let content   
    
    // console.log('attempts', attempts)
    
    if(isSuccess){
        const attempt = attempts.find(a => Date.parse(a.start_time) < Date.now() & Date.now() < Date.parse(a.end_time))
        const length = attempt.challenge.length

        const wait = (Date.parse(attempt.end_time)-Date.now())/(60.0*60*1000)
        
        let waitText 
        if(Math.floor(wait)==1) waitText = "1 hour"
        else if (Math.floor(wait)==0) waitText = "<1 hour"
        else waitText = `${Math.floor(wait)} hours`


        content = (
            <Card className='challengeCard' style={{}}>
                <Card.Title className="cardTitle">Today's challenge {`${attempt.challenge.id}`}</Card.Title>
                <Card.Text>{`Read for ${length} ${length == 1 ? "minute" : "minutes"}`}</Card.Text>
                <Card.Text>{attempt.success != null ? attempt.success ? 'Completed!' : "Attempted" : `${waitText} remaining`}</Card.Text>
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