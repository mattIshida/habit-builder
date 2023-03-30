import { Card, CardGroup, Container } from 'react-bootstrap'

function TipList( { items }){

    let itemCards

    if(items.length === 0) itemCards = <p>No tips have been submitted for this challenge...</p>

    function formatDate(str){
        const date = new Date(Date.parse(str))
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString(options)
    }

    itemCards = items?.slice().sort((a,b)=>b.updated_at.localeCompare(a.updated_at)).map(item => {
        return(
            <Card key={item.id} className='my-2'>
                <Card.Header className=''>
                    <Container className='text-right'>
                    <div style={{textAlign: 'right', fontSize: '10pt'}}>Posted {formatDate(item.updated_at)}</div>
                    </Container>
                </Card.Header>
                <Card.Body>
                <Card.Text>
                  {`${item.text}`}
                </Card.Text>
                </Card.Body>
            </Card>
        )
    })
    

    return(
        <div>
            <h3>Tips</h3>
            {itemCards}
        </div>
    )
}

export default TipList;