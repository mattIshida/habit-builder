import { useEffect, useState } from 'react'
import { toggleActive, expireTimer } from '../features/timerSlice'
import { useSelector, useDispatch } from 'react-redux'
import Button from 'react-bootstrap/Button'
import { useReportAttemptMutation } from '../app/services/userAPI'

function Timer({ seconds, attempt_id, startable }){

    const [time, setTime] = useState(seconds)
    const dispatch = useDispatch()
    const active = useSelector(state=> state.timer.active)
    const expired = useSelector(state => state.timer.expired)
    const [reportAttempt, {
        data, 
        isLoading, 
        isSuccess, 
        isError, 
        error}] = useReportAttemptMutation()



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


    function handleClickReport(e){
        console.log("value", e.target.value)
        console.log("value", typeof e.target.value)
        console.log({success: e.target.value === 'success'})
        reportAttempt({id: attempt_id, success: e.target.value === 'success'})
    }

    const isDisabled = startable ? "" : "disabled"

    return(
        <div>
            <h3>{hmsString}</h3>
            {expired ? <div>
                <h4>Were you successful?</h4>
                <Button value='success' onClick={handleClickReport}>Yes</Button>
                <Button value='redo' onClick={handleClickReport}>No</Button>
            </div> :
            <>
                <Button onClick={handleButtonClick} disabled={!startable}>{active ? 'Pause' : 'Start'}</Button>
                <Button onClick={handleButtonClick} >{active ? 'Pause' : 'Start'}</Button>
            </>

            // <Button onClick={handleButtonClick}>{active ? 'Pause' : 'Start'}</Button>
        }
        </div>
    )
}

export default Timer;