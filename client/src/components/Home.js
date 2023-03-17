import { useAutoLogInQuery } from "../app/services/userAPI";
import { useHistory } from 'react-router-dom'

function Home(){
    const history = useHistory()
    const {
        data,
        isLoading,
        isSuccess,
        isError,
        error
      } = useAutoLogInQuery()

    let content

    if (isLoading) {
        console.log('isLoading')
        content = ""
    } else if (isSuccess) {
        console.log('isSuccess')

        content = <h2>{`Welcome, ${data.username}`}</h2>//posts.map(post => <PostExcerpt key={post.id} post={post} />)
    } else if (isError) {
        console.log('isError')
        content = <div>{error.data.errors}</div>
        history.push('/signup')
    }

    console.log('hello from home')
    console.log('content', content)
    console.log('error', error)

    return(
        <div>
            {content}
        </div>
    )
}

export default Home;