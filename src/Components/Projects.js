import React,{useEffect, useState} from 'react'
import Card from './Card'
import Reveal,{Fade} from 'react-awesome-reveal'
import {PropagateLoader} from 'react-spinners'
import { keyframes } from "@emotion/react";

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-100px, -50px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;


const projectsStyle={
    display:'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))',
    columnGap:'20px',
    rowGap:'20px'
}

function Projects(){

    const [loading , setLoading] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
             setLoading(false)
        },1000)
    },[])

    return(
        loading? 
            <div className="load">
                <PropagateLoader></PropagateLoader>
            </div>
        :
        
        <ul className="projects" style={projectsStyle}>
            <Reveal cascade keyframes={customAnimation}>
            <li><Card /></li>
            <li><Card /></li>
            <li><Card /></li>
            <li><Card /></li>
            <li><Card /></li>
            </Reveal>
            
            
        </ul>
        
    )

}

export default Projects