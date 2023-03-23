import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateFlow, resetFlow } from "../features/flowSlice";
import { useSelector } from "react-redux";

function Flow(){

    const flowState = useSelector(state => state.flow.value)
    const dispatch = useDispatch()

    function handleClick(e){
        dispatch(updateFlow(e.target.value))
    }

    let content
    switch(flowState){
        case '':
            content = (
                <Card>
                    <Card.Text>This is the base card</Card.Text>
                    <Button value='A' onClick={handleClick}>go to A</Button>
                    <Button value='B' onClick={handleClick}>go to B</Button>
                    <Button value='C' onClick={handleClick}>go to C</Button>
                </Card>
            )
            break
        case 'A':
            content = (
                <Card>
                    <Card.Text>This is the A card</Card.Text>
                    <Button value='B' onClick={handleClick}>go to B</Button>
                    <Button value='C' onClick={handleClick}>go to C</Button>
                </Card>
            )
            break
        case 'B':
            content = (
                <Card>
                    <Card.Text>This is the B card</Card.Text>
                    <Button value='A' onClick={handleClick}>go to A</Button>
                    <Button value='C' onClick={handleClick}>go to C</Button>
                </Card>
            )
            break
        case 'C':
            content = (
                <Card>
                    <Card.Text>This is the C card</Card.Text>
                    <Button value='B' onClick={handleClick}>go to B</Button>
                    <Button value='C' onClick={handleClick}>go to C</Button>
                </Card>
            )
            break
    }

    return(
        <div>
            {content}
        </div>
    )
}
export default Flow;