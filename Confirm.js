import React from 'react'
import { Link } from 'react-router-dom'
function Confirm() {
  return (
    <div className='Home'>
        <p>Thank You</p>
        <p>Your transaction is confirmed</p>
        <Link to='/logoutpage'>Logout</Link>
    </div>
  )
}

export default Confirm