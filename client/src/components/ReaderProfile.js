import { useParams } from 'react-router-dom'
import { useGetReaderProfileQuery } from '../app/services/userAPI';
import AttemptList from './AttemptList'
import IntentionList from './IntentionList'
import TipList from './TipList'
import FollowsList from './FollowsList'
import FollowerList from './FollowerList'

function ReaderProfile(){

    const { id } = useParams()
    const {data: profile, isSuccess} = useGetReaderProfileQuery(id)

    let content

    if(isSuccess){
        content = (
            <div>
                <h2>{profile.username}</h2>
                <AttemptList items={profile.attempts}/>
                <IntentionList items={profile.intentions}/>
                <TipList items={profile.tips}/>
                <FollowsList items={profile.followed_users} /> 
                <FollowerList items={profile.followers} /> 
            </div>
        )
    }

    return(
        <div>
            {content}
        </div>
    )
}

export default ReaderProfile;