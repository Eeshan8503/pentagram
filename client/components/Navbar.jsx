import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className='nav'>
        <Link href='./#home'>
        <p>Home</p>
        </Link>
        <Link href='./#events'><p>Events</p></Link>
        <Link href='./#about'>
        <p>Team</p>

        </Link>
        <Link href='./#contact'>

        <p>Contact us</p>
        </Link>
    </div>
  )
}

export default Navbar