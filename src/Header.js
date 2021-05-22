import React, { useRef, useEffect} from 'react'
import myImg from './images/myImg.jpg'
import {Link, useLocation} from 'react-router-dom'

function Header(props) {

    const liArray = [useRef(),useRef(),useRef(),useRef()];
    const [about, skills, projects,contact] = liArray
    const location = useLocation();

    const setCurrent=(current)=>{
      liArray.forEach(li=>{
        li.current.classList.remove('current');
      })
      liArray[current].current.classList.add('current');
    }

    useEffect(()=>{
      console.log(location.pathname)
      if(location.pathname==="/portfoliolook/skills") setCurrent(1);
      else if (location.pathname==="/portfoliolook/"||location.pathname==="/portfoliolook" ) setCurrent(0);
      else if (location.pathname==="/portfoliolook/contact") setCurrent(3);
      else setCurrent(2);
      
      // eslint-disable-next-line react-hooks/exhaustive-deps
    })


    return (
        <div className="header">
          <img src={myImg} alt="this is me."/>
          <ul className="navigation">
            <Link to="/portfoliolook" >
            <li  ref={about}>about me</li>
            </Link>
            <Link to="/portfoliolook/skills" >
            <li  ref={skills}>Skills</li>
            </Link>
            <Link to="/portfoliolook/projects">
            <li ref={projects}>Projects</li>
            </Link>
            <Link to="/portfoliolook/contact" >
            <li   ref={contact}>Contact me</li>
            </Link>
          </ul>
        </div>
    )
}

export default Header;
