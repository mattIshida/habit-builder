import Card from 'react-bootstrap/Card'

function FollowerList( { items }){

    let itemCards

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

    return(
        <div>
            <h3>Followers</h3>
            {itemCards}
        </div>
    )
}

export default FollowerList;