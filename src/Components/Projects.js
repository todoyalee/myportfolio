import React,{useEffect, useState} from 'react'
import Card from './Card'
import Reveal from 'react-awesome-reveal'
import {PropagateLoader} from 'react-spinners'
import { keyframes } from "@emotion/react";
import cardsData from '../data/cardsData'

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
                {cardsData.map(cardData =>{
                    return (
                        <li><Card
                            cardData= {cardData}
                        /></li>
                    )
                } )}
            </Reveal>
            
            
        </ul>
        
    )

}

export default Projects