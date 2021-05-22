import React,{useState,useEffect} from 'react'
import Images from './Images'

import {PropagateLoader} from 'react-spinners'
import rocket from '../images/svg/rocket.png'
import {webSkills,basicSkills,dataSkills} from './Necessities'
import {Fade} from 'react-reveal'

function Skills() {

    const [loading , setLoading] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
             setLoading(false)
        },1000)
    },[])


    return (
        loading? 
            <div className="load">
                <PropagateLoader></PropagateLoader>
            </div>
        :
        <div className='Skills'>
            <Fade>
            
            <div className="skills">
                <div >
                    <h3>
                        Basic Skills
                    </h3>
                    <Fade left distance="100px">
                    <ul>
                        {basicSkills.map(skill=> (<li><img src={rocket} alt=""></img>{skill}</li>))}
                    </ul>
                    </Fade>
                </div>
                
                
                <div>
                    <h3>Data Analysis Skills</h3>
                    <Fade right distance="100px">
                        <ul>
                            {dataSkills.map(skill=> (<li><img src={rocket} alt=""></img>{skill}</li>))}
                        </ul>
                    </Fade>
                </div>

                <div >
                    <h3>
                        Web Skills
                    </h3>
                    <Fade bottom distance="50px">
                    <ul>
                        {webSkills.map(skill=> (<li><img src={rocket} alt=""></img>{skill}</li>))}
                    </ul>
                    </Fade>
                </div>
            </div>
            
            <Images/>
            
            </Fade>
        </div>
    )
}

export default Skills
