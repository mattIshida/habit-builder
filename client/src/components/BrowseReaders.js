import ReaderCard from "./ReaderCard"
import ReaderProfile from './ReaderProfile'
import { useGetReadersQuery } from "../app/services/userAPI";
import { Route, Switch } from 'react-router-dom'

function BrowseReaders(){
    
    const {data: readers, isSuccess} = useGetReadersQuery()
    
    let content

    if(isSuccess){

        const readerCards = readers.map(readerObj => <ReaderCard key={readerObj.id} reader={readerObj}/>)

        content = readerCards
    }

    return(
        <div>
            <Switch>
                <Route exact path='/readers'>
                    {content}
                </Route>
                <Route path='/readers/:id'>
                    <ReaderProfile />
                </Route>
            </Switch>
            {/* {content} */}
        </div>
    )
}

export default BrowseReaders;