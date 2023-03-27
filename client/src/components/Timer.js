import { useEffect, useState } from 'react'
import { toggleActive, expireTimer, setTimer, decrementTimer, startTimer, resetTimer } from '../features/timerSlice'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Card } from 'react-bootstrap'
import { useGetAttemptsQuery, useReportAttemptMutation } from '../app/services/userAPI'
import { updateFlow } from '../features/flowSlice'

function Timer(){

    const dispatch = useDispatch()
    const {data: attempts, isSuccess} = useGetAttemptsQuery()
    const active = useSelector(state=> state.timer.active)
    const expired = useSelector(state => state.timer.expired)
    const seconds = useSelector(state=> state.timer.seconds)
    const started = useSelector(state => state.timer.started)

    let currentAttempt, timerDuration, disabled
    if(isSuccess){
        currentAttempt = attempts.find(a => a.current)
        timerDuration = currentAttempt.challenge.length*60
        disabled = currentAttempt.active == false
    }

    useEffect(()=>{
        dispatch(setTimer(timerDuration))
    },[])

    useEffect(()=>{
        const interval = setInterval(()=> {
            if(active && !expired) dispatch(decrementTimer())}, 
            1000)

        return ()=> {
            clearInterval(interval)
        }
    },[active, expired])

    if(seconds==0 && active) {
        dispatch(expireTimer())
        dispatch(updateFlow('reportingCard'))
    }

    function handleButtonClick(){
        dispatch(startTimer())
        dispatch(toggleActive())
    }


    const hmsString = new Date(seconds*1000).toISOString().slice(seconds < 3600 ? 14 : 11, 19);

    return(
        <Card className='m-3'>
            <div className='m-auto timerDigits'>{hmsString}</div>
            <>
                {/* <Button onClick={handleButtonClick} disabled={disabled}>{active ? 'Pause' : 'Start'}</Button> */}
                <Button onClick={handleButtonClick} >{active ? 'Pause' : 'Start'}</Button>
                <Button onClick={()=>{dispatch(resetTimer())}}>Reset</Button>
            </>
        </Card>
    )
}

export default Timer;