import { useParams } from 'react-router-dom'
import { useGetReaderProfileQuery } from '../app/services/userAPI';
import AttemptList from './AttemptList'
import IntentionList from './IntentionList'
import TipList from './TipList'
import FollowsList from './FollowsList'
import FollowerList from './FollowerList'
// import ReaderCardProfile from './ReaderCardProfile';
import { Container, Tab, Tabs, Card } from 'react-bootstrap';

function ReaderProfile(){

    const { id } = useParams()
    const {data: profile, isSuccess} = useGetReaderProfileQuery(id)

    let content

    if(isSuccess){
        console.log(profile)
        content = (
            <Container className='mt-3'>
                {/* <ReaderCardProfile reader={profile} /> */}

                {/* <Container className="my-3 col-md-5 col-sm-6 col-lg-4" style={{}}>
                    <Card className='challengeCard lg-6' style={{height: "10rem"}}>
                        <Card.Title className="cardTitle">Current challenge {`${profile.current_challenge.id}`}</Card.Title>
                        <Card.Text>{`Read for ${profile.current_challenge.length} ${profile.current_challenge.length == 1 ? "minute" : "minutes"}`}</Card.Text>
                    </Card>
                </Container> */}


                <Tabs
                    defaultActiveKey="intentions"
                    className="my-3"
                >
                    <Tab eventKey="intentions" title="Intentions">
                        <IntentionList items={profile.intentions}/>
                    </Tab>
                    <Tab eventKey="tips" title="Tips">
                        <TipList items={profile.tips}/>
                    </Tab>
                    <Tab eventKey="challenges" title="Challenges">
                        <AttemptList items={profile.attempts}/>
                    </Tab>
                    <Tab eventKey="follows" title="Following">
                        <FollowsList items={profile.followed_users} /> 
                    </Tab>
                    <Tab eventKey="followers" title="Followers" >
                        <FollowerList items={profile.followers} /> 
                    </Tab>
                </Tabs>
            </Container>
        )
    }

    return(
        <div>
            {content}
        </div>
    )
}

export default ReaderProfile;