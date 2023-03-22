import Card from 'react-bootstrap/Card'

function IntentionCard({ item }){
    return(
        <Card>
            <Card.Title>
                {`${item.reader.username} attempt a challenge`}
            </Card.Title>
            <Card.Text>
                
            </Card.Text>
        </Card>
    )   
}

export default IntentionCard;