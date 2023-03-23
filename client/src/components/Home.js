import { useAutoLogInQuery, useGetAttemptsQuery } from "../app/services/userAPI";
import { useHistory } from 'react-router-dom'
import ChallengeCardMain from "./ChallengeCardMain";
import Timer from "./Timer"
import { current } from "@reduxjs/toolkit";
import { Container } from "react-bootstrap";
import ChallengePage from "./ChallengePage";

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
    console.log('isSuccess', isSuccess)
    let content
    // const currentAttempt = attemptData?.find((a)=>a.current)


    if (isLoading) {
        content = ""
    } else if (isSuccess & attemptIsSuccess) {
        const currentAttempt = attemptData.find((a)=>a.current)
        console.log(currentAttempt)
        content = (<div>
            <h2>{`Welcome, ${data.username}`}</h2>
            <Container className='justify-content-center col-lg-6 col-md-7 col-sm-10 p-3'>
                {/* <ChallengeCardMain currentAttempt={currentAttempt}/> */}
                <ChallengePage />
            </Container>
        </div>)
        
        //posts.map(post => <PostExcerpt key={post.id} post={post} />)
    } 
    // else if (isError) {
    //     content = <div>{error.data.errors}</div>
    //     history.push('/signup')
    // }



    return(
        <div>
            {content}
        </div>
    )
}

export default Home;