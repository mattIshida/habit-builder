import { useAutoLogInQuery, useGetReaderProfileQuery } from "../app/services/userAPI";
import AttemptList from "./AttemptList";
import IntentionList from "./IntentionList";
import TipList from "./TipList";
import FollowsList from "./FollowsList";
import FollowerList from "./FollowerList";
import Feed from "./Feed";
import { Tabs, Tab, Container, Card} from 'react-bootstrap'
import UserCardProfile from "./UserCardProfile";

function UserProfile(){

    const {data: user, isSuccess, isLoading, isError} = useAutoLogInQuery()

    let content

    console.log('user', user)
    if(isSuccess){
        content = (
            <Container className='mt-3'>
                <UserCardProfile />
                <Tabs
                    defaultActiveKey="intentions"
                    className="my-3"
                >
                    <Tab eventKey="intentions" title="Intentions">
                        <IntentionList items={user.intentions}/>
                    </Tab>
                    <Tab eventKey="tips" title="Tips">
                        <TipList items={user.tips}/>
                    </Tab>
                    <Tab eventKey="challenges" title="Challenges">
                        <AttemptList items={user.attempts}/>
                    </Tab>
                    <Tab eventKey="follows" title="Following">
                        <FollowsList items={user.followed_users} /> 
                    </Tab>
                    <Tab eventKey="followers" title="Followers" >
                        <FollowerList items={user.followers} /> 
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

export default UserProfile;