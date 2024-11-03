// UserView.js

import { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import WorkoutCard from './WorkoutCard';

// import Workouts from './Workouts';

export default function UserView({ workoutsData }) {
  const [workout, setWorkouts] = useState([]);

  useEffect(() => {
    setWorkouts(workoutsData || []);
  }, [workoutsData]);

  return (
    <>
      <h2 className='mb-3 mt-3 text-center'>My Workouts</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {workout.map(workout => (
          <Col key={workout._id} className="mb-4">
          
            <WorkoutCard workoutProp={workout} />
          </Col>
        ))}
      </Row>
    </>
  );
}
