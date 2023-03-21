import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useRouteMatch, NavLink } from 'react-router-dom'
import { useAutoLogInQuery, usePostFollowMutation } from '../app/services/userAPI'

function ReaderCard({ reader }){

    const {url} = useRouteMatch()
    const {data: user} = useAutoLogInQuery()
    const [postFollow] = usePostFollowMutation()

    function handleClickFollow(){
        console.log('reader.id', reader.id)
        postFollow({follower_id: user.id, followed_id: reader.id})
    }

    return(
        <Card>
            <Card.Title>{reader.username}</Card.Title>
            <Card.Text></Card.Text>
            <NavLink to={`${url}/${reader.id}`}>View Profile</NavLink>
            <Button onClick={handleClickFollow}>Follow</Button>
        </Card>
    )
}

export default ReaderCard;