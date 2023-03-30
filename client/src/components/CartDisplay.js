import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";

function CartDisplay({ amount }){
    
    const cart = useSelector(state => state.cart.cart[0])

    let content

    function capitalize(str){
        return str[0].toUpperCase()+ str.slice(1)
    }

    if(cart){
        content = <Card className="my-3">
            <Card.Body>
                <Card.Title>Cart</Card.Title>
                <Card.Text>{`${capitalize(cart)} subscription: $${amount/100}`}</Card.Text>
            </Card.Body>
        </Card>
    }
    
    return(
        <div>
            {content}
        </div>
    )
}
export default CartDisplay;