import { useGetAttemptDetailQuery } from "../app/services/userAPI";
import { Card } from 'react-bootstrap'
import { formatDate } from "../functions/formatDate";

function TipListFlow(){

    const {data, isSuccess} = useGetAttemptDetailQuery()

    let content, header
    if(isSuccess){
        const challenge = data.challenge
        const tips = data.helper_tips
        console.log('dataTipFlow', data)
        console.log('tips', tips)
        content = tips.slice().sort((a,b) => b.updated_at.localeCompare(a.updated_at)).map(tip => {
            return (
                <Card className= 'my-3'>
                    <Card.Header>
                        {`Posted by ${tip.user.username} ${formatDate(tip.updated_at)}`}
                    </Card.Header>
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