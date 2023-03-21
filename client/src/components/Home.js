import { useAutoLogInQuery, useGetAttemptsQuery } from "../app/services/userAPI";
import { useHistory } from 'react-router-dom'
import ChallengeCardMain from "./ChallengeCardMain";
import Timer from "./Timer"
import { current } from "@reduxjs/toolkit";

function Home(){
    const history = useHistory()
    const {
        data,
        isLoading,
        isSuccess,
        isError,
        error
      } = useAutoLogInQuery()

    const {
        data: attemptData,
        isLoading: attemptIsLoading,
        isSuccess: attemptIsSuccess,
        isError: attemptIsError,
        error: attemptError
    } = useGetAttemptsQuery()
    
    console.log("attemptData", attemptData)

    let content
    // const currentAttempt = attemptData?.find((a)=>a.current)


    if (isLoading) {
        content = ""
    } else if (isSuccess & attemptIsSuccess) {
        const currentAttempt = attemptData.find((a)=>a.current)
        console.log(currentAttempt)
        content = (<div>
            <h2>{`Welcome, ${data.username}`}</h2>
            <ChallengeCardMain currentAttempt={currentAttempt}/>
        </div>)
        
        //posts.map(post => <PostExcerpt key={post.id} post={post} />)
    } else if (isError) {
        content = <div>{error.data.errors}</div>
        history.push('/signup')
    }



    return(
        <div>
            {content}
        </div>
    )
}

export default Home;