import { Card, ListGroup, ListGroupItem, Container} from 'react-bootstrap'
import {FaCheck, FaRedo } from 'react-icons/fa'

function AttemptList( { items }){

    let itemCards

    if(items.length === 0) itemCards = null

    function formatTime(str){
        const datetime = new Date(Date.parse(str))
        return datetime.toLocaleTimeString()
    }

    function formatDate(str){
        const date = new Date(Date.parse(str))
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString(options)
    }

    itemCards = items?.slice().sort((a,b)=>b.updated_at.localeCompare(a.updated_at)).map(item => {
        return(
            // <ListGroupItem key={item.id}>
            //     {`At ${formatTime(item.updated_at)} READERNAME attempted a challenge`}
            //     {`Success:${item.success}`}
            // </ListGroupItem>
            <Card key={item.id} className='my-2'>
                <Card.Header className=''>
                    <Container className='d-flex justify-content-between'>
                    {item.success ? <FaCheck/> : item.success==false ? <FaRedo /> : ""}
                    <span style={{textAlign: 'right', fontSize: '10pt'}}>{formatDate(item.updated_at)}</span>
                    </Container>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        {`Attempted a challenge to read for XX minutes`}
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    })

    return(
        <div>
            <h3>Challenges</h3>
            <ListGroup>
                {itemCards}
            </ListGroup>
        </div>
    )
}

export default AttemptList;