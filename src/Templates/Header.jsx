import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav className='bg-dark '>
        <h1>Welcome To CJC</h1>
    <div>
        <Link className='btn btn-light' to={"/home"}>Home</Link>
        <Link className='btn btn-light' to={"/aboutus"}>About</Link>
        <Link className='btn btn-light' to={"/service"}>OurServices</Link>
        <Link className='btn btn-light' to={"/syllabus"}>Syllabus</Link>
        <Link className='btn btn-light' to={"/enquiry"}>Enquiry</Link>
        <Link className='btn btn-light' to={"/signin"}>Login</Link>
        
    </div>

    </nav>
  )
}

export default Header