import Card from 'react-bootstrap/Card';
import IntentionCardMain from './IntentionCardMain';
import Timer from './Timer'
import TipsPage from './TipsPage'
import { useGetAttemptsQuery } from '../app/services/userAPI';

function ChallengeCardMain(){

    const {data: attempts, isSuccess} = useGetAttemptsQuery()
    
    let content

    if(isSuccess){
        const currentAttempt = attempts.find(a=>a.current)
        const startTime = new Date(Date.parse(currentAttempt.start_time))
        const length = currentAttempt.challenge.length

        content = (
            <Card>
                <Card className='rounded justify-content-center' style={{borderWidth: '2px'}}>
                    <Card.Title className="justify-content-center">{startTime > Date.now() ? "Tomorrow's challenge" : "Today's challenge" }</Card.Title>
                    <Card.Text>{`Read for ${length} ${length == 1 ? "minute" : "minutes"}`}
                    </Card.Text>
                </Card>
            </Card>
        )
    }

    // console.log(startTime)

    return(
       <>
        {content}
       </>
    )
}

export default ChallengeCardMain;