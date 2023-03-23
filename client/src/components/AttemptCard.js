import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap';
import { usePostBookmarkMutation } from '../app/services/userAPI';

function AttemptCard({ item }){

    const [postBookmark, {isSuccess}] = usePostBookmarkMutation()

    function handleClick(){
        postBookmark({bookmarkable_type: "attempt", bookmarkable_id: item.content.id})
    }

    return(
        <Card>
            <Card.Title>
                {`${item.reader.username} attempted a challenge`}
            </Card.Title>
            <Card.Text>
                {item.content.success ? `Completed: ${item.reader.username} read for ${item.length} minutes`: ''}
            </Card.Text>
            <Button onClick={handleClick}>Bookmark</Button>
        </Card>
    )   
}

export default AttemptCard;