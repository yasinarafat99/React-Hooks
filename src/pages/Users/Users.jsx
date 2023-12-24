import React from 'react'
import { useLoaderData } from 'react-router-dom';
import User from './User';

function Users() {
    const users = useLoaderData()
    // console.log(users)
  return (
    <>
        <div className='grid grid-cols-3 max-w-7xl mx-auto my-0'>
            {
                users.map(user => <User key={user.id} user={user}/>)
            }
        </div>
    </>
  )
}

export default Users;