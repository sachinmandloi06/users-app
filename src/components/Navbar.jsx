import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (

  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container">
      <span className="navbar-brand h1">
        <Link to={"/"}>API-User</Link>
      </span>
      <Link to={"/About"} className="btn btn-outline-dark btn-sm rounded-0">About App</Link>
    </div>
  </nav>

  )
}

export default Navbar
