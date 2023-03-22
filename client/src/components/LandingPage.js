import { useAutoLogInQuery } from "../app/services/userAPI";
import Home from "./Home";
import SignInComponent from "./SignInComponent";
import SpinnerLoading from "./SpinnerLoading";


function LandingPage(){

    const {data: user, isSuccess, isLoading} = useAutoLogInQuery()

    let content

    if(isLoading) content = <SpinnerLoading/>
    else if(isSuccess) content= <Home />
    else content = <>
            <h1>Welcome to HabitBuilder</h1>
            <h2>A journey to good reading habits informed by best practices</h2>
            <SignInComponent />
        </>

    return(
        <div>
            {content}
        </div>
    )
}
export default LandingPage;