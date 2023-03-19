import ToggleButton from 'react-bootstrap/ToggleButton'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { updateCart } from '../features/cartSlice';
import { useDispatch} from 'react-redux'

function Upgrade(){
    const [cart, setCart] = useState('');
    const history = useHistory()
    const dispatch = useDispatch()

    function handleSelect(e){
        if(cart===e.target.value) setCart('')
        else setCart(e.target.value)
    }

    function handleClickPurchase(){
        dispatch(updateCart(cart))
        history.push('/checkout')
    }

    return(
        <div>
            <h2>Premium Features</h2>
            <ul>
                <li>Unlimited retries</li>
                <li>Google Calendar integration</li>
                <li>Challenge friends head-to-head</li>
            </ul>
            <ToggleButton
                className="mb-2"
                id="toggle-check"
                type="checkbox"
                name="upgrade"
                variant="outline-primary"
                checked={cart==="monthly"}
                value="monthly"
                onChange={handleSelect}
            >Monthly $1.99
            </ToggleButton>
            <ToggleButton
                className="mb-2"
                id="toggle-check2"
                type="checkbox"
                name="upgrade"
                variant="outline-primary"
                checked={cart==="lifetime"}
                value="lifetime"
                onChange={handleSelect}
            >Lifetime $19.99</ToggleButton>            
            <div>
            <Button onClick={handleClickPurchase}>Purchase</Button>
            </div>
        </div>
    )
}

export default Upgrade; 