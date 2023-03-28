import { Card, Button, Container } from 'react-bootstrap'
import { useRouteMatch, NavLink, useHistory } from 'react-router-dom'
import { useAutoLogInQuery, usePostFollowMutation } from '../app/services/userAPI'

function UserCardProfile(){

    // const {url} = useRouteMatch()
    const {data: user} = useAutoLogInQuery()
    // const [postFollow] = usePostFollowMutation()
    // console.log('reader', reader)
    const history = useHistory()

    function handleClickEdit(){
        // console.log('reader.id', reader.id)
        console.log('hello from edit')
        // postFollow({follower_id: user.id, followed_id: reader.id})
    }

    return(
        <Card className='readerCard'>
            <Card.Body>
            <Card.Title>{user.username}</Card.Title>
            <div className="fleuron">❦</div>
            <Card.Text>
                <div>Points: {user.points} </div>
                <div>Streak: {user.streak}</div>
            </Card.Text>
            <Button onClick={handleClickEdit}>Edit Profile</Button>
            <Container className='mt-1'><Button onClick={()=> {history.push('/readers')}}>Add friends</Button>
            </Container>
            </Card.Body>
        </Card>
    )
}

export default UserCardProfile;