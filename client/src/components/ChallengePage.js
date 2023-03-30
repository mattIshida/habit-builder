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
import TipForm from "./TipForm";
import IntentionDetail from "./IntentionDetail";
import TipListFlow from "./TipListFlow"

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
                    <div >
                        <Button className='mt-3' variant="outline-dark" value='startTimer' onClick={handleClick}>Test Attempt</Button>
                    </div>
                </>

            )
            break;
        case 'startTimer':
            content = (
                <Container>
                    <Timer />
                    <Button className='m-3' variant="outline-dark" value='reportingCard' onClick={handleClick}>Simulate timer expiring</Button>
                </Container>
            )
            break;
        case 'reportingCard':
            content = (
                <Container>
                    <ReportingButtons />
                    {/* <Card.Text>Were you successful?</Card.Text> */}
                    {/* <Button value='reportSuccess' onClick={handleClick}>Yes!</Button> */}
                    {/* <Button value='reportFail' onClick={handleClick}>No</Button> */}
                </Container>
            )
            break
        case 'reportSuccess':
            content = (
                <Card>
                    <Card.Body>
                    <Card.Text>Congratulations! +10 points</Card.Text>
                    <ChallengeFuture />
                    {/* <Card.Text>Tomorrow's challenge: read for x minutes</Card.Text> */}
                    {/* <Button value='postIntention' onClick={handleClick}>Post an intention</Button> */}
                    <Button value='shareTip' onClick={handleClick}>Share a tip</Button>
                    <Button value='' onClick={handleClick}>Done</Button>
                    </Card.Body>
                </Card>
            )
            break
        case 'reportFail':
            content = (
                <Card>
                    <Card.Body>
                    <Card.Text>Don't worry about! Set an intention for tomorrow's challenge or view tips for this challenge</Card.Text>
                    <Button value='postIntention' onClick={handleClick}>Post an intention</Button>
                    <Button value='viewTips' onClick={handleClick}>View tips for this challenge</Button>
                    </Card.Body>
                </Card>
            )
            break;
        case 'postIntention':
            content = (
                <Container className="postIntention">
                    <h2>Post an Intention</h2>
                    <IntentionForm className="intentionForm"/>
                    {/* <Button value='submittedIntention' onClick={handleClick}>Done</Button> */}
                    <Button className='mt-3' value='' onClick={handleClick}>Cancel</Button>
                </Container>
            )
            break;
        case 'shareTip':
            content = (
                <Card>
                    <TipForm />
                    <Button value='sharedTip' onClick={handleClick}>Done</Button>
                    <Button value='' onClick={handleClick}>Cancel</Button>
                </Card>
            )
            break;
        case 'submittedIntention':
            content = (
                <Container>
                    <Card>
                        <Card.Body>
                            <Card.Text>
                                Intention posted! +5 points
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Button value='' onClick={handleClick}>Done</Button>
                    {/* <Button onClick={()=> history.push("/feed")}>My feed</Button> */}
                </Container>
            )
            break;

        case 'submittedTip':
            content = (
                <Container>
                    <Card>
                        <Card.Body>
                            <Card.Text>
                                Tip submitted!
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Button value='' onClick={handleClick}>Done</Button>
                    {/* <Button onClick={()=> history.push("/feed")}>My feed</Button> */}
                </Container>
            )
            break;
            
        case 'sharedTip' :
            content = (
                <Card>
                    <Card.Body>
                        <Card.Text>
                            You shared a tip!
                        </Card.Text>
                    </Card.Body>
                    <Button value="" onClick={handleClick}>Done</Button>
                </Card>
            )
            break;
        case 'viewIntention':
            content = (
                <Container>
                    <IntentionDetail />
                    <Button value="" onClick={handleClick}>Done</Button>
                </Container>
            )
            break;
        case 'viewTips':
            content = (
                <Container>
                    <TipListFlow />
                    <Button value="" onClick={handleClick}>Done</Button>
                </Container>
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