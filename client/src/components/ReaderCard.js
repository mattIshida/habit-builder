import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useRouteMatch, NavLink } from 'react-router-dom'
import { useAutoLogInQuery, usePostFollowMutation, useDeleteFollowMutation } from '../app/services/userAPI'

function ReaderCard({ reader }){

    const {url} = useRouteMatch()
    const {data: user, isSuccess: isSuccessUser} = useAutoLogInQuery()
    const [postFollow, {isSuccess, isError}] = usePostFollowMutation()
    const [deleteFollow, {isSuccess: isSuccessDelete}] = useDeleteFollowMutation()

    let followed = false
    if(isSuccessUser){
        followed = !! user.follows.map(f => f.followed_id).find(id => id == reader.id)
    }

    if(isSuccessDelete){
        followed = !! user.follows.map(f => f.followed_id).find(id => id == reader.id)
    }



    function handleClickFollow(){
        postFollow({follower_id: user.id, followed_id: reader.id})
    }

    function handleClickUnfollow(){
        const deleteId = user.follows.find(f => f.followed_id===reader.id).id
        deleteFollow(deleteId)
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
            <NavLink to={`${url}/${reader.id}`}>View Profile</NavLink>
            </Card.Body>
            {followed ? <Button onClick={handleClickUnfollow} style={{backgroundColor: 'green'}}>Following</Button> : <Button onClick={handleClickFollow}>Follow</Button> }
        </Card>
    )
}

export default ReaderCard;