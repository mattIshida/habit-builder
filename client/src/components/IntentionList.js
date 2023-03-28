import { Card, CardGroup, Container } from 'react-bootstrap'
import CardHeader from 'react-bootstrap/esm/CardHeader'
import { FaRedo, FaCheck, FaEllipsisH } from 'react-icons/fa'

function IntentionList( { items }){

    let itemCards

    if(items.length === 0) itemCards = null

    function formatDate(str){
        const date = new Date(Date.parse(str))
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString(options)
    }

    itemCards = items?.slice().sort((a,b)=>b.updated_at.localeCompare(a.updated_at)).map(item => {
        return(
            <Card key={item.id} className='my-2'>
                <CardHeader className=''>
                    <Container className='d-flex justify-content-between'>
                    {item.success ? <FaCheck/> : item.success==false ? <FaRedo /> : <FaEllipsisH />}
                    <span style={{textAlign: 'right', fontSize: '10pt'}}>Posted {formatDate(item.updated_at)}</span>
                    </Container>
                </CardHeader>
                <Card.Body>
                    <Card.Text>
                        {`Intends to read ${item.what} ${item.where} ${item.when}`}
                    </Card.Text>
                </Card.Body>
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