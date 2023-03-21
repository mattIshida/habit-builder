import Card from 'react-bootstrap/Card'

function AttemptList( { items }){

    let itemCards

    if(items.length === 0) itemCards = null

    itemCards = items?.slice().sort((a,b)=>b.start_time - a.start_time).map(item => {
        return(
            <Card key={item.id}>
                <Card.Text>
                    {item.start_time}
                    {`Success:${item.success}`}
                </Card.Text>
            </Card>
        )
    })

    return(
        <div>
            <h3>Attempts</h3>
            {itemCards}
        </div>
    )
}

export default AttemptList;