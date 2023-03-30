import { Card, Container } from 'react-bootstrap'
import AttemptCard from './AttemptCard'
import IntentionCard from './IntentionCard'
import TipCard from './TipCard'
import { formatDate } from '../functions/formatDate'

function FeedCard({ item }){

    let content
    const options = {}
    if(item.type === 'attempt') {
        options.primaryText = `Read for ${item.length} minutes`
        options.verbText = `${item.content.success ? 'completed' : "attempted"} a challenge`
    }
    if(item.type === 'tip') {
        options.primaryText = `${item.content.text}`
        options.verbText = 'shared a tip!'
    }
    if(item.type === 'intention') {
        options.primaryText = `I intend to read ${item.content.what} ${item.content.where} ${item.content.when}`
        options.verbText = 'posted an intention...'
    }

    console.log(formatDate(item.content.updated_at))

    content = <Card className="my-3">
        <Card.Header>
            <Container className='d-flex justify-content-between'>
            {`${item.reader.username} ${options.verbText}`}
            
            <div style={{textAlign: "right", fontSize: '.8rem'}}>{formatDate(item.content.updated_at)}</div>
            </Container>
        </Card.Header>
        <Card.Body>
            {`${options.primaryText}`}
        </Card.Body>
    </Card>


    return(
        <div>{content}</div>
    )
}

export default FeedCard;