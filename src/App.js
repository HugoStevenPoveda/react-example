
import React from 'react'
import {
   BrowserRouter as Router,
   Route,
   Switch
} from 'react-router-dom'
import './Styles/App1.css';
import Nav from './Components/Nav'
import Contacto from './Components/Pages/Contacto'
import Soluciones from './Components/Pages/Soluciones'




const App = ()=> (
  
    <>  
      <Router>
            <Nav/>
            <Switch>
                <Route path ="/contacto" component={Contacto}    /> 
                <Route path ="/soluciones" component={Soluciones}   /> 
                <Route path ="/"> <Home /> </Route>
            </Switch>
      </Router>

    


    
      {/*  <Containers title="Hola mundo " text="feliz practicando react" parrafo="probando la conter" />
       <Enlace />
       */}

    </>
   )
   
   function Home(){
         return <h2>Home</h2>
        }
   
  
   
   
   
  

export default App;
