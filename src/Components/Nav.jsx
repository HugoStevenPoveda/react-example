import React from "react"
import {Link} from "react-router-dom"
import '../Styles/App1.css'

const Nav = ()=>(

<>

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">Softbanana</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarColor02">
    <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
            </li>

            <li className="nav-item">
                <Link to="/soluciones" className="nav-link" >Soluciones</Link>
            </li>
                
            <li className="nav-item">
                <Link to="/contacto" className="nav-link"> Contacto</Link>
            </li>
    </ul>
  </div>
</nav>
             
</>

)
export default Nav
      


                
      



