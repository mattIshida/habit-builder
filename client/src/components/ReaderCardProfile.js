import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useRouteMatch, NavLink } from 'react-router-dom'
import { useAutoLogInQuery, usePostFollowMutation } from '../app/services/userAPI'

function ReaderCardProfile({ reader }){

    const {url} = useRouteMatch()
    const {data: user} = useAutoLogInQuery()
    const [postFollow] = usePostFollowMutation()
    console.log('reader', reader)

    function handleClickFollow(){
        console.log('reader.id', reader.id)
        postFollow({follower_id: user.id, followed_id: reader.id})
    }

    return(
        <Card className='readerCard'>
            <Card.Body>
            <Card.Title>{reader.username}</Card.Title>
            <div className="fleuron">❦</div>
            <Card.Text>
                <div>Points: {reader.points} </div>
                <div>Streak: {reader.streak}</div>
            </Card.Text>
            <Button onClick={handleClickFollow}>Follow</Button>
            </Card.Body>
        </Card>
    )
}

export default ReaderCardProfile;