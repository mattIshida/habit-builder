import Card from 'react-bootstrap/Card'

function TipCard({ item }){
    return(
        <Card>
            <Card.Title>
                {`${item.reader.username} posted tip`}
            </Card.Title>
            <Card.Text>
                {`${item.content.text}`}
            </Card.Text>
        </Card>
    )   
}

export default TipCard;