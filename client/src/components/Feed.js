import { useGetFeedQuery } from "../app/services/userAPI";
import FeedCard from "./FeedCard"

function Feed(){
    
    const {data: feed, isSuccess, isLoading} = useGetFeedQuery()
    console.log('feed', feed)

    let content

    if(isSuccess){

        const feedCards = feed.map(item => <FeedCard key={`${item.type}-${item.content.id}`} item={item} />)
        content = feedCards
    }
    
    return(
        <div>
            {content}
        </div>
    )
}

export default Feed; 