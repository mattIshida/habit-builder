import { Card } from "react-bootstrap";
import SpinnerLoading from "./SpinnerLoading";
import { useGetAttemptsQuery } from "../app/services/userAPI";

function ChallengeFuture(){
    
    const {data: attempts, isSuccess} = useGetAttemptsQuery()
    let content   

    if(isSuccess){
        const attempt = attempts.find(a => Date.parse(a.start_time) < Date.now() & Date.now() < Date.parse(a.end_time))
        const length = attempt.challenge.length
        const wait = (Date.parse(attempt.start_time)-Date.now())/(60.0*60)
        
        let waitText 
        if(Math.floor(wait)==1) waitText = "1 hour"
        else if (Math.floor(wait)==0) waitText = "<1 hour"
        else waitText = `${Math.ceil(wait)} hours`

        content = (
            <Card>
                <Card.Title className="justify-content-center">Tomorrow's challenge</Card.Title>
                <Card.Text>{`Read for ${length} ${length == 1 ? "minute" : "minutes"}`}</Card.Text>
                <Card.Text>{`Available in ${waitText}`}</Card.Text>
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