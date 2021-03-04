import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

    
    

const Enlace = ()=>(
<>
<Router>
  <div>
     <nav>
        <lu>
            <li>
            <Link  to ="/">Home</Link>
            </li>  
            <li> 
            <Link  to = "/about">About</Link>  
            </li>  
            <li>
              <Link to ="/users">Users</Link>
            </li>  
        </lu>
     </nav>
      
    <Switch>
       <Route path="/about">  <About /> </Route>
       <Route path="/users"> <Users /> </Route>
       <Route path="/"> <Home /> </Route>
    </Switch>
  </div>

</Router>
</>
 )

 function Home (){
      return <h2>Home</h2>
    }
 function About (){
      return <h2>About</h2>
    }
 function Users (){
     return <h2>Users</h2>
    }


 
export default Enlace








   


 
