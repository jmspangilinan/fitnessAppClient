// Home.js
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Home() {


    return (
        <Row>
            <Col className="mt-5 pt-5 text-center mx-auto">
                <h1>Welcome to our Fitness Application API</h1>
                <p>Discover a time tracking app for you. Time your self with ease!</p>
                <Link className="btn btn-primary" to={"/workouts"}>Browse to Products</Link>
                </Col>
        </Row>
    )
}