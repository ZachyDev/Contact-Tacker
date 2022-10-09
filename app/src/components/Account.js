import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link,Outlet } from 'react-router-dom';

function Account() {
  return (
    <div>
        <Card>Account</Card>
        <nav>
            <Link to='staff-login'>Staff Login</Link>
            <Link to='client-login'>Client Login</Link>
        </nav>
        <Outlet />
    </div>
  )
}

export default Account