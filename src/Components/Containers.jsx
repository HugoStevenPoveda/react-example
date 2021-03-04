import React from "react"
import '../Styles/App1.css'

const Containers = ({title,text,parrafo})=>(
   <>
   <div className="jumbotron">
  <h1 className="display-3">{title}</h1>
  <p className="lead">{text}</p>
  <hr className="my-4"></hr>
  <p>{parrafo}</p>
  <p className="lead">
  
    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
  </p>
</div>
   </>


)

export default Containers
