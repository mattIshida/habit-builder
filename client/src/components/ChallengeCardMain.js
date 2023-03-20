import Card from 'react-bootstrap/Card';
import Timer from './Timer'

function ChallengeCardMain({ currentAttempt }){
    const length = currentAttempt?.challenge?.length
    return(
        <Card>
            <Card.Title>Today's Challenge</Card.Title>
            <Card.Text>{`Read for ${length} ${length == 1 ? "minute" : "minutes"}`}
            </Card.Text>
            {/* <Timer seconds={length*60} attempt_id={currentAttempt.id} /> */}
            <Timer seconds={3} attempt_id={currentAttempt.id} startable={currentAttempt.active}/>
        </Card>
    )
}

export default ChallengeCardMain;