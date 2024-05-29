import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <React.Fragment>
        <div>Home</div>
        <div>
            <Link to={'/about'}>About</Link>
            <Link to={'/contact'}>Contact</Link>
        </div>
    </React.Fragment>
  )
}

export default Home