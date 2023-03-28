import { ListGroup, ListGroupItem } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'

function FollowerList( { items }){

    let itemCards, listItems

    if(items.length === 0) itemCards = null

    itemCards = items?.slice().sort((a,b)=>b.start_time - a.start_time).map(item => {
        return(
            <Card key={item.id}>
                <Card.Text>
                    {item.username}
                </Card.Text>
            </Card>
        )
    })

    listItems = items?.slice().sort((a,b)=>b.updated_at - a.updated_at).map(item => {
        return(
            <ListGroupItem key={item.id} action href={`/readers/${item.id}`}>
                    {item.username}
            </ListGroupItem>
        )
    })

    return(
        <div>
            <h3>Followers</h3>
            {/* {itemCards} */}
            <ListGroup>
                {listItems}
            </ListGroup>
        </div>
    )
}

export default FollowerList;