import React from 'react'
import pt from 'prop-types'
import { Link , NavLink} from 'react-router-dom'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.md} bg-${props.md}`}>

    <div className="container-fluid">
          <a className="navbar-brand" to="/">TextUtils</a>
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <Link className="navbar-brand" to="/about">{props.con}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      
            </ul>
            <form className="d-flex" role="search">
              
              
        </form>
        
        <div className="form-check form-switch ">
  <input className="form-check-input " type="checkbox" onClick={props.change}   role="switch" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label  text-${props.md === 'light' ? 'dark' : 'light'}`}htmlFor="flexSwitchCheckDefault" >Enable dark mode</label>
</div>
      </div>
   
    </div>
  
  </nav>
  )
}

/*
Navbar.propTypes = {
  title: pt.string.isRequired,
  con: pt.string
}

Navbar.defaultProps = {
  title:"Greetings",
  con:"CONTACT-US"
}
  */