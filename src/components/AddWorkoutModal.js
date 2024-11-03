// AddWorkoutModal.js
import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

export default function AddWorkoutModal({ show, onHide, refreshWorkouts }) {
  const [name, setName] = useState('');
  const [duration, setDuration] = useState('');

  async function addWorkout(e) {
    e.preventDefault();
    await fetch(`${process.env.REACT_APP_API_BASE_URL}/workouts/addWorkout`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({ name, duration })
    });
    refreshWorkouts();
    onHide();
  }

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add Workout</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={addWorkout}>
          <Form.Group>
            <Form.Label>Workout Name</Form.Label>
            <Form.Control type="text" value={name} onChange={e => setName(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Duration</Form.Label>
            <Form.Control type="text" value={duration} onChange={e => setDuration(e.target.value)} />
          </Form.Group>
          <Button type="submit">Add Workout</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
