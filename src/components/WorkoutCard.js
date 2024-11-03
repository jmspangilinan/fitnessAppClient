// WorkoutCard.js
import { Card, Button } from 'react-bootstrap';
import { useState } from 'react';

export default function WorkoutCard({ workout, onComplete }) {
  const [isCompleted, setIsCompleted] = useState(workout.status === 'completed');

  const handleComplete = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/workouts/${workout._id}/complete`, {
        method: 'PATCH',
        headers: { 
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}` 
        },
      });

      if (response.ok) {
        setIsCompleted(true);
        if (onComplete) onComplete(workout._id);
      }
    } catch (error) {
      console.error("Error completing workout:", error);
    }
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>{workout.name}</Card.Title>
        <Card.Text>Duration: {workout.duration}</Card.Text>
        <Card.Text>Date Added: {new Date(workout.dateAdded).toLocaleDateString()}</Card.Text>
        <Button variant="success" onClick={handleComplete} disabled={isCompleted}>
          {isCompleted ? "Completed" : "Complete"}
        </Button>
      </Card.Body>
    </Card>
  );
}
