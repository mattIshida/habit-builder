import { useGetAttemptsQuery, useGetTipsQuery } from '../app/services/userAPI'

function TipsPage(){

    const {data, isSuccess} = useGetAttemptsQuery()
    const currentAttempt = data.find(a=>a.current)
    const {data: tips, isSuccessTips} = useGetTipsQuery(currentAttempt.challenge.id)

    if(isSuccess){
        // const {data: {tips}, isSuccessTips} = useGetTipsQuery(currentAttempt.challenge.id)
        console.log('tips', tips)
        console.log("currentAttempt", currentAttempt)
    }


    return(
        <div></div>
    )
}

export default TipsPage;