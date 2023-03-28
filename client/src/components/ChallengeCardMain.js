import Card from 'react-bootstrap/Card';
import IntentionCardMain from './IntentionCardMain';
import Timer from './Timer'
import TipsPage from './TipsPage'
import { useGetAttemptsQuery } from '../app/services/userAPI';
import ChallengeToday from './ChallengeToday';
import ChallengeFuture from './ChallengeFuture';
import { Button, Container } from 'react-bootstrap';
import { updateFlow } from '../features/flowSlice';
import { useDispatch } from 'react-redux';

function ChallengeCardMain(){

    const {data: attempts, isSuccess} = useGetAttemptsQuery()
    const dispatch = useDispatch()

    let content

    if(isSuccess){
        const currentAttempt = attempts.find(a=>a.current)
        const startTime = Date.parse(currentAttempt.start_time)
        const disabled = Date.now() < startTime
        console.log("disabled", disabled)

        function handleClick(){
            dispatch(updateFlow('startTimer'))
        }


        content = (
            <>
                <ChallengeToday />

                { disabled ? <div className="fleuron">❦</div>: null}
                <ChallengeFuture />
            <Button disabled={disabled} onClick={handleClick}>Attempt</Button>
            </>
        )
    }

    // <Card>
    //             <Card className='rounded justify-content-center' style={{borderWidth: '2px'}}>
    //                 <Card.Title className="justify-content-center">{startTime > Date.now() ? "Tomorrow's challenge" : "Today's challenge" }</Card.Title>
    //                 <Card.Text>{`Read for ${length} ${length == 1 ? "minute" : "minutes"}`}
    //                 </Card.Text>
    //             </Card>
    //         </Card>


    // console.log(startTime)

    return(
       <>
        {content}
       </>
    )
}

export default ChallengeCardMain;