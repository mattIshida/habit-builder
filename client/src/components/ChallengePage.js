import { useGetAttemptsQuery } from "../app/services/userAPI";
import ChallengeCardMain from "./ChallengeCardMain";
import ReportingButtons from "./ReportingButtons";
import Timer from "./Timer";
import { Button, ButtonGroup, Card, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateFlow, resetFlow } from "../features/flowSlice";
import { useHistory } from "react-router-dom";
import ChallengeToday from "./ChallengeToday";
import ChallengeFuture from "./ChallengeFuture";
import IntentionForm from "./IntentionForm";

function ChallengePage(){
    
    const flowState = useSelector(state => state.flow.value)
    const history = useHistory()
    const dispatch = useDispatch()

    function handleClick(e){
        dispatch(updateFlow(e.target.value))
    }

    let content
    switch(flowState){
        case '':
            content = (
                <>                
                    
                    <ChallengeCardMain/>
                    <div>
                        <ButtonGroup>
                        <Button value='startTimer' onClick={handleClick}>Test Attempt</Button>
                        </ButtonGroup>
                    </div>
                </>

            )
            break;
        case 'startTimer':
            content = (
                <Card>
                    <Timer />
                    <Button value='reportingCard' onClick={handleClick}>Simulate timer expiring</Button>
                </Card>
            )
            break;
        case 'reportingCard':
            content = (
                <Card>
                    <ReportingButtons />
                    <Card.Text>Were you successful?</Card.Text>
                    <Button value='reportSuccess' onClick={handleClick}>Yes!</Button>
                    <Button value='reportFail' onClick={handleClick}>No</Button>
                </Card>
            )
            break
        case 'reportSuccess':
            content = (
                <Card>
                    <Card.Text>Congratulations!</Card.Text>
                    <ChallengeFuture />
                    <Card.Text>Tomorrow's challenge: read for x minutes</Card.Text>
                    <Button value='postIntention' onClick={handleClick}>Post an intention</Button>
                    <Button value='shareTip' onClick={handleClick}>Share a tip</Button>
                    <Button value='' onClick={handleClick}>Done</Button>
                </Card>
            )
            break
        case 'reportFail':
            content = (
                <Card>
                    <Card.Text>Don't worry about! Set an intention for tomorrow's challenge or view tips for this challenge</Card.Text>
                    <Button value='postIntention' onClick={handleClick}>Post an intention</Button>
                    <Button value='viewTips' onClick={handleClick}>View tips for this challenge</Button>
                </Card>
            )
            break;
        case 'postIntention':
            content = (
                <Container className="postIntention">
                    <h2>Post an Intention</h2>
                    <IntentionForm className="intentionForm"/>
                    <Button value='submittedIntention' onClick={handleClick}>Done</Button>
                    <Button value='' onClick={handleClick}>Cancel</Button>
                </Container>
            )
            break;
        case 'shareTip':
            content = (
                <Card>
                    A form for sharing a tip
                    <Button value='sharedTip' onClick={handleClick}>Done</Button>
                    <Button value='' onClick={handleClick}>Cancel</Button>
                </Card>
            )
            break;
        case 'submittedIntention':
            content = (
                <Card>
                    You posted an intention
                    <Button onClick={()=> history.push("/feed")}>My feed</Button>
                </Card>
            )
            break;
        case 'sharedTip' :
            content = (
                <Card>
                    You shared a tip
                </Card>
            )
    }

    return(
        <div>
            {content}
        </div>
    )
    
    
    
    
    
    
    
    
    
    //if timer is expired show reporting buttons instead of timer
    //if success clicked show congratulations

    // const timerExpired = useSelector(state => state.timer.expired)
    // const timerStarted = useSelector(state=>state.timer.started)
    // const {data:attempts, isSuccess} = useGetAttemptsQuery()

    // let content, attemptActive = false

    // if(isSuccess){
    //     const currentAttempt = attempts.find(a=>a.current)
    //     attemptActive = currentAttempt?.active
    // }

    // if(attemptActive) content=<Timer/>
    // else if(timerExpired & timerStarted) content = <ReportingButtons />
    // else content = <Timer />

    // return(
    //     <div>
    //         <ChallengeCardMain />
    //         {content}
    //     </div>
    // )
}

export default ChallengePage;