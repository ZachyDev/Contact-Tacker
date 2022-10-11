import React from 'react'
import Button from 'react-bootstrap/Button';
import { useSearchParams } from 'react-router-dom';

function Users() {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get('filter') === 'active';

  return (
    <div>
        <h2>User1</h2>
        <h2>User2</h2>
        <h2>User3</h2>
        <div>
          <Button variant='success' onClick={() => setSearchParams({ filter: 'active' })}>Active Users</Button>
          <Button variant='danger' onClick={() => setSearchParams({})}>Reset Filter</Button>
        </div>
        {
          showActiveUsers ? (<h5>Showing active users</h5>) : (
            <h5>Showing all users</h5>
          )
        }
    </div>
  )
}

export default Users