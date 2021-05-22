import React, { useState } from 'react'
import About from './Components/About'
import Skills from './Components/Skills';
import Contact from './Components/Contact'
import Projects from './Components/Projects'
import {Route, Switch} from 'react-router-dom'


export default function Main(props) {

    const [myInput , setMyInput]= useState({
        name: '',
        email:'',
        description:''
    })
    
    return (

        <div className="main" style={{minHeight: '200px'}}>
            
            <div>
                   <Switch>  
                       <Route path="/portfoliolook/projects">
                           <Projects/>
                       </Route>   
                       <Route path="/portfoliolook/contact" >
                           <Contact myInput={myInput} setMyInput={setMyInput}/>
                       </Route>
                       <Route path="/portfoliolook/skills">
                           <Skills/>
                       </Route>
                       <Route path="/portfoliolook">
                           <About/>
                       </Route>
                   </Switch> 
            </div>
            
        </div>
    )
}
