import Card from 'react-bootstrap/Card'

function IntentionList( { items }){

    let itemCards

    if(items.length === 0) itemCards = null

    itemCards = items?.slice().sort((a,b)=>b.start_time - a.start_time).map(item => {
        return(
            <Card key={item.id}>
                <Card.Text>
                    {`What:${item.what}`}
                    {`Where:${item.where}`}
                    {`When:${item.when}`}
                </Card.Text>
            </Card>
        )
    })

    return(
        <div>
            <h3>Intentions</h3>
            {itemCards}
        </div>
    )
}

export default IntentionList;