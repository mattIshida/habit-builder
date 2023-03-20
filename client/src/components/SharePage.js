import Button from 'react-bootstrap/Button'
import IntentionForm from './IntentionForm';

function SharePage(){
    return(
        <div>
            <Button>Post an Intention</Button>
            <Button>Share a tip</Button>
            <IntentionForm />
        </div>
    )
}
export default SharePage;