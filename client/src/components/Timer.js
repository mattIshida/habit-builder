import { useEffect, useState } from 'react'
import { toggleActive, expireTimer } from '../features/timerSlice'
import { useSelector, useDispatch } from 'react-redux'
import Button from 'react-bootstrap/Button'

function Timer({seconds}){

    const [time, setTime] = useState(seconds)
    const dispatch = useDispatch()
    const active = useSelector(state=> state.timer.active)
    const expired = useSelector(state => state.timer.expired)

    function handleButtonClick(){
        dispatch(toggleActive())
    }

    useEffect(()=>{

        const interval = setInterval(()=> {
            if(active && !expired) setTime(prev=> prev-1)}, 
            1000)

        return ()=> {
            clearInterval(interval)
        }
    },[active, expired])

    const hmsString = new Date(time * 1000).toISOString().slice(11, 19);

    if(time==0) dispatch(expireTimer())

    return(
        <div>
            <h3>{hmsString}</h3>
            {expired ? <div>
                <h4>Were you successful?</h4>
                <Button>Yes</Button>
                <Button>No</Button>
            </div> :
            <Button onClick={handleButtonClick}>{active ? 'Pause' : 'Start'}</Button>
            // <Button onClick={handleButtonClick}>{active ? 'Pause' : 'Start'}</Button>
        }
        </div>
    )
}

export default Timer;