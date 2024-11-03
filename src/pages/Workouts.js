// Workouts.js
import { useState, useEffect, useContext, useCallback } from 'react';
import { Button, Row, Col, Container } from 'react-bootstrap';
import UserContext from '../context/UserContext';
import WorkoutCard from '../components/WorkoutCard';
import AddWorkoutModal from '../components/AddWorkoutModal';
import UserView from '../components/UserView';

export default function Workouts() {
  const { user } = useContext(UserContext);
  const [workouts, setWorkouts] = useState([]);
  const [showModal, setShowModal, setWorkoutsData] = useState(false);

  const fetchData = useCallback(() => {
    const fetchURL = user.isAdmin
      ? `${process.env.REACT_APP_API_BASE_URL}/workouts/all`
      : `${process.env.REACT_APP_API_BASE_URL}/workouts/active`;

    fetch(fetchURL, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
      .then(res => res.json())
      .then(data => {
        setWorkoutsData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [user.isAdmin]);


  useEffect(() => {
    if (user.token) {
      fetch(`${process.env.REACT_APP_API_BASE_URL}/workouts/getMyWorkouts`, {
        headers: { Authorization: `Bearer ${user.token}` }
      })
        .then(response => response.json())
        .then(data => setWorkouts(data));
    }
  }, [user.token]);

  return (
    <Container>
      <h1>My Workouts</h1>
      <Button onClick={() => setShowModal(true)} id="addWorkout">Add Workout</Button>
      <AddWorkoutModal show={showModal} onHide={() => setShowModal(false)} refreshWorkouts={() => setWorkouts} />
      <Row>
        {workouts.map(workout => (
          <Col key={workout._id} md={4}>
            <WorkoutCard workout={workout} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
