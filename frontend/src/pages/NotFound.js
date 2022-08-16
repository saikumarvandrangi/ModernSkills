import { Link } from 'react-router-dom'
import React from 'react'

function NotFound() {
  return (
    <>
    <h1>Page Not Found</h1>
    <Link to='/'>Go To Home Page</Link>
    </>
    
  )
}

export default NotFound