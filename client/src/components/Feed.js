import { Container } from "react-bootstrap";
import { useGetFeedQuery } from "../app/services/userAPI";
import FeedCard from "./FeedCard"

function Feed(){
    
    const {data: feed, isSuccess, isLoading} = useGetFeedQuery()
    console.log('feed', feed)

    let content

    if(isSuccess){
        
        const feedCards = feed.slice().sort((a,b)=>b.content.updated_at.localeCompare(a.content.updated_at)).map(item => <FeedCard key={`${item.type}-${item.content.id}`} item={item} />)
        content = feedCards
    }
    
    return(
        <div>
            <Container className="col-lg-6">
                {content}
            </Container>
        </div>
    )
}

export default Feed; 