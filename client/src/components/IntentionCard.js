import Card from 'react-bootstrap/Card'

function IntentionCard({ item }){
    return(
        <Card>
            <Card.Title>
                {`${item.reader.username} posted an intention`}
            </Card.Title>
            <Card.Text>
                {`${item.content.what} `}
                {`${item.content.where} `}
                {`${item.content.when} `}
            </Card.Text>
        </Card>
    )   
}

export default IntentionCard;