import { useAutoLogInQuery } from "../app/services/userAPI";
import AttemptList from "./AttemptList";
import IntentionList from "./IntentionList";
import TipList from "./TipList";
import FollowsList from "./FollowsList";
import FollowerList from "./FollowerList";
import Feed from "./Feed";

function UserProfile(){

    const {data: user, isSuccess, isLoading, isError} = useAutoLogInQuery()

    let content

    if(isSuccess){
        content = (
            <div>
                {/* <h2>{user.username}</h2>
                <AttemptList items={user.attempts}/>
                <IntentionList items={user.intentions}/>
                <TipList items={user.tips}/>
                <FollowsList items={user.followed_users} /> 
                <FollowerList items={user.followers} />  */}
            </div>
        )
    }

    return(
        <div>
            {content}
        </div>
    )
}

export default UserProfile;