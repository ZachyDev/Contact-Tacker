import React from 'react'
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function Subscription() {
    const navigate = useNavigate();
  return (
    <>
        <Alert variant='success'>Subscription confirmed, you can go back.</Alert>
        <Button variant='primary' onClick={() => navigate(-1)}>Go back</Button>
    </>
  )
}

export default Subscription