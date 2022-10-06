import React from 'react'
import { useNavigate } from 'react-router-dom';

function ConfirmSubscription() {
    const navigate = useNavigate();
  return (
    <div>
        <p>Subscription confirmed!</p>
        <button onClick={() => navigate(-1)}>Go back</button>

    </div>

  )
}

export default ConfirmSubscription