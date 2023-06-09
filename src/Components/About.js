import React,{useState,useEffect} from 'react'
import myCV from '../images/myCV.pdf'
import Fade from 'react-reveal/Fade'
import lyceeImg from '../images/institutes/lyceeEnnasr.jpg'

import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import GitHubIcon from '@material-ui/icons/GitHub';
import {PropagateLoader} from 'react-spinners'


function About({images}) {
    
    const [loading , setLoading] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
             setLoading(false)
        },1000)
    },[])

    return (
        loading? 
            <div className="load">
                <PropagateLoader

                ></PropagateLoader>
            </div>
        :
        <div className ="aboutme">
            
            <Fade top distance="50px">
            <p>
                Enthusiastic Software engineering student eager to contribute to 
                team success through diligence, attention to the slightest details and 
                above average organizational skills. Good exeperience about projects in modern 
                technologies and frameworks. Motivated to learn, prosper and excel 
                in the computer science industry.
            </p>
            </Fade>
            <br></br>
            <h3>
                Studied at :
            </h3>
            <ul >
                <hr/>
                <div class="flexed">
                    <Fade left distance="50px" delay={150} >
                    <li>Lycee Bardo 2</li>
                    </Fade>
                    <img src={images.highSchoolImg} alt="lycee ennasr" ></img>
                </div>
                <hr></hr>
                <div class="flexed">
                    <Fade left distance="50px" delay={300}>
                    <li>Computer Science student at Higher Institute of Applied Sciences and Technology of Mateur (ISSATM)</li>
                    </Fade>
                    <img src={images.universityImg} alt="ISSATM" ></img>
                </div>
                <hr></hr>
            </ul>
            

            <div className="flex">

                <Fade bottom >
                    <a href={myCV} download className ="download"  >Download CV!</a>
                </Fade>
                <a href="https://github.com/todoyalee" target="_blank" className="icon-holder" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="icon gh" />
                </a>
                <a href="https://www.linkedin.com/in/mohamed-ali-belkouri-795896225/" target="_blank" className="icon-holder" rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className="icon linked" />
                </a>
            </div>



        </div>
    )
}

export default About
