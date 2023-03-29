import { Button, Card } from "react-bootstrap";
import SpinnerLoading from "./SpinnerLoading";
import { useGetAttemptsQuery } from "../app/services/userAPI";
import { updateFlow } from "../features/flowSlice";
import { useDispatch } from "react-redux";

function ChallengeFuture(){
    
    const {data: attempts, isSuccess} = useGetAttemptsQuery()
    const dispatch = useDispatch()
    
    let content   

    if(isSuccess){
        const attempt = attempts.find(a => a.current && Date.now() < Date.parse(a.start_time))
        if(attempt===undefined) return <></>

        const length = attempt.challenge.length
        const wait = (Date.parse(attempt.start_time)-Date.now())/(60.0*60*1000)
        
        let waitText 
        if(Math.floor(wait)==1) waitText = "1 hour"
        else if (Math.floor(wait)==0) waitText = "<1 hour"
        else waitText = `${Math.ceil(wait)} hours`

        const hasIntention = attempt.intentions.length > 0


        function handleClick(state){
            dispatch(updateFlow(state))            
        }

        content = (
            <Card style={{ backgroundColor: '#FFFFFF' }} className='my-2'>
                <Card.Body className='p-3 text-center'>
                    <Card.Title className="text-center pb-2">Tomorrow's challenge {`${attempt.challenge.id}`}</Card.Title>
                    <Card.Text className="font-weight-bold">{`Read for ${length} ${length == 1 ? "minute" : "minutes"}`}</Card.Text>
                    <Card.Text>{`Available in ${waitText}`}</Card.Text>
                    {hasIntention ? <Button style={{ backgroundColor: '#444444' }}  className='card-style-1' onClick={()=>dispatch(updateFlow('viewIntention'))}>See intention</Button> : <Button onClick={()=>handleClick('postIntention')}>Post an Intention</Button>}
                </Card.Body>
            </Card>
        )
    }
    
    return(
        <>
            {content}
        </>
    )
}

export default ChallengeFuture;