import { useGetAttemptDetailQuery } from "../app/services/userAPI";
import { Card } from 'react-bootstrap'

function TipListFlow(){

    const {data, isSuccess} = useGetAttemptDetailQuery()

    let content, header
    if(isSuccess){
        const challenge = data.challenge
        const tips = data.challenge_tips
        console.log(challenge)
        console.log('tips', tips)
        content = tips.slice().sort((a,b) => b.updated_at.localeCompare(a.updated_at)).map(tip => {
            return (
                <Card className= 'my-3'>
                    <Card.Body>
                        <Card.Text>
                            {tip.text}
                        </Card.Text>
                    </Card.Body>
                </Card>
            )
        })
        header = <h3> {`Some tips that helped other users compelete this challenge`}</h3>
    }

    return (
        <>
            {header}
            {content}
        </>
    )
}
export default TipListFlow;