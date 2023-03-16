import Alert from 'react-bootstrap/Alert'

function ErrorsAlert({ errors }){

    const errorItems = errors?.map((e, i) => <li>{e}</li>)

    return(
        <Alert variant='danger'>
            <ul>{errorItems}</ul>
        </Alert>
    )
}

export default ErrorsAlert;