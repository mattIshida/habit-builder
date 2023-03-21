import Card from 'react-bootstrap/Card'
import { useGetAttemptsQuery } from '../app/services/userAPI';

function IntentionCardMain({ }){

    const {data: attempts, isSuccess} = useGetAttemptsQuery()

    let content

    if(isSuccess){
        if(!attempts.find(a => a.current).intention) content= null
        const intention = attempts.find(a=> a.current).intention
        content = (
            <Card>
                <Card.Title>Intention</Card.Title>
                <Card.Text>
                    <ul>
                        <li>Where: {intention.where}</li>
                        <li>When: {intention.when}</li>
                        <li>What: {intention.what}</li>
                        <li>Note: {intention.note}</li>
                    </ul>
                </Card.Text>
            </Card>
        )
    }


    return(
        <div>
            {content}
        </div>
    )
}
export default IntentionCardMain;