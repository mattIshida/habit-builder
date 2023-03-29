import ReaderCard from "./ReaderCard"
import ReaderProfile from './ReaderProfile'
import { useGetReadersQuery } from "../app/services/userAPI";
import { Route, Switch } from 'react-router-dom'
import { Container, Col, Row } from "react-bootstrap";

function BrowseReaders(){
    
    const {data: readers, isSuccess} = useGetReadersQuery()
    
    let content

    if(isSuccess){
        console.log('reader', readers)
        const readerCards = readers.map(readerObj => 
            <Col md={6} xl={4} className='my-3'>
            <ReaderCard key={readerObj.id} reader={readerObj}/>
            </Col>
        )

        content = (
            <Row className="justify-content-center">
                {readerCards}
            </Row>
            
        )
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