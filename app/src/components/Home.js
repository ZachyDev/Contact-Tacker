import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Home() {
  const navigate = useNavigate();
  return (
    <div>
        <h1>Home</h1>
        <Button variant='danger' onClick={() => navigate('order-summary')}>Place order</Button><br /><br />
      
        {/* subscription */}
        <Button variant='success' onClick={() => navigate('newsletter-subcription')}>Subscribe</Button>
    </div>
  )
}

export default Home