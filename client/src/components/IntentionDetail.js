import { Card } from "react-bootstrap";
import { useGetAttemptDetailQuery } from "../app/services/userAPI";

function IntentionDetail(){

    const {data, isSuccess} = useGetAttemptDetailQuery()

    let content
    if(isSuccess){
        const intention = data.intentions[0]
        content = (
            <Card className= 'my-3'>
                <Card.Body>
                    {`I will read ${intention.what} ${intention.where} ${intention.when}`}
                </Card.Body>
            </Card>
        )
    }

    return <>
        {content}
    </>
}

export default IntentionDetail;