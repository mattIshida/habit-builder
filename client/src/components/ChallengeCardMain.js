import Card from 'react-bootstrap/Card';
import IntentionCardMain from './IntentionCardMain';
import Timer from './Timer'
import TipsPage from './TipsPage'

function ChallengeCardMain({ currentAttempt }){
    const length = currentAttempt?.challenge?.length
    return(
        <Card className='rounded justify-content-center' style={{borderWidth: '2px'}}>
            <Card.Title className="justify-content-center">Today's Challenge</Card.Title>
            <Card.Text>{`Read for ${length} ${length == 1 ? "minute" : "minutes"}`}
            <IntentionCardMain />
            <TipsPage />
            </Card.Text>
            {/* <Timer seconds={length*60} attempt_id={currentAttempt.id} /> */}
            <Timer seconds={3} attempt_id={currentAttempt.id} startable={currentAttempt.active}/>
        </Card>
    )
}

export default ChallengeCardMain;