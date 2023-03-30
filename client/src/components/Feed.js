import { Container } from "react-bootstrap";
import { useGetFeedQuery } from "../app/services/userAPI";
import FeedCard from "./FeedCard"

function Feed(){
    
    const {data: feed, isSuccess, isLoading} = useGetFeedQuery()
    console.log('feed', feed)

    let content

    if(isSuccess){
        
        const feedCards = feed.filter(x=> !(x.type=='attempt' && x.content.success===null)).sort((a,b)=>b.content.updated_at.localeCompare(a.content.updated_at)).map(item => <FeedCard key={`${item.type}-${item.content.id}`} item={item} />)
        content = feedCards
        if (content.length ===0) content = <p className='mt-3'>Nothing here yet. Attempt a challenge to get started.</p>
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