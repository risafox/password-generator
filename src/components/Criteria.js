import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Row, Col } from 'react-bootstrap'
const Criteria = ({ description, id }) => {
    return (
        <div>
            <Form.Group controlId={id} as={Row}>
                <Col>
                    <Form.Check type="checkbox" label={description}></Form.Check>
                </Col>
                <Col xs={4}>
                    <Form.Control size="sm" type="text" placeholder="Specify character"></Form.Control>
                </Col>
            </Form.Group>

            {/* <input type="checkbox" id={description}></input>
            <label for={description}>{description}</label>
            <input type="text" id={description} placeholder="Specific characters wanted"></input> */}
        </div>
    )
}

export default Criteria
